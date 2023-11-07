import { produce } from 'immer';
import { CREATE_POST_FAILURE, CREATE_POST_SUCCESS, POST_REQUEST, SET_NEW_POST } from './constants';


const initialState = {
  posts: [],
  loading: false,
  error: null,
};

// Post reducer handling post actions
const postReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case POST_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case CREATE_POST_SUCCESS:
        draft.posts.push(action.payload);
        draft.loading = false
        break
      case CREATE_POST_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;
      case SET_NEW_POST:
        draft.posts.push(action.posts)
        break
      default:
        return state;
    }
  });

export default postReducer;
