import axios from 'axios';
console.log('api', process.env.NEXT_PUBLIC_API_URL)
export const axiosInstance = axios.create({
    baseURL:process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true
});