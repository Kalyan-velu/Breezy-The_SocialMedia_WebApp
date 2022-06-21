import {configureStore} from '@reduxjs/toolkit';
import {allUsersReducer, postOfFollowingReducer, userReducer} from "../features/reducers/user";
import {likeReducer} from "../features/reducers/Post";


export const store = configureStore({
    reducer: {
        user: userReducer,
        postOfFollowing: postOfFollowingReducer, //postOfFollowingReducer
        allUsers: allUsersReducer,
        like: likeReducer,
    },
});