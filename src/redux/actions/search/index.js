import {CALL_API} from '../../middleware/api/api-middleware.js';

export const SEARCH_QUERY = 'SEARCH_QUERY';
export const SEARCH_QUERY_SUCCESS = 'SEARCH_QUERY_SUCCESS';
export const SEARCH_QUERY_FAILURE = 'SEARCH_QUERY_FAILURE';

export function querySearch({query, selectedSources}) {
  let endpoint = new URL('/api/search-results', document.baseURI)
  endpoint.searchParams.append('q', query)
  if (selectedSources !== undefined)
    endpoint.searchParams.append('sources', selectedSources.map(source => source.id).join(','));

  return {
    [CALL_API]: {
      types: [SEARCH_QUERY, SEARCH_QUERY_SUCCESS, SEARCH_QUERY_FAILURE],
      data: {
        query
      },
      method: 'get',
      endpoint: endpoint.toString(),
    }
  }
}
