import * as types from './constants';

export const getPostDetailsRequest = (id) => ({
  type: types.GET_POST_DETAILS_REQUEST,
  payload: id,
});

export const getPostDetailsSuccess = (post) => ({
  type: types.GET_POST_DETAILS_SUCCESS,
  payload: post,
});

export const getPostDetailsFailure = (error) => ({
  type: types.GET_POST_DETAILS_FAILURE,
  payload: error,
});

export const getUserDetailsRequest = (userId) => ({
  type: types.GET_USER_DETAILS_REQUEST,
  payload: userId,
});

export const getUserDetailsSuccess = (user) => ({
  type: types.GET_USER_DETAILS_SUCCESS,
  payload: user,
});

export const getUserDetailsFailure = (error) => ({
  type: types.GET_USER_DETAILS_FAILURE,
  payload: error,
});
