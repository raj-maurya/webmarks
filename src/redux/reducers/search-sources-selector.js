import _ from 'lodash';
import { persistentReducer } from 'redux-pouchdb';

import { SEARCH_ADD_SOURCE, SEARCH_REMOVE_SOURCE } from '../actions/search-sources-selector';

const initialState = {
	selectedSources: [],
};

function searchSourcesSelector(state, action) {
	if (state===undefined) {
		state = initialState;
	}

	if (action.type===SEARCH_ADD_SOURCE) {
		state = {
			...state,
			selectedSources: _.concat(state.selectedSources, {id: action.id}),
		}
	}
	if (action.type===SEARCH_REMOVE_SOURCE) {
		state = {
			...state,
			selectedSources: _.reject(state.selectedSources, {id: action.id})
		}
	}
	return state;
}

export default persistentReducer(searchSourcesSelector);