import { call, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from './constants';
import { getPostById, getUserById } from '../../domain/api';

function* fetchPostDetails(action) {
  try {
    const post = yield call(getPostById, action.payload);
    yield put(actions.getPostDetailsSuccess(post));
    yield put(actions.getUserDetailsRequest(post.userId)); // Automatically fetch user details
  } catch (error) {
    yield put(actions.getPostDetailsFailure(error.message));
  }
}

function* fetchUserDetails(action) {
  try {
    const user = yield call(getUserById, action.payload);
    yield put(actions.getUserDetailsSuccess(user));
  } catch (error) {
    yield put(actions.getUserDetailsFailure(error.message));
  }
}

function* detailSaga() {
  yield takeEvery(types.GET_POST_DETAILS_REQUEST, fetchPostDetails);
  yield takeEvery(types.GET_USER_DETAILS_REQUEST, fetchUserDetails);
}

export default detailSaga;
