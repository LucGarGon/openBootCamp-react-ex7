export const API_CALL_REQUEST = 'API_CALL_REQUEST';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

export function login(email, password) {
  return {
    type: API_CALL_REQUEST,
    payload: {
      method: 'post',
      url: 'https://regres.in/api/login',
      data: {
        email,
        password,
      },
      okAction: API_CALL_SUCCESS,
      failAction: API_CALL_FAILURE,
    },
  };
}

export function httpRequest(method, url, data) {
  return {
    type: API_CALL_REQUEST,
    payload: {
      method,
      url,
      data,
      okAction: API_CALL_SUCCESS,
      failAction: API_CALL_FAILURE,
    },
  };
}
