import { produce } from "immer"
import { SET_ALL_BOOKMARKS } from "./constants"


export const initialState = {
    bookmarks: [],
    error: null,
}

const bookmarkReducer = (state = initialState, action) => 
    produce(state, (draft) => {
        switch(action.type){
            case SET_ALL_BOOKMARKS: 
                draft.bookmarks = action.bookmarks
                break;
            default:
                return state;
        }
    })

export default bookmarkReducer