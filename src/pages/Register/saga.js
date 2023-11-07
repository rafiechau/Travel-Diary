import { call, put, takeLatest } from 'redux-saga/effects'
import { createUser, getUserByEmail } from '../../domain/api';
import { REGISTER_REQUEST } from './constants';
import { registerSuccess, registerFailure } from './actions';

function* registerSaga(action) {
  try {
    const existingUser = yield call(getUserByEmail, action.payload.email);
    if (existingUser.length > 0) {
      yield put(registerFailure('Email already registered'));
    } else {
      const newUser = yield call(createUser, action.payload);
      yield put(registerSuccess(newUser));
    }
  } catch (error) {
    yield put(registerFailure(error.message));
  }
}

export default function* watchRegisterRequest() {
  yield takeLatest(REGISTER_REQUEST, registerSaga);
}