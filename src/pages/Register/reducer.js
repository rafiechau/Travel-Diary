import { produce } from 'immer';
import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, SET_NEW_USER } from './constants';

// Menambahkan status ke initialState untuk tracking loading dan error
export const initialState = {
  users: [],
  loading: false,
  error: null,
};

const registerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case REGISTER_REQUEST:
        // Mulai proses loading dan reset error saat permintaan registrasi dimulai
        draft.loading = true;
        draft.error = null;
        break;
      case REGISTER_SUCCESS:
        // Registrasi berhasil, set loading false dan tambahkan user ke state
        draft.users.push(action.payload);
        draft.loading = false;
        break;
      case REGISTER_FAILURE:
        // Registrasi gagal, set loading false dan set error message
        draft.loading = false;
        draft.error = action.payload;
        break;
      case SET_NEW_USER:
        // Tambahkan user baru ke daftar pengguna tanpa mengubah status loading/error
        draft.users.push(action.user);
        break;
      // Tambahkan case lain jika ada
      default:
        // Return state default jika action type tidak dikenali
        return state;
    }
  });

export default registerReducer;
