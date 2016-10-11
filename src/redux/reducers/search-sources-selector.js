import { persistentReducer } from 'redux-pouchdb';

import { SELECT_SOURCE, UNSELECT_SOURCE } from '../actions/search-sources-selector';

const dummySources = [
	{
		id: 0,
		name: 'Trustable Stuff',
	},
	{
		id: 1,
		name: 'Science Unleashed',
	},
	{
		id: 2,
		name: 'We-Say-So',
	},
	{
		id: 3,
		name: 'Mom knows better',
	},
	{
		id: 4,
		name: 'Grandma knows even better still',
	},
	{
		id: 5,
		name: 'Factual reporting',
	},
	{
		id: 6,
		name: 'Intergalactic whispers',
	},
	{
		id: 7,
		name: 'Written with toes',
	},
	{
		id: 8,
		name: 'The pedantic paper',
	},
]

const initialState = {
	allSources: dummySources,
	selectedSources: [],
};

function searchSourcesSelector(state = initialState, action) {
	if (action.type===SELECT_SOURCE) {
		state = {
			...state,
			selectedSources: Array.concat(state.selectedSources, {id: action.id}),
		}
	}
	if (action.type===UNSELECT_SOURCE) {
		state = {
			...state,
			selectedSources: state.selectedSources.filter(s => s.id!==action.id)
		}
	}
	return state;
}

export default persistentReducer(searchSourcesSelector);
