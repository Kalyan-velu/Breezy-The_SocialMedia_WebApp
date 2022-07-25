import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    fetch:false,
    loading:false
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
    LogoutUserRequest: (state) => {
        state.loading = true
    },
    LogoutUserSuccess: (state) => {
        state.loading = false;
        state.user = null;
        state.postOfFollowing= null;
        state.isAuthenticated = false
    },
    LogoutUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = true
    },
    DeleteAccountRequest: (state) => {
        state.loading = true
    },
    DeleteAccountSuccess: (state,action) => {
        state.loading = false;
        state.user = null;
        state.message=action.payload;
        state.postOfFollowing= null;
        state.isAuthenticated = false
    },
    DeleteAccountFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = true
    },

    clearError: (state) => {
        state.error = null;
    },
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

export const specificUsersReducer = createReducer(initialState, {
    specificUsersRequest: (state) => {
        state.loading = true
    },
    specificUsersSuccess: (state, action) => {
        state.loading = false;
        state.users = action.payload;
    },
    specificUsersFailed: (state, action) => {
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

export const updateProfileReducer = createReducer(initialState, {
    updateProfileRequest: (state) => {
        state.loading = true
    },
    updateProfileSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    updateProfileFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearMessage: (state) => {
        state.message = null;
    },
    clearError: (state) => {
        state.error = null;
    }
})
export const getUserProfileReducer = createReducer(initialState, {
    getUserProfileRequest: (state) => {
        state.loading = true
    },
    getUserProfileSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
    },
    getUserProfileFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearError: (state) => {
        state.error = null;
    }
})
export const searchUsersReducer = createReducer(initialState, {
    searchUsersRequest: (state) => {
        state.loading = true
    },
    searchUsersSuccess: (state, action) => {
        state.loading = false;
        state.users = action.payload;
    },
    searchUsersFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearUsers:(state)=>{
        state.users=null
    },
    clearError: (state) => {
        state.error = null;
    }
})
export const fetchReducer=createReducer(initialState, {
    FETCH_AGAIN:(state)=>{
        state.fetch=!state.fetch
    },
})
export const passwordReducer=createReducer(initialState, {
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
    updatePasswordRequest: (state) => {
        state.loading = true;
    },
    updatePasswordSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    updatePasswordFailure: (state, action) => {
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
    clearError: (state) => {
        state.error = null;
    },
    clearMessage: (state) => {
        state.message = null;
    }
})