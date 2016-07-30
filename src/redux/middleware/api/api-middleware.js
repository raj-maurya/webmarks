import fetch from '../../../core/fetch';

function callApi(endpoint, method = 'get', data = {}, config = {}) {
  let fetchConfig = {
    method: method,
    config
  };

  if (method !== 'get'){
    fetchConfig = Object.assign({}, fetchConfig, {data})
  }

  return fetch(endpoint,fetchConfig)
    .then(response => ({json: response.json(), response}))
    .then(({ json, response }) => {
    if (response.status > 300) {
      return Promise.reject(json);
    }
    return json;
  });
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint, method } = callAPI;
  const { types } = callAPI;

  if (!method) {
    method = 'get';
  }

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [requestType, successType, failureType] = types;
  next(actionWith({type: requestType, data: callAPI.data}));

  return callApi(endpoint, method, callAPI.data || {}, callAPI.config || {})
    .then(
      response => next(actionWith({
        data: callAPI.data,
        json: response,
        type: successType
      }
    )), error => {
      // TODO: in case of 401 remove credentials from localStorage and redirect to auth
      return next(actionWith({
        type: failureType,
        error: error.message || 'Something bad happened'
      }));
    }
  );
};
