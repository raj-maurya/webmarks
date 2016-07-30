import { combineReducers } from 'redux';
import searchResults from './search-results';
import { routerReducer } from 'react-router-redux'


export default combineReducers({
  searchResults,
  routing: routerReducer
});
