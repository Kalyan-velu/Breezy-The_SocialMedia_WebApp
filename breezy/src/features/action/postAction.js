import axios from "axios";
import {axiosInstance} from "../../config/axios";

export const likePost = (id) => async (dispatch) => {
    try {
        dispatch({
            type: 'likeRequest'
        })
        const {data} = await axiosInstance.get(
            `/post/${id}`
        )
        dispatch({
            type: 'likeSuccess',
            payload: data.message
        })


    } catch (e) {
        dispatch({
            type: 'likeFailure',
            payload: e.data.message
        })
    }
}
export const addCommentOnPost = (id,comment) => async (dispatch) => {
    try {
        dispatch({
            type: 'addCommentRequest'
        });
        const {data} = await axiosInstance.put(
            `/post/comment/${id}`,{
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

        console.log(data)
    } catch (e) {
        dispatch({
            type: 'addCommentFailure',
            payload: e.response.data.message
        })
        console.log(e.response.data.message)
    }
}
export const deleteCommentOnPost = (postId,CommentId) => async (dispatch) => {
    try {
        dispatch({
            type: 'deleteCommentRequest'
        });
        const {data} = await axiosInstance.delete(
            `/post/comment/${postId}`,{
                data:CommentId
            }
        )
        dispatch({
            type: 'deleteCommentSuccess',
            payload: data.message
        })
        console.log(data)
    } catch (e) {
        dispatch({
            type: 'deleteCommentFailure',
            payload: e.response.data.message
        })
        console.log(e)
    }
}
export const createNewPost=(caption,image)=> async(dispatch)=>{
    try{
        dispatch({
            type:'newPostRequest'
        })
        const {data}=await axiosInstance.post(
            '/post/upload',
            {
                caption,
                image
            },{
                headers:{
                    "Content-Type":"application/json"
                }
            }
        )
        dispatch({
            type:'newPostSuccess',
            payload:data.message
        })
    }catch(e){
        await dispatch({
            type:'newPostFailure',
            payload:e
        })
        dispatch({
                    type:'clearError'
        })
    }
}
export const updateCaption=(caption,id)=> async(dispatch)=>{
    try{
        dispatch({
            type:'updateCaptionSuccess'
        })
        const {data}=await axiosInstance.put(
            `/post/${id}`,
            {
                caption,
            },{
                headers:{
                    "Content-Type":"application/json"
                }
            }
        )
        dispatch({
            type:'updateCaptionFailure',
            payload:data.message
        })
    }catch(e){
        await dispatch({
            type:'updateDateCaptionFailure',
            payload:e.response.data.message
        })
        dispatch({
            type:'clearError'
        })
    }
}
export const deletePost=(id)=> async(dispatch)=>{
    try{
        dispatch({
            type:'deletePostRequest'
        })
        const {data}=await axiosInstance.delete(
            `/post/${id}`
        )
        await dispatch({
            type:'deletePostSuccess',
            payload:data.message
        })
    }catch (e) {
        await dispatch({
            type:'deletePostFailure',
            payload:e.response.data.message
        })
        dispatch({
            type:'clearError'
        })

    }
}