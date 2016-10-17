export const SELECT_SOURCE = 'SELECT_SOURCE';
export const UNSELECT_SOURCE = 'UNSELECT_SOURCE';
export const ADD_SOURCE = 'ADD_SOURCE';
export const REMOVE_SOURCE = 'REMOVE_SOURCE';

export function selectSource(id) {
	return {
		type: SELECT_SOURCE,
		id,
	}
}

export function unselectSource(id) {
	return {
		type: UNSELECT_SOURCE,
		id,
	}
}

export function addSource(sourceName) {
    return {
        type: ADD_SOURCE,
        sourceName
    }
}

export function removeSource(id) {
    return {
        type: REMOVE_SOURCE,
        id,
    }
}