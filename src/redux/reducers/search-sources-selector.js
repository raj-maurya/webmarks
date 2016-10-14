import { persistentReducer } from 'redux-pouchdb';

import { SELECT_SOURCE, UNSELECT_SOURCE, ADD_SOURCE } from '../actions/search-sources-selector';

const dummySources = [
	{
		id: 0,
		name: 'Trustable Stuff',
        indexed: true
	},
	{
		id: 1,
		name: 'Science Unleashed',
        indexed: true
	},
	{
		id: 2,
		name: 'We-Say-So',
        indexed: true
	},
	{
		id: 3,
		name: 'Mom knows better',
        indexed: true
	},
	{
		id: 4,
		name: 'Grandma knows even better still',
        indexed: true
	},
	{
		id: 5,
		name: 'Factual reporting',
        indexed: true
	},
	{
		id: 6,
		name: 'Intergalactic whispers',
        indexed: true
	},
	{
		id: 7,
		name: 'Written with toes',
        indexed: true
	},
	{
		id: 8,
		name: 'The pedantic paper',
        indexed: true
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
    if (action.type===ADD_SOURCE) {
        const newSource = {
            id: state.allSources.length,
            name: action.sourceName,
            indexed: false
        };

        state = {
            allSources: [...state.allSources, newSource],
            selectedSources: [...state.selectedSources, newSource]
        }
    }
	return state;
}

export default persistentReducer(searchSourcesSelector);
