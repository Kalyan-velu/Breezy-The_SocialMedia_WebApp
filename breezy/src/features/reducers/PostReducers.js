import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    fetchAgain:false
}

const clearMessage=createAction('clearMessage')
const clearError=createAction('clearError')

const likeRequest=createAction('likeRequest')
const likeSuccess=createAction('likeSuccess')
const likeFailure=createAction('likeFailure')
//add comment
const addCommentRequest=createAction('addCommentRequest')
const addCommentSuccess=createAction('addCommentSuccess')
const addCommentFailure=createAction('addCommentFailure')
//delete
const deleteCommentRequest=createAction('deleteCommentRequest')
const deleteCommentSuccess=createAction('deleteCommentSuccess')
const deleteCommentFailure=createAction('deleteCommentFailure')

const newPostRequest=createAction('newPostRequest')
const newPostSuccess=createAction('newPostSuccess')
const newPostFailure=createAction('newPostFailure')

const updateCaptionRequest=createAction('updateCaptionRequest')
const updateCaptionSuccess=createAction('updateCaptionSuccess')
const updateCaptionFailure=createAction('updateCaptionFailure')

const deletePostRequest=createAction('deletePostRequest')
const deletePostSuccess=createAction('deletePostSuccess')
const deletePostFailure=createAction('deletePostFailure')

export const likeReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase(likeRequest,(state) => {
        state.loading = true;
    })
        .addCase(likeSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.fetchAgain = true;
    })
        .addCase(likeFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
        .addCase(addCommentRequest, (state) => {
        state.loading = true;
    })
        .addCase(addCommentSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.fetchAgain = true;
    })
        .addCase(addCommentFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
        .addCase(deleteCommentRequest, (state) => {
            state.loading = true;
        })
        .addCase(deleteCommentSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.fetchAgain=true
    })
        .addCase(deleteCommentFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
        .addCase(newPostRequest, (state) => {
        state.loading = true;
    })
        .addCase(newPostSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.fetchAgain=true
    })
        .addCase(newPostFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
        .addCase(updateCaptionRequest, (state) => {
        state.loading = true;
    })
        .addCase(updateCaptionSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.fetchAgain=true
    })
        .addCase(updateCaptionFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
        .addCase(deletePostRequest, (state) => {
        state.loading = true;
    })
        .addCase(deletePostSuccess, (state, action) => {
        state.loading=false;
        state.message=action.payload
    })
        .addCase(deletePostFailure,(state,action)=>{
        state.loading=false;
        state.error=action.payload;
    })
        .addCase(clearMessage, (state) => {
        state.message = null;
    })
        .addCase(clearError, (state) => {
        state.error = null;
    })
});

const myPostsRequest=createAction('myPostsRequest')
const myPostsSuccess=createAction('myPostsSuccess')
const myPostsFailure=createAction('myPostsFailure')

const userPostsRequest=createAction('userPostsRequest')
const userPostsSuccess=createAction('userPostsSuccess')
const userPostsFailure=createAction('userPostsFailure')

const followRequest=createAction('followRequest')
const followSuccess=createAction('followSuccess')
const followFailure=createAction('followFailure')


export const myPostsReducer = createReducer(initialState, (builder)=>{
    builder
        .addCase(myPostsRequest, (state) => {
        state.loading = true;
    })
    .addCase(myPostsSuccess, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
    })
    .addCase(myPostsFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase(clearMessage, (state) => {
        state.message = null;
    })
    .addCase(clearError, (state) => {
        state.error = null;
    })
}  )

export const userPostsReducer = createReducer(initialState, (builder )=> {
    builder
        .addCase(userPostsRequest, (state) => {
        state.loading = true;
    })
    .addCase(userPostsSuccess, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
    })
    .addCase(userPostsFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase(clearMessage, (state) => {
        state.message = null;
    })
    .addCase(clearError, (state) => {
        state.error = null;
    })
}  )

export const followReducer = createReducer(initialState,(builder)=> {
    builder
    .addCase(followRequest, (state) => {
        state.loading = true;
    })
    .addCase(followSuccess, (state, action) => {
        state.loading = false;
        state.message = action.payload;
        state.fetchAgain=true
    })
.addCase(followFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
    })
    .addCase(clearMessage, (state) => {
        state.message = null;
    })
.addCase(clearError, (state) => {
        state.error = null;
    })
}  )