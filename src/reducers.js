import { combineReducers } from "redux";
// import homeReducer from "./pages/Home/reducer";
import registerReducer from "./pages/Register/reducer";
import loginReducer from "./pages/Login/reducer";
import homeReducer from "./pages/Home/reducer";
import addPostReducer from "./pages/AddPostPage/reducer";

import postReducer from "./pages/AddPostPage/reducer";
import detailReducer from "./pages/DetailPage/reducer";
import bookmarkReducer from "./pages/BookmarkPage/reducer";
// import reducer from "./pages/ProfilePage/reducer";

const rootReducer = combineReducers({
    registerReducer: registerReducer,
    loginReducer: loginReducer,
    homeReducer: homeReducer,
    addPostReducer: addPostReducer,
    postReducer: postReducer,
    detailReducer: detailReducer,
    bookmarkReducer: bookmarkReducer,
    // reducer: reducer,
})

export default rootReducer;