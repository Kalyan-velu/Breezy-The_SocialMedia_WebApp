import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    chat:null,
    chats: [],
    selectedChat:null
}


export const accessChat = createReducer(initialState, {
    accessChatRequest: (state) => {
        state.loading = true;
    },
    accessChatSuccess: (state, action) => {
        state.loading = false;
        state.chat = action.payload;
        state.fetchAgain=true
    },
    accessChatFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    fetchChatRequest: (state) => {
        state.loading = true;
    },
    fetchChatSuccess: (state, action) => {
        state.loading = false;
        state.chats = action.payload;
        state.fetchAgain=true
    },
    fetchChatFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    setSelectedChatRequest: (state) => {
        state.loading = true;
    },
    setSelectedChatSuccess: (state, action) => {
        state.loading = false;
        state.selectedChat = action.payload;
        state.fetchAgain=true
    },
    setSelectedChatFailure: (state, action) => {
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