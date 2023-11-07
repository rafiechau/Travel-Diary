import { produce } from 'immer';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';

// Initial state
const initialState = {
  user: null,
  loading: false,
  error: null
};

const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case LOGIN_SUCCESS:
        draft.user = action.payload;
        draft.loading = false;
        break;
      case LOGIN_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      default:
        break;
    }
  });

export default loginReducer;
