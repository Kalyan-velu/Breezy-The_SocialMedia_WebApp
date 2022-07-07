import { chatInstance} from "../../config/axios";

export const accessChat =(userId)=> async (dispatch) => {
    try {
        dispatch({
            type: 'accessChatRequest'
        })
        const response = await chatInstance.post( `/`, {userId})
        dispatch({
            type: 'accessChatSuccess',
            payload: response.data
        })
        console.log(`AccessChat:${response.data}`)
    } catch (e) {
        dispatch({
            type: 'accessChatFailure',
            payload: e
        })
    }
}
export const fetchChat =()=> async (dispatch) => {
    try {
        dispatch({
            type: 'fetchChatRequest'
        })
        const response = await chatInstance.get( `/`)
        dispatch({
            type: 'fetchChatSuccess',
            payload: response.data
        })
        console.log(`Chats:${response.data}`)
    } catch (e) {
        dispatch({
            type: 'fetchChatFailure',
            payload: e.data.message
        })
    }
}
export const setSelectedChat =(chat)=> async (dispatch) => {
    try {
        dispatch({
            type: 'setSelectedChatRequest'
        })
        dispatch({
            type: 'setSelectedChatSuccess',
            payload: chat
        })
    } catch (e) {
        dispatch({
            type: 'setSelectedChatFailure',
            payload: e.data.message
        })
    }
}
export const setChats =([])=> async (dispatch) => {
    try {
        dispatch({
            type: 'setSelectedChatRequest'
        })
        dispatch({
            type: 'setSelectedChatSuccess',
            payload: []
        })
    } catch (e) {
        dispatch({
            type: 'setSelectedChatFailure',
            payload: e.data.message
        })
    }
}