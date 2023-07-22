import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import {accessChat} from "../features/reducers/ChatReducers";
import {followReducer, likeReducer, myPostsReducer, userPostsReducer} from "../features/reducers/PostReducers";
import {appStatus} from "../features/reducers/StatusReducer.jsx";
import {themeReducer} from "../features/reducers/ThemeReducer.jsx";
import {
  fetchReducer,
  getUserProfileReducer,
  passwordReducer,
  postOfFollowingReducer,
  searchUsersReducer,
  specificUsersReducer,
  updateProfileReducer
} from "../features/reducers/UserReducers";

const themeConfig = {
  key: 'theme',
  storage,
}

const themePReducer = persistReducer(themeConfig, themeReducer)
export const store = configureStore({
  reducer: {
    theme: themePReducer,
    app: appStatus,
    postOfFollowing: postOfFollowingReducer, //postOfFollowingReducer
    specificUsers: specificUsersReducer,
    like: likeReducer,
    myPosts: myPostsReducer,
    updateProfile: updateProfileReducer,
    userPosts: userPostsReducer,
    getUserProfile: getUserProfileReducer,
    follow: followReducer,
    search: searchUsersReducer,
    fetch: fetchReducer,
    chats: accessChat,
    password: passwordReducer,
  },
  middleware: [thunk]
});

export const persist = persistStore(store)