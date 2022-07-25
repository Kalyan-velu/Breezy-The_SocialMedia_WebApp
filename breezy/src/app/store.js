import {configureStore} from '@reduxjs/toolkit';
import {
    fetchReducer,
    getUserProfileReducer, passwordReducer,
    postOfFollowingReducer, searchUsersReducer,
    specificUsersReducer,
    updateProfileReducer,
    userReducer
} from "../features/reducers/UserReducers";
import {followReducer, likeReducer, myPostsReducer, userPostsReducer} from "../features/reducers/PostReducers";
import {accessChat} from "../features/reducers/ChatReducers";


export const store = configureStore({
    reducer: {
        user: userReducer,
        postOfFollowing: postOfFollowingReducer, //postOfFollowingReducer
        specificUsers: specificUsersReducer,
        like: likeReducer,
        myPosts: myPostsReducer,
        updateProfile:updateProfileReducer,
        userPosts:userPostsReducer,
        getUserProfile:getUserProfileReducer,
        follow:followReducer,
        search:searchUsersReducer,
        fetch:fetchReducer,
        chats:accessChat,
        password:passwordReducer,
    },
});