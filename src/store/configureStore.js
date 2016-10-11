import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import PouchDB from 'pouchdb'
import { persistentStore } from 'redux-pouchdb';
import apiMiddleware from '../redux/middleware/api';
import rootReducer from '../redux/reducers';
import { routerMiddleware } from 'react-router-redux';


export default function configureStore(history, initialState) {
  const db = new PouchDB('reduxstore')

  const middleware = [thunk];
  const reduxRouterMiddleware = routerMiddleware(history);
  middleware.push(reduxRouterMiddleware);
  middleware.push(apiMiddleware);
  let enhancer;

  if (__DEV__) {
    if (process.env.BROWSER) {
      const createLogger = require('redux-logger'); // eslint-disable-line global-require
      middleware.push(createLogger({
        collapsed: true,
      }));
    } else {
      // Server side redux action logger
      middleware.push(store => next => action => { // eslint-disable-line no-unused-vars
        const payload = JSON.stringify(action.payload);
        console.log(` * ${action.type}: ${payload}`); // eslint-disable-line no-console
        return next(action);
      });
    }

    // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
    let devToolsExtension = f => f;
    if (process.env.BROWSER && window.devToolsExtension) {
      devToolsExtension = window.devToolsExtension();
    }

    let addPersistentStore = f => f;
    if (process.env.BROWSER) {
      addPersistentStore = persistentStore(db)
    }

    enhancer = compose(
      applyMiddleware(...middleware),
      addPersistentStore,
      devToolsExtension,
    );
  } else {
    enhancer = compose(
      applyMiddleware(...middleware),
      addPersistentStore,
    );
  }

  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (__DEV__ && module.hot) {
    module.hot.accept('../redux/reducers', () =>
        store.replaceReducer(require('../redux/reducers').default) // eslint-disable-line global-require
    );
  }

  return store;
}
