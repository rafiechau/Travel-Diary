import { call, put, takeLatest } from 'redux-saga/effects'
import { BOOKMARK_POST_REQUEST, GET_ALL_POST } from './constants'
import { createBookmark, getAllPost } from '../../domain/api'
import { bookmarkPostFailure, bookmarkPostSuccess, setAllPost } from './actions'



export function* doGetAllPost() {
  try{
    const response = yield call(getAllPost)
    yield put(setAllPost(response))
    console.log(response, "<<<< respon saga")
  }catch(error){
    console.log(error, "<<<< error")
  }
}

function* bookmarkPost(action) {
  try {
    const post = yield call(createBookmark, action.payload);
    console.log(post)
    yield put(bookmarkPostSuccess(post));
  } catch (error) {
    yield put(bookmarkPostFailure(error.toString()));
    console.log(error)
  }
}

export default function* homeSaga() {
  yield takeLatest(GET_ALL_POST, doGetAllPost),
  yield takeLatest(BOOKMARK_POST_REQUEST, bookmarkPost);
}