import { call, put, takeLatest } from 'redux-saga/effects'
import {  getAllBookmarks } from '../../domain/api'
import { setAllBookmark } from './actions'
import { GET_ALL_BOOKMARKS } from './constants'



export function* doGetAllBookmark() {
  try{
    const response = yield call(getAllBookmarks)
    yield put(setAllBookmark(response))
    console.log(response, "<<<< respon saga")
  }catch(error){
    console.log(error, "<<<< error")
  }
}


export default function* bookmarkSaga() {
  yield takeLatest(GET_ALL_BOOKMARKS, doGetAllBookmark)
}
