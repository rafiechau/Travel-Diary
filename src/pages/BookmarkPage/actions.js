import { GET_ALL_BOOKMARKS, SET_ALL_BOOKMARKS } from "./constants"


export const getAllBookmark = () => (
    {
        type: GET_ALL_BOOKMARKS,
    }
)

export const setAllBookmark = (bookmarks) => (
    {
        type: SET_ALL_BOOKMARKS,
        bookmarks
    }
)

