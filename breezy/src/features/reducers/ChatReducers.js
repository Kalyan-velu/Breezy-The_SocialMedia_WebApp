import {createAction, createReducer} from "@reduxjs/toolkit";

const accessChatRequest=createAction('accessChatRequest')
const accessChatSuccess=createAction('accessChatSuccess')
const accessChatFailure=createAction('accessChatFailure')
const fetchChatRequest=createAction('fetchChatRequest')
const fetchChatSuccess=createAction('fetchChatSuccess')
const fetchChatFailure=createAction('fetchChatFailure')
const setSelectedChatRequest=createAction('setSelectedChatRequest')
const setSelectedChatSuccess=createAction('setSelectedChatSuccess')
const setSelectedChatFailure=createAction('setSelectedChatFailure')
const clearMessage=createAction('clearMessage')
const clearError=createAction('clearError')

const initialState = {
    chat:null,
    chats: [],
    selectedChat:null
}

export const accessChat = createReducer(initialState, (builder)=>{
    builder
        .addCase(accessChatRequest, (state) => {
                state.loading = true;
         })
        .addCase(accessChatSuccess, (state, action) => {
        state.loading = false;
        state.chat = action.payload;
        state.fetchAgain=true
        })
        .addCase(accessChatFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        })
        .addCase(fetchChatRequest, (state) => {
        state.loading = true;
        })
        .addCase(fetchChatSuccess, (state, action) => {
        state.loading = false;
        state.chats = action.payload;
        state.fetchAgain=true
        })
        .addCase(fetchChatFailure, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        })
        .addCase(setSelectedChatRequest, (state) => {
        state.loading = true;
        })
        .addCase(setSelectedChatSuccess, (state, action) => {
        state.loading = false;
        state.selectedChat = action.payload;
        state.fetchAgain=true
        })
        .addCase(setSelectedChatFailure, (state, action) => {
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