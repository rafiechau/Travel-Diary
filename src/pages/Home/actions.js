import {  BOOKMARK_POST_FAILURE, BOOKMARK_POST_REQUEST, BOOKMARK_POST_SUCCESS, GET_ALL_POST, SET_ALL_POST } from "./constants";

export const getAllPost = () => (
    {
        type: GET_ALL_POST,
    }
)

export const setAllPost = (posts) => (
    {
        type: SET_ALL_POST,
        posts
    }
)

export const bookmarkPostRequest = (postData) => ({
    type: BOOKMARK_POST_REQUEST,
    payload: postData,
  });
  
  export const bookmarkPostSuccess = (post) => ({
    type: BOOKMARK_POST_SUCCESS,
    payload: post,
  });
  
  export const bookmarkPostFailure = (error) => ({
    type: BOOKMARK_POST_FAILURE,
    payload: error,
  });