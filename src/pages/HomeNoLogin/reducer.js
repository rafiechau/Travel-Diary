import { produce } from "immer"
import { BOOKMARK_POST_FAILURE, BOOKMARK_POST_SUCCESS, SET_ALL_POST } from "./constants"


export const initialState = {
    posts: [],
    bookmarks: [],
    error: null,
}

const homeReducer = (state = initialState, action) => 
    produce(state, (draft) => {
        switch(action.type){
            case SET_ALL_POST: 
                console.log("apa ini")
                draft.posts = action.posts
                break;
            case BOOKMARK_POST_SUCCESS:
                // return {
                //     ...state,
                //     bookmarks: [...state.bookmarks, action.payload],
                // };
                if (!state.bookmarks.some(bookmark => bookmark.id === action.payload.id)) {
                    draft.bookmarks.push(action.payload);
                  }
                  break;
            case BOOKMARK_POST_FAILURE:
                return {
                    ...state,
                    error: action.payload,
            };
            default:
                return state;
        }
    })

export default homeReducer