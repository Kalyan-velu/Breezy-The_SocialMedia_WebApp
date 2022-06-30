import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    fetchAgain:false
}

export const likeReducer = createReducer(initialState, {
    likeRequest: (state) => {
        state.loading = true;
    },
    likeSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.fetchAgain = true;
    },
    likeFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    addCommentRequest: (state) => {
        state.loading = true;
    },
    addCommentSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.fetchAgain = true;
    },
    addCommentFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    deleteCommentRequest: (state) => {
        state.loading = true;
    },
    deleteCommentSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.fetchAgain=true
    },
    deleteCommentFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    newPostRequest: (state) => {
        state.loading = true;
    },
    newPostSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.fetchAgain=true
    },
    newPostFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    forgotPasswordRequest: (state) => {
        state.loading = true;
    },
    forgotPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    forgotPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    resetPasswordRequest: (state) => {
        state.loading = true;
    },
    resetPasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    resetPasswordFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    updateCaptionRequest: (state) => {
        state.loading = true;
    },
    updateCaptionSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.fetchAgain=true
    },
    updateCaptionFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    deletePostRequest: (state) => {
        state.loading = true;
    },
    deletePostSuccess: (state, action) => {
        state.loading=false;
        state.message=action.payload
    },
    deletePostFailure:(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    },
    clearMessage: (state) => {
        state.message = null;
    },
    clearError: (state) => {
        state.error = null;
    },
});

export const myPostsReducer = createReducer(initialState, {
    myPostsRequest: (state) => {
        state.loading = true;
    },
    myPostsSuccess: (state, action) => {
        state.loading = false;
        state.posts = action.payload;
    },
    myPostsFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearMessage: (state) => {
        state.message = null;
    },
    clearError: (state) => {
        state.error = null;
    }
}  )