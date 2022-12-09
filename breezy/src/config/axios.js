import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: '/api/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});
export const chatInstance=axios.create({
    baseURL: '/api/v1/chat',
    headers: {
        'Content-Type': 'application/json',
    },
})
export const messageInstance = axios.create( {
    baseURL: "/api/v1/message",
    headers: {
        "Content-Type": 'application/json'
    }
})