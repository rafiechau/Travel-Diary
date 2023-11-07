// actions.js
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';

export const loginRequest = (credentials, navigate) => ({
  type: LOGIN_REQUEST,
  payload: {credentials, navigate},
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
