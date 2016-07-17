export const QUERY_SEARCH = 'QUERY_SEARCH';

export function querySearch(query) {
  return {
    type: QUERY_SEARCH,
    payload: {
      query
    }
  }
}
