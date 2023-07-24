import axios from "axios";
import {axiosInstance} from "../../config/axios";

// ---------------------------------------------User Login---------------------------
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
      await dispatch({
        type: "STATUS",
        payload: {
          variant: "success",
          message: "WELCOME TO BREEZY🫡"
        }
      })
    } catch (error) {
      console.error(error)
      await dispatch({
        type: "STATUS",
        payload: {
          variant: "error",
          message: (error?.response.data.message == null) ? error.message : error.response.data.message
        }
      })
    }
  }
// ---------------------------------------------User Loading---------------------------
export const loadUser = (navigate) =>
  async (dispatch) => {
    try {
      //fetching data from server
      const {data} = await axiosInstance.get(                                    // post request to server
        "/me"
      );
      console.info(data)
      await dispatch({                                                         //dispatching the token to the reducer
        type: 'LoadUserSuccess',
        payload: data.user,
      })
      navigate(-1)
      console.log(data.user)
    } catch (e) {
      console.log(e)
      await dispatch({
        type: 'LoadUserFailure',
        payload: e.message,
      })
      await dispatch({
        type: "STATUS",
        payload: {
          variant: "error",
          message: (e?.response.data.message == null) ? e.message : e.response.data.message
        }
      })
    }
  }
// ---------------------------------------------User Register---------------------------
export const registerUser = ({name, email, password, avatar}) =>
  async (dispatch) => {
    try {
      dispatch({
        type: 'RegisterRequest'
      })
      const {data} = await axiosInstance.post(                                    // post request to server
        "/register",
        {name, email, password, avatar}, {
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
      await dispatch({
        type: "STATUS",
        payload: {
          variant: "success",
          message: "User registered successfully 👍✅"
        }
      })
    } catch (e) {
      console.log(e)
      await dispatch({              //dispatching the error to the reducer
        type: 'RegisterFailure',
        payload: "Something went wrong!",
      })
      await dispatch({
        type: "STATUS",
        payload: {
          variant: "error",
          message: (e?.response.data.message == null) ? e.message : e.response.data.message
        }
      })
    }

  }
// ---------------------------------------------Get Posts of Followings---------------------------
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
    console.log(e)
    dispatch({
      type: 'postOfFollowingFailed',
      payload: e.message,
    })
    await dispatch({
      type: "STATUS",
      payload: {
        variant: "error",
        message: (e?.response.data.message == null) ? e.message : e.response.data.message
      }
    })
  }
}
// ---------------------------------------------User Logout API---------------------------
export const logoutUser = (navigate) => async (dispatch) => {
  try {
    dispatch({
      type: 'LogoutUserRequest',                                           // request auth
    })

    await axiosInstance.get(                                    //  request to server
      "/logout",
    );
    await dispatch({                                                         //dispatching the token to the reducer
      type: 'LogoutUserSuccess',
    })
    dispatch({
      type: "AUTHENTICATED",
      payload: false
    })
    navigate("/")
  } catch (error) {
    console.log(error)
    await dispatch({              //dispatching the error to the reducer
      type: 'LogoutUserFailed',
      payload: error.response.data.message,
    })
  }
}

// ---------------------------------------------Forgot Password API---------------------------
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
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    await dispatch({                                                         //dispatching the token to the reducer
      type: 'forgotPasswordSuccess',
      payload: data.message,
    })
    dispatch({
      type: "STATUS",
      payload: {
        variant: "success",
        message: `Email sent to ${email}`
      }
    })

  } catch (e) {
    await dispatch({
      type: 'forgotPasswordFailure',
      payload: e.response.data.message
    })
    await dispatch({
      type: "STATUS",
      payload: {
        variant: "error",
        message: (e?.response.data.message == null) ? e.message : e.response.data.message
      }
    })
  }
}
// ---------------------------------------------Reset Password API---------------------------
export const resetPassword = (token, password) => async (dispatch) => {
  try {
    dispatch({
      type: 'resetPasswordRequest'
    })
    console.log(token)
    //fetching data from server
    const {data} = await axios.put(                                    // post request to server
      `/api/v1/reset-password/${token}`, {
        password
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
// ---------------------------------------------Update Profile API---------------------------
export const updateProfile = ({name, email, avatar}) => async (dispatch) => {
  try {
    dispatch({
      type: 'updateProfileRequest'
    })
    //fetching data from server
    const {data} = await axiosInstance.put(                                    // post request to server
      "/update/profile",
      {
        name, email, avatar
      }, {
        headers:
          {
            'Content-Type': 'application/json',
          }
      }
    );
    await dispatch({                                                         //dispatching the token to the reducer
      type: 'updateProfileSuccess',
      payload: data.message,
    })
    await dispatch({
      type: "STATUS",
      payload: {
        variant: "success",
        message: (data?.message !== null && data.message)
      }
    })
  } catch (e) {
    await dispatch({
      type: 'updateProfileFailure',
      payload: e.response.data.message,
    })
    await dispatch({
      type: "STATUS",
      payload: {
        variant: "error",
        message: (e?.response.data.message == null) ? e.message : e.response.data.message
      }
    })
  }
};

// ---------------------------------------------Update Password API---------------------------
export const updatePassword = (oldPassword, newPassword) => async (dispatch) => {
  try {
    dispatch({
      type: 'updatePasswordRequest'
    })
    //fetching data from server
    const {data} = await axiosInstance.put(                                    // post request to server
      "/update/password",
      {
        oldPassword, newPassword
      }, {
        headers:
          {
            'Content-Type': 'application/json',
          }
      }
    );
    dispatch({                                                         //dispatching the token to the reducer
      type: 'updatePasswordSuccess',
      payload: data.message,
    })
    await dispatch({
      type: "STATUS",
      payload: {
        variant: "success",
        message: "Password Updated"
      }
    })
  } catch (e) {
    console.log(e)
    await dispatch({
      type: 'updatePasswordFailure',
      payload: e.response.data.message,
    })
    dispatch({
      type: 'clearError',
    })
  }
}

// ---------------------------------------------Get a user's profile API---------------------------
export const getUserProfile = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'getUserProfileRequest'
    })
    const {data} = await axiosInstance.get(
      `/user/${id}`
    )
    await dispatch({
      type: 'getUserProfileSuccess',
      payload: {
        user: data.user,
        posts: data.sortedPosts
      }
    })
  } catch (e) {
    console.error(e)
    await dispatch({
      type: 'getUserProfileFailure',
      payload: e.response.data.message
    })
    await dispatch({
      type: "STATUS",
      payload: {
        variant: "error",
        message: (e?.response.data.message == null) ? e.message : e.response.data.message
      }
    })
  }
}

export const followUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'followRequest'
    })
    const {data} = await axiosInstance.get(
      `/follow/${id}`
    )
    await dispatch({
      type: 'followSuccess',
      payload: data.message
    })
    await dispatch({
      type: "STATUS",
      payload: {
        variant: "success",
        message: data.message
      }
    })
  } catch (e) {
    await dispatch({
      type: 'followFailure',
      payload: e.response.data.message
    })
    await dispatch({
      type: "STATUS",
      payload: {
        variant: "error",
        message: (e?.response.data.message == null) ? e.message : e.response.data.message
      }
    })
  }
}

export const searchUsers = (search) => async (dispatch) => {
  try {
    dispatch({
      type: 'searchUsersRequest'
    })
    //fetching data from server
    const {data} = await axiosInstance.get(                                    // post request to server
      `?search=${search}`,
    );
    console.log(data)
    await dispatch({                                                         //dispatching the token to the reducer
      type: 'searchUsersSuccess',
      payload: data.users,
    })
  } catch (e) {
    await dispatch({
      type: 'searchUsersFailure',
      payload: e.response.data.message,
    })
    dispatch({
      type: 'clearError',
    })

  }
}
export const DeleteMyAccount = (userId) => async (dispatch) => {
  try {
    dispatch({
      type: 'DeleteAccountRequest',                                           // request auth
    })

    await axiosInstance.get(                                    //  request to server
      `/me/delete/${userId}`,
    );
    dispatch({                                                     //dispatching the token to the reducer
      type: 'DeleteAccountSuccess',
      payload: 'Account Deleted Successfully',
    })
  } catch (error) {
    console.log(error)
    await dispatch({                                            //dispatching the error to the reducer
      type: 'DeleteUserFailed',
      payload: error.message,
    })
    dispatch({
      type: 'clearError',
    })
  }
}
export const fetchAgain = () => (dispatch) => {
  dispatch({
    type: 'FETCH_AGAIN'
  })
}