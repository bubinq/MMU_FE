import { callGet, callPatch, callPost } from "../http/index.js";
import urls from "../http/url.js";

const authService = {
  register: (userData) => callPost(urls.auth.create, userData),
  login: (data) => callPost(urls.auth.login, data),
  verifyEmail: (token) => callGet(urls.auth.verify(token)),
  resendReset: (token) => callPost(urls.auth.resend(token)),
  changePassword: (token, data) =>
    callPatch(urls.auth.changePassword(token), data),
  forgottenPassword: (data) => callPost(urls.auth.forgottenPassword, data),
};

export default authService;
