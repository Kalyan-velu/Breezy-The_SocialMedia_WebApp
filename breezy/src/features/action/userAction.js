import {axiosInstance} from "../../config/axios";
import axios from "axios";

export const loginUser = (values) =>

    async (dispatch) => {
        try {

            dispatch({
                type: 'LoginRequest',                                           // request auth
            })
            //fetching data from server
            const {data} = await axiosInstance.post(                                    // post request to server
                "/login",
                values, {
                    headers:
                        {
                            'Content-Type': 'application/json',
                        }
                }
            );
            dispatch({                                                         //dispatching the token to the reducer
                type: 'LoginSuccess',
                payload: data.user,
            })

        } catch (error) {
            await dispatch({              //dispatching the error to the reducer
                type: 'LoginFailed',
                payload: error.response.data.message,
            })
            dispatch({
                type:'clearError',
            })
        }
    }

export const loadUser = () =>
    async (dispatch) => {
        try {
            dispatch({
                type: 'LoadUserRequest'
            })
            //fetching data from server
            const {data} = await axiosInstance.get(                                    // post request to server
                "/me"
            );
            dispatch({                                                         //dispatching the token to the reducer
                type: 'LoadUserSuccess',
                payload: data.user,
            })

        } catch (e) {
            dispatch({
                type: 'LoadUserFailure',
                payload: e.response.data.message,
            })
            dispatch({
                type:'clearError',
            })
        }
    }

export const registerUser = ({name,email,password,avatar}) =>
    async (dispatch) => {

        try {
            dispatch({
                type: 'RegisterRequest'
            })
            const {data} = await axiosInstance.post(                                    // post request to server
                "/register",
                {name,email,password,avatar}, {
                    headers:
                        {
                            'Content-Type': 'application/json',
                        }
                }
            );
            dispatch({                                                         //dispatching the token to the reducer
                type: 'RegisterSuccess',
                payload: data.user
            })
            console.log(data.user)
        } catch (e) {
            console.log(e)
           await dispatch({              //dispatching the error to the reducer
                type: 'RegisterFailure',
                payload: e.response.data.message,
            })
            dispatch({
                type:'clearError',
            })
        }

    }

export const getFollowingPosts = () => async (dispatch) => {
    try {
        dispatch({
            type: 'postOfFollowingRequest'
        })
        //fetching data from server
        const {data} = await axiosInstance.get(                                    // post request to server
            "/posts"
        );
        dispatch({                                                         //dispatching the token to the reducer
            type: 'postOfFollowingSuccess',
            payload: data.sortedPosts,
        })

    } catch (e) {
        dispatch({
            type: 'postOfFollowingFailed',
            payload: e.response.data.message,
        })
    }
}
export  const getMyPosts = () => async (dispatch) => {
    try {
        dispatch({
            type: 'myPostsRequest'
        })
        //fetching data from server
        const {data} = await axiosInstance.get(                                    // post request to server
            "/me/posts"
        );
        dispatch({                                                         //dispatching the token to the reducer
            type: 'myPostsSuccess',
            payload: data.sortedPosts,
        })

    } catch (e) {
       await dispatch({
            type: 'myPostsFailed',
            payload: e.response.data.message,
        })
        dispatch({
            type:'clearError',
        })
    }

}
export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch({
            type: 'allUsersRequest'
        })
        //fetching data from server
        const {data} = await axiosInstance.get(                                    // post request to server
            "/users"
        );
        console.log(data)
        dispatch({                                                         //dispatching the token to the reducer
            type: 'allUsersSuccess',
            payload: data.users,
        })

    } catch (e) {
        dispatch({
            type: 'allUsersFailure',
            payload: e.response.data.message,
        })
    }
}
export const logoutUser = () =>

    async (dispatch) => {
        try {

            dispatch({
                type: 'LogoutUserRequest',                                           // request auth
            })

            await axiosInstance.get(                                    //  request to server
                "/logout",
            );
            dispatch({                                                         //dispatching the token to the reducer
                type: 'LogoutUserSuccess',
            })

        } catch (error) {
            console.log(error)
            await dispatch({              //dispatching the error to the reducer
                type: 'LogoutUserFailed',
                payload: error.response.data.message,
            })
            dispatch({
                type:'clearError',
            })
        }
    }

export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({
            type: 'forgotPasswordRequest'
        })
        console.log(email)
        //fetching data from server
        const {data} = await axiosInstance.post(                                    // post request to server
            '/user/forgot-password', {
                email
            },{
                headers: {
                    "Content-Type" : "application/json",
                },
            }
        );
        console.log(data)
        dispatch({                                                         //dispatching the token to the reducer
            type: 'forgotPasswordSuccess',
            payload: data.message,
        })

    } catch (e) {
        await dispatch({
            type: 'forgotPasswordFailure',
            payload: e.response.data.message
        })
        dispatch({
                type:'clearError',
            })
    }
}
export const resetPassword = (token,password) => async (dispatch) => {
    try {
        dispatch({
            type: 'resetPasswordRequest'
        })
        console.log(token)
        //fetching data from server
        const {data} = await axios.put(                                    // post request to server
            `/api/v1/reset-password/${token}`, {
                password
            },{
                headers: {
                    "Content-Type" : "application/json",
                },
            }
        );
        console.log(data)
        dispatch({                                                         //dispatching the token to the reducer
            type: 'resetPasswordSuccess',
            payload: data.users,
        })

    } catch (e) {
        dispatch({
            type: 'resetPasswordFailure',
            payload: e.response.data.message,
        })
    }
}
export const updateProfile = ({name,email,avatar}) => async (dispatch) => {
    try{
        dispatch({
            type: 'updateProfileRequest'
        })
        //fetching data from server
        const {data} = await axiosInstance.put(                                    // post request to server
            "/update/profile",
            {
                name,email,avatar
            }, {
                headers:
                    {
                        'Content-Type': 'application/json',
                    }
            }
        );
        dispatch({                                                         //dispatching the token to the reducer
            type: 'updateProfileSuccess',
            payload: data.user,
        })
        console.log(data)
    }catch(e){
        console.log(e)
        await dispatch({
            type: 'updateProfileFailure',
            payload: e.response.data.message,
        })
        dispatch({
            type:'clearError',
        });
    }
};
export const updatePassword = (oldPassword,newPassword) => async (dispatch) => {
    try{
        dispatch({
            type: 'updatePasswordRequest'
        })
        //fetching data from server
        const {data} = await axiosInstance.put(                                    // post request to server
            "/update/password",
            {
                oldPassword,newPassword
            }, {
                headers:
                    {
                        'Content-Type': 'application/json',
                    }
            }
        );
        dispatch({                                                         //dispatching the token to the reducer
            type: 'updatePasswordSuccess',
            payload: data.user,
        })
        console.log(data)
    }catch(e){
        console.log(e)
        await dispatch({
            type: 'updatePasswordFailure',
            payload: e.response.data.message,
        })
        dispatch({
            type:'clearError',
        })
    }
}

export const getUserProfile=(id)=>async(dispatch)=>{
    try{
        dispatch({
            type:'getUserProfileRequest'
        })
        const {data}=await axiosInstance.get(
            `/user/${id}`
        )
        dispatch({
            type:'getUserProfileSuccess',
            payload:data.user
        })
        console.log(`Data:${data}`)
    }   catch(e){
        console.log(e)
        await dispatch({
            type:'getUserProfileFailure',
            payload:e.response.data.message
        })
        dispatch({
            type:'clearError'
        })
    }
}

export const followUser=(id)=>async(dispatch)=>{
    try{
        dispatch({
            type:'followRequest'
        })
        const {data}=await axiosInstance.get(
            `/follow/${id}`
        )
        dispatch({
            type:'followSuccess',
            payload:data.message
        })
    }catch (e) {
        await dispatch({
            type:'followFailure',
            payload:e.response.data.message
        })
        dispatch({
            type:'clearError'
        })
    }
}