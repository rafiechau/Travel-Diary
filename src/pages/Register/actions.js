import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  SET_NEW_USER
} from './constants';

// Action creator untuk memulai proses registrasi
export const registerRequest = (userData) => ({
  type: REGISTER_REQUEST,
  payload: userData,
});

// Action creator untuk menangani berhasilnya registrasi
export const registerSuccess = (userData) => ({
  type: REGISTER_SUCCESS,
  payload: userData,
});

// Action creator untuk menangani kegagalan registrasi
export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

// Action creator untuk menambahkan user baru ke state
export const setNewUser = (user) => ({
  type: SET_NEW_USER,
  payload: user,
});

