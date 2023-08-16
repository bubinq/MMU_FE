import axios from "axios";
import {GOOGLE_OAUTH2_URL} from "../../constants.js";

export const axiosEnv = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

// axiosEnv.interceptors.request.use(config => {
//     const googleUser = GOOGLE_OAUTH2_URL.auth2.getAuthInstance().currentUser.get();
//     const id_token = googleUser.getAuthResponse().id_token;
//
//     if (id_token) {
//         config.headers.Authorization = `Bearer ${id_token}`;
//     }
//
//     return config;
// }, error => {
//     return Promise.reject(error);
// });

const call =
  (verb) =>
  async (url, options = {}) => {
    const { data } = await verb(url, options);
    return data;
  };


export const callGet = call(axiosEnv.get);
export const callPost = call(axiosEnv.post);
export const callPut = call(axiosEnv.put);
export const callPatch = call(axiosEnv.patch);
export const callDelete = call(axiosEnv.delete);

const http = {
    callGet,
    callPost,
    callPut,
    callPatch,
    callDelete
}

export default http;