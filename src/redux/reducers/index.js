import { combineReducers } from 'redux';
import runtime from './runtime';
import searchResults from './search-results';
import { routerReducer } from 'react-router-redux'


export default combineReducers({
  runtime,
  searchResults,
  routing: routerReducer
});
