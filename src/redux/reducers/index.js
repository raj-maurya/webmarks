import { combineReducers } from 'redux';
import runtime from './runtime';
import { routerReducer } from 'react-router-redux'


export default combineReducers({
  runtime,
  routing: routerReducer
});
