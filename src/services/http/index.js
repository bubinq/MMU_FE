import axios from "axios";
import { BASE_API } from "../../constants";

export const axiosEnv = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

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