import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://the-lazy-media-api.vercel.app/',
})
