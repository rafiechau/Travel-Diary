import { SET_NEW_POST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE, POST_REQUEST } from "./constants";



export const createPostAction = (post, navigate ) => ({
  type: POST_REQUEST,
  payload: {...post, navigate}
});


export const createPostSuccess = (post) => ({
  type: CREATE_POST_SUCCESS,
  payload: post,
});


export const createPostFailure = (error) => ({
  type: CREATE_POST_FAILURE,
  payload: error,
});


export const setNewPost = (post) => ({
  type: SET_NEW_POST,
  payload: post,
});

