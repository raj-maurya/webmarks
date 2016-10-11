import { persistentReducer } from 'redux-pouchdb';

import { SEARCH_ADD_SOURCE, SEARCH_REMOVE_SOURCE } from '../actions/search-sources-selector';

const initialState = {
	selectedSources: [],
};

function searchSourcesSelector(state = initialState, action) {
	if (action.type===SEARCH_ADD_SOURCE) {
		state = {
			...state,
			selectedSources: Array.concat(state.selectedSources, {id: action.id}),
		}
	}
	if (action.type===SEARCH_REMOVE_SOURCE) {
		state = {
			...state,
			selectedSources: state.selectedSources.filter(s => s.id!==action.id)
		}
	}
	return state;
}

export default persistentReducer(searchSourcesSelector);
