import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  fetch: false,
  loading: false
}

const clearError = createAction('clearError')
const clearMessage = createAction('clearMessage')

const postOfFollowingRequest = createAction('postOfFollowingRequest')
const postOfFollowingSuccess = createAction('postOfFollowingSuccess')
const postOfFollowingFailed = createAction('postOfFollowingFailed')

export const postOfFollowingReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(postOfFollowingRequest, (state) => {
      state.loading = true
    })
    .addCase(postOfFollowingSuccess, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    })
    .addCase(postOfFollowingFailed, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(clearError, (state) => {
      state.error = null;
    })
})

const specificUsersRequest = createAction('specificUsersRequest')
const specificUsersSuccess = createAction('specificUsersSuccess')
const specificUsersFailed = createAction('specificUsersFailed')
const Logout = createAction('Logout')

export const specificUsersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(specificUsersRequest, (state) => {
      state.loading = true
    })
    .addCase(specificUsersSuccess, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(specificUsersFailed, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(clearError, (state) => {
      state.error = null;
    })
    .addCase(Logout, (state) => {
      state.user = null;
      state.isAuthenticated = false;
    })
})

const updateProfileRequest = createAction('updateProfileRequest')
const updateProfileSuccess = createAction('updateProfileSuccess')
const updateProfileFailure = createAction('updateProfileFailure')

export const updateProfileReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateProfileRequest, (state) => {
      state.loading = true
    })
    .addCase(updateProfileSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(updateProfileFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(clearMessage, (state) => {
      state.message = null;
    })
    .addCase(clearError, (state) => {
      state.error = null;
    })
})

const getUserProfileRequest = createAction('getUserProfileRequest')
const getUserProfileSuccess = createAction('getUserProfileSuccess')
const getUserProfileFailure = createAction('getUserProfileFailure')
export const getUserProfileReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getUserProfileRequest, (state) => {
      state.loading = true
    })
    .addCase(getUserProfileSuccess, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.posts = action.payload.posts;
    })
    .addCase(getUserProfileFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(clearError, (state) => {
      state.error = null;
    })
})

const searchUsersRequest = createAction('searchUsersRequest')
const searchUsersSuccess = createAction('searchUsersSuccess')
const searchUsersFailure = createAction('searchUsersFailure')
const clearUsers = createAction('clearUsers')
const fetchAgain = createAction('FETCH_AGAIN')

export const searchUsersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(searchUsersRequest, (state) => {
      state.loading = true
    })
    .addCase(searchUsersSuccess, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    })
    .addCase(searchUsersFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(clearUsers, (state) => {
      state.users = null
    })
    .addCase(clearError, (state) => {
      state.error = null;
    })
})
export const fetchReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchAgain, (state) => {
      state.fetch = !state.fetch
    })
})

const forgotPasswordRequest = createAction('forgotPasswordRequest')
const forgotPasswordSuccess = createAction('forgotPasswordSuccess')
const forgotPasswordFailure = createAction('forgotPasswordFailure')

const updatePasswordRequest = createAction('updatePasswordRequest')
const updatePasswordSuccess = createAction('updatePasswordSuccess')
const updatePasswordFailure = createAction('updatePasswordFailure')

const resetPasswordRequest = createAction('resetPasswordRequest')
const resetPasswordSuccess = createAction('resetPasswordSuccess')
const resetPasswordFailure = createAction('resetPasswordFailure')


export const passwordReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(forgotPasswordRequest, (state) => {
      state.loading = true;
    })
    .addCase(forgotPasswordSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(forgotPasswordFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(updatePasswordRequest, (state) => {
      state.loading = true;
    })
    .addCase(updatePasswordSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(updatePasswordFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(resetPasswordRequest, (state) => {
      state.loading = true;
    })
    .addCase(resetPasswordSuccess, (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase(resetPasswordFailure, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(clearError, (state) => {
      state.error = null;
    })
    .addCase(clearMessage, (state) => {
      state.message = null;
    })
})