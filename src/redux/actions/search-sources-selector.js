export const SELECT_SOURCE = 'SELECT_SOURCE';
export const UNSELECT_SOURCE = 'UNSELECT_SOURCE';

export function addSource(id) {
	return {
		type: SELECT_SOURCE,
		id,
	}
}

export function removeSource(id) {
	return {
		type: UNSELECT_SOURCE,
		id,
	}
}
