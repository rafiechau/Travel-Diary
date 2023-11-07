import * as types from './constants';

const initialState = {
  post: {},
  user: {},
  loading: false,
  error: null,
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_POST_DETAILS_REQUEST:
    case types.GET_USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.GET_POST_DETAILS_SUCCESS:
      return {
        ...state,
        post: action.payload,
        loading: false,
      };
    case types.GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case types.GET_POST_DETAILS_FAILURE:
    case types.GET_USER_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default detailReducer;
