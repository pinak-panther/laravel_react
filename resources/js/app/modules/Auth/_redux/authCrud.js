import axios from "axios";
import {API} from "../../../../_metronic/_helpers/AxiosHelper";

export const LOGIN_URL = `${process.env.REACT_APP_API_URL}/auth/login`;
export const REGISTER_URL = "api/auth/register";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";
export const ME_URL = `${process.env.REACT_APP_API_URL}/auth/me`;

export const CUSTOM_LOGIN_URL = `/login`;
export const CUSTOM_ME_URL = "/user";


export function login(email, password) {
  return axios.post(LOGIN_URL, { email, password });
}

export function register(email, fullname, username, password) {
  return axios.post(REGISTER_URL, { email, fullname, username, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
}

export function customLogin(email, password) {
    return API.post(CUSTOM_LOGIN_URL, { email, password });
}

export function customGetUserByToken(token) {
    // Authorization head should be fulfilled in interceptor.
    let header = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    return API.get(CUSTOM_ME_URL,header);
}
