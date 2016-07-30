import { createReducer } from '../../../utils';
import { SEARCH_QUERY,SEARCH_QUERY_SUCCESS,SEARCH_QUERY_FAILURE } from '../../actions/search';

const initSearchResultState = {
  result: [],
  data: {},
  meta: {
    isLoading: false
  },
  error: {
    isError: false
  }
};

export default createReducer(initSearchResultState, {
  [SEARCH_QUERY]: (state, {data}) =>
    Object.assign({}, state, {
      data: {
        query: data.query
      },
      meta: {
        isLoading: true
      }
    }),
  [SEARCH_QUERY_SUCCESS]: (state, {json}) =>
    Object.assign({}, state, {
      result: json,
      isError: false,
      meta: {
        isLoading: false
      }
    }),
  [SEARCH_QUERY_FAILURE]: (state, {json}) =>
    Object.assign({}, state, {
      error: {
        error: json,
        isError: true
      },
      meta: {
        isLoading: false
      }
    })
});
