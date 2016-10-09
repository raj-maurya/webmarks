export const SEARCH_ADD_SOURCE = 'SEARCH_ADD_SOURCE';
export const SEARCH_REMOVE_SOURCE = 'SEARCH_REMOVE_SOURCE';

export function addSource(id) {
	return {
		type: SEARCH_ADD_SOURCE,
		id,
	}
}

export function removeSource(id) {
	return {
		type: SEARCH_REMOVE_SOURCE,
		id,
	}
}
