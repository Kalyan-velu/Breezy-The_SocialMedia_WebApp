import {configureStore} from '@reduxjs/toolkit';
import {
    fetchReducer,
    getUserProfileReducer,
    postOfFollowingReducer, searchUsersReducer,
    specificUsersReducer,
    updateProfileReducer,
    userReducer
} from "../features/reducers/user";
import {followReducer, likeReducer, myPostsReducer, userPostsReducer} from "../features/reducers/Post";
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
        chats:accessChat
    },
});