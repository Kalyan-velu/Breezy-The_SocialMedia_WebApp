import axios from 'axios';

export const loginUser = (values) =>

    async (dispatch) => {
        try {

            dispatch({
                type: 'LoginRequest',                                           // request auth
            })
            //fetching data from server
            const {data} = await axios.post(                                    // post request to server
                "/api/v1/login",
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
            console.log(error);
            dispatch({              //dispatching the error to the reducer
                type: 'LoginFailed',
                payload: error.data,
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
            const {data} = await axios.get(                                    // post request to server
                "/api/v1/me"
            );
            dispatch({                                                         //dispatching the token to the reducer
                type: 'LoadUserSuccess',
                payload: data.user,
            })

        } catch (e) {
            dispatch({
                type: 'LoadUserFailure',
                payload: e.data,
            })
        }
    }

export const registerUser = (values) =>
    async (dispatch) => {
        try {
            dispatch({
                type: 'RegisterRequest'
            })
            console.log(values)
            const {data} = await axios.post(                                    // post request to server
                "/api/v1/register",
                values, {
                    headers:
                        {
                            'Content-Type': 'application/json',
                        }
                }
            );
            console.log(data)
            dispatch({                                                         //dispatching the token to the reducer
                type: 'RegisterSuccess',
                payload: data.user
            })

        } catch (e) {
            console.log(e);
            dispatch({              //dispatching the error to the reducer
                type: 'RegisterFailure',
                payload: e.data,
            })
        }

    }

export const getFollowingPosts = () => async (dispatch) => {
    try {
        dispatch({
            type: 'postOfFollowingRequest'
        })
        //fetching data from server
        const {data} = await axios.get(                                    // post request to server
            "/api/v1/posts"
        );
        console.log(data)
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

export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch({
            type: 'allUsersRequest'
        })
        //fetching data from server
        const {data} = await axios.get(                                    // post request to server
            "/api/v1/users"
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
export const logOutUser = () => async (dispatch) => {
    dispatch({
        type: 'Logout'
    })
}