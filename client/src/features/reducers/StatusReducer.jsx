import {createAction, createReducer} from "@reduxjs/toolkit";


const initialState = {
    user: null,
    variant: null,
    message: null,
    loading: false,
    isAuthenticated: false
}
const STATUS = createAction("STATUS")
const authenticated = createAction("AUTHENTICATED")
const clearStatus = createAction("clearStatus")

const LoginRequest = createAction('LoginRequest')
const LoginSuccess = createAction('LoginSuccess')
const LoginFailed = createAction('LoginFailed')

const RegisterRequest = createAction('RegisterRequest')
const RegisterSuccess = createAction('RegisterSuccess')
const RegisterFailure = createAction('RegisterFailure')

const LoadUserRequest = createAction('LoadUserRequest')
const LoadUserSuccess = createAction('LoadUserSuccess')
const LoadUserFailure = createAction('LoadUserFailure')

const LogoutUserRequest = createAction('LogoutUserRequest')
const LogoutUserSuccess = createAction('LogoutUserSuccess')
const LogoutUserFailure = createAction('LogoutUserFailure')

const DeleteAccountRequest = createAction('DeleteAccountRequest')
const DeleteAccountSuccess = createAction('DeleteAccountSuccess')
const DeleteAccountFailure = createAction('DeleteAccountFailure')

export const appStatus = createReducer(initialState, (builder) => {
    builder
        .addCase(STATUS, (state, action) => {
            state.variant = action.payload.variant;
            state.message = action.payload.message;
            state.loading = false
        })
        .addCase(clearStatus, (state) => {
            state.variant = null;
            state.message = null;
            state.loading = false;
        })
        .addCase(authenticated, (state, action) => {
            state.isAuthenticated = action.payload
        })
        .addCase(LoginRequest, (state) => {
            state.loading = true
        })
        .addCase(LoginSuccess, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.message = "LoggedIn Successfully ✅";
            state.variant = "success";
            state.isAuthenticated = true
        })
        .addCase(LoginFailed, (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.variant = "error";
            state.isAuthenticated = false
        })

        .addCase(RegisterRequest, (state) => {
            state.loading = true
        })
        .addCase(RegisterSuccess, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.message = "Registered Successfully ✅";
            state.variant = "success";
            state.isAuthenticated = true
        })
        .addCase(RegisterFailure, (state, action) => {
            state.loading = false;
            state.message = action.payload;
            state.variant = "error";
            state.isAuthenticated = false
        })

        .addCase(LoadUserRequest, (state) => {
            state.loading = true
        })
        .addCase(LoadUserSuccess, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true
        })
        .addCase(LoadUserFailure, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false
        })
        .addCase(LogoutUserRequest, (state) => {
            state.loading = true
        })
        .addCase(LogoutUserSuccess, (state) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
            state.variant = "success";
            state.message = "Logged Out"
        })
        .addCase(LogoutUserFailure, (state, action) => {
            state.loading = false;
            state.variant = "error";
            state.message = action.payload
        })
        .addCase(DeleteAccountRequest, (state) => {
            state.loading = true
        })
        .addCase(DeleteAccountSuccess, (state, action) => {
            state.loading = false;
            state.user = null;
            state.message = action.payload;
            state.postOfFollowing = null;
            state.isAuthenticated = false
        })
        .addCase(DeleteAccountFailure, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = true
        })

})