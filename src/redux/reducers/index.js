import { combineReducers } from 'redux';
import searchSourcesSelector from './search-sources-selector';
import searchResults from './search-results';
import { routerReducer } from 'react-router-redux'


export default combineReducers({
  searchSourcesSelector,
  searchResults,
  routing: routerReducer
});
