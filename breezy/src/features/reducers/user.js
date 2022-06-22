import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
}

export const userReducer = createReducer(initialState, {
    LoginRequest: (state) => {
        state.loading = true
    },
    LoginSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true
    },
    LoginFailed: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false
    },

    RegisterRequest: (state) => {
        state.loading = true
    },
    RegisterSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true
    },
    RegisterFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false
    },

    LoadUserRequest: (state) => {
        state.loading = true
    },
    LoadUserSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true
    },
    LoadUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false
    },
    clearError: (state) => {
        state.error = null;
    },
    Logout: (state) => {
        state.user = null;
        state.isAuthenticated = false;
    }
})

export const postOfFollowingReducer = createReducer(initialState, {
    postOfFollowingRequest: (state) => {
        state.loading = true
    },
    postOfFollowingSuccess: (state, action) => {
        state.loading = false;
        state.posts = action.payload;
    },
    postOfFollowingFailed: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearError: (state) => {
        state.error = null;
    }
})

export const allUsersReducer = createReducer(initialState, {
    allUsersRequest: (state) => {
        state.loading = true
    },
    allUsersSuccess: (state, action) => {
        state.loading = false;
        state.users = action.payload;
    },
    allUsersFailed: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearError: (state) => {
        state.error = null;
    },
    Logout: (state) => {
        state.user = null;
        state.isAuthenticated = false;
    }
})