import { all } from 'redux-saga/effects'
import watchLoginRequest from './pages/Login/saga'
import homeSaga from './pages/Home/saga'
import addPostSaga from './pages/AddPostPage/saga'
import watchRegisterRequest from './pages/Register/saga'
import detailSaga from './pages/DetailPage/saga'
import bookmarkSaga from './pages/BookmarkPage/saga'
// import userSaga from './pages/ProfilePage/saga'

export default function* rootSaga() {
    //menjalankan semua saga yang ada di dalamnya
    yield all([
        watchRegisterRequest(),
        watchLoginRequest(),
        homeSaga(),
        addPostSaga(),
        detailSaga(),
        bookmarkSaga()
        // userSaga(),
    ])
  }