// saga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { createPost } from '../../domain/api'; // Adjust the import path

import {  POST_REQUEST } from './constants';
import { createPostFailure, createPostSuccess } from './actions';

function* doCreatePost(action) {
  try {
    // const newPost = yield call(createPost, action.payload);
    // console.log(newPost)
    // yield put(CREATE_POST_SUCCESS(newPost));
    // yield put(createPostSuccess(newPost));
    // action.payload.navigate("/profile");
    const { navigate, ...postData } = action.payload; // Ekstrak navigate dari payload
    const newPost = yield call(createPost, postData);
    yield put(createPostSuccess(newPost));
    navigate("/profile");
  } catch (error) {
    yield put(createPostFailure(error.message));
  }
}

export default function* addPostSaga() {
  yield takeLatest(POST_REQUEST, doCreatePost);
}
