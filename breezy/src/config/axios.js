import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://social-media-server.adaptable.app/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});
export const chatInstance=axios.create({
    baseURL: 'https://social-media-server.adaptable.app/api/v1/chat',
    headers: {
        'Content-Type': 'application/json',
    },
})
export const messageInstance = axios.create( {
    baseURL: "https://social-media-server.adaptable.app/api/v1/message",
    headers: {
        "Content-Type": 'application/json'
    }
})