import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    posts: [],
}

export const postReducer = createReducer(initialState, {
    SET_POSTS: (state, action) => {
        state.posts = action.payload;
    },
    ADD_POST: (state, action) => {
        state.posts.push(action.payload);
    },
    DELETE_POST: (state, action) => {
        state.posts = state.posts.filter(post => post.id !== action.payload);
    }
});

export const likeReducer = createReducer(initialState, {
    likeRequest: (state) => {
        state.loading = true;
    },
    likeSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    likeFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearMessage: (state) => {
        state.message = null;
    },
    clearError: (state) => {
        state.error = null;
    }
});