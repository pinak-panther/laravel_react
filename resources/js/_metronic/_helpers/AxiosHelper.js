import axios from "axios";

export const API = axios.create({
    withCredentials:true,
    baseURL : `https://rl.test/api`,
});

export const WEB = axios.create({
    withCredentials:true,
    baseURL : `https://rl.test/`,
});

