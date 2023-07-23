import {axiosInstance} from "../../config/axios";

export const likePost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'likeRequest'
    })
    const {data} = await axiosInstance.get(
      `/post/${id}`
    )
    await dispatch({
      type: 'likeSuccess',
      payload: data.message
    })
    dispatch({
      type: 'clearMessage',
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
      type: 'likeFailure',
      payload: e.data.message
    })
    dispatch({
      type: 'clearError',
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
export const addCommentOnPost = (id, comment) => async (dispatch) => {
  try {
    dispatch({
      type: 'addCommentRequest'
    });
    const {data} = await axiosInstance.put(
      `/post/comment/${id}`, {
        comment,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    dispatch({
      type: 'addCommentSuccess',
      payload: data.message
    })
    await dispatch({
      type: "STATUS",
      payload: {
        variant: "success",
        message: "Commented"
      }
    })
  } catch (e) {
    dispatch({
      type: 'addCommentFailure',
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
export const deleteCommentOnPost = (postId, commentId) => async (dispatch) => {
  try {
    dispatch({
      type: 'deleteCommentRequest'
    });
    const {data} = await axiosInstance.delete(`/post/comment/${postId}/${commentId}`)
    dispatch({
      type: 'deleteCommentSuccess',
      payload: data.message
    })
    await dispatch({
      type: "STATUS",
      payload: {
        variant: "success",
        message: "Comment deleted"
      }
    })
    dispatch({
      type: "FETCH_AGAIN"
    })
  } catch (e) {
    dispatch({
      type: 'deleteCommentFailure',
      payload: e.response.data.message
    })
    await dispatch({
      type: "STATUS",
      payload: {
        variant: "error",
        message: (e?.response.data.message == null) ? e.message : e.response.data.message
      }
    })
    console.log(e)
  }

}
export const createNewPost = (caption, image) => async (dispatch) => {
  try {
    dispatch({
      type: 'newPostRequest'
    })
    const {data} = await axiosInstance.post(
      '/post/upload',
      {
        caption,
        image
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    await dispatch({
      type: 'newPostSuccess',
      payload: data.message
    })
    await dispatch({type: 'FETCH_AGAIN'})
    dispatch({
      type: "STATUS",
      payload: {
        variant: "success",
        message: "Posted"
      }
    })
  } catch (e) {
    await dispatch({
      type: 'newPostFailure',
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
export const updateCaption = (caption, id) => async (dispatch) => {
  try {
    dispatch({
      type: 'updateCaptionSuccess'
    })
    const {data} = await axiosInstance.put(
      `/post/${id}`,
      {
        caption,
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    dispatch({
      type: 'updateCaptionFailure',
      payload: data.message
    })
    await dispatch({
      type: "STATUS",
      payload: {
        variant: "success",
        message: "Caption updated"
      }
    })
  } catch (e) {
    await dispatch({
      type: 'updateDateCaptionFailure',
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
export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'deletePostRequest'
    })
    const {data} = await axiosInstance.delete(
      `/post/${id}`
    )
    await dispatch({
      type: 'deletePostSuccess',
      payload: data.message
    })
    await dispatch({
      type: "STATUS",
      payload: {
        variant: "warning",
        message: "Post deleted successfully"
      }
    })
  } catch (e) {
    console.log(e.response.data.message)
    await dispatch({
      type: 'deletePostFailure',
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

export const getUserPosts = (id) => async (dispatch) => {
  try {
    dispatch({
      type: 'userPostsRequest'
    })
    const {data} = await axiosInstance.get(
      `/user/post/${id}`
    )
    dispatch({
      type: 'userPostsSuccess',
      payload: data.sortedPosts
    })
    console.log(data)
  } catch (e) {
    await dispatch({
      type: 'userPostsFailure',
      payload: e.response.data.message
    })
    console.log(e.response.data.message)
    dispatch({
      type: 'clearError'
    })
  }
}