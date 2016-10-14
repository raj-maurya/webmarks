import { persistentReducer } from 'redux-pouchdb';
import uniqid from 'uniqid';

import { SELECT_SOURCE, UNSELECT_SOURCE, ADD_SOURCE, REMOVE_SOURCE } from '../actions/search-sources-selector';

const dummySources = [
	{
		id: uniqid(),
		name: 'Trustable Stuff',
        indexed: true
	},
	{
		id: uniqid(),
		name: 'Science Unleashed',
        indexed: true
	},
	{
		id: uniqid(),
		name: 'We-Say-So',
        indexed: true
	},
	{
		id: uniqid(),
		name: 'Mom knows better',
        indexed: true
	},
	{
		id: uniqid(),
		name: 'Grandma knows even better still',
        indexed: true
	},
	{
		id: uniqid(),
		name: 'Factual reporting',
        indexed: true
	},
	{
		id: uniqid(),
		name: 'Intergalactic whispers',
        indexed: true
	},
	{
		id: uniqid(),
		name: 'Written with toes',
        indexed: true
	},
	{
		id: uniqid(),
		name: 'The pedantic paper',
        indexed: true
	},
]

const initialState = {
	allSources: dummySources,
	selectedSources: [],
};

function searchSourcesSelector(state = initialState, action) {
	if (action.type === SELECT_SOURCE) {
		state = {
			...state,
			selectedSources: [...state.selectedSources, state.allSources.find(source => source.id === action.id)],
		}
	}

	if (action.type === UNSELECT_SOURCE) {
		state = {
			...state,
			selectedSources: state.selectedSources.filter(source => source.id !== action.id)
		}
	}

    if (action.type === ADD_SOURCE) {
        const newSource = {
            id: uniqid(),
            name: action.sourceName,
            indexed: false
        };

        state = {
            allSources: [...state.allSources, newSource],
            selectedSources: [...state.selectedSources, newSource]
        }
    }

    if(action.type === REMOVE_SOURCE) {
        state = {
            allSources: state.allSources.filter(source => source.id !== action.id),
            selectedSources: state.selectedSources.filter(source => source.id !== action.id)
        }
    }

	return state;
}

export default persistentReducer(searchSourcesSelector);
