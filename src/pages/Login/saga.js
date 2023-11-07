import { call, put, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from './actions';
import { LOGIN_REQUEST } from './constants';
import { loginUser } from '../../domain/api'; // Replace with the actual path to your API file

function* loginSaga(action) {
  try {
    const response = yield call(loginUser, action.payload.credentials);
    console.log(response.email)
    if (response) {
      localStorage.setItem('userData', JSON.stringify(response));
      yield put(loginSuccess(response));
      action.payload.navigate("/home"); // Ganti dengan path yang benar untuk halaman home Anda
      // Tidak perlu alert di sini karena navigasi sudah cukup sebagai feedback
    } else {
      // Langkah ini seharusnya tidak perlu karena `loginUser` akan melempar error
      // jika pengguna tidak ditemukan atau ada masalah lain.
      throw new Error('Invalid credentials');
    }
  } catch (error) {
    yield put(loginFailure(error.toString()));
    // Alert ini akan dihapus karena kita akan menampilkan error di form
  }
}

export default function* watchLoginRequest() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
