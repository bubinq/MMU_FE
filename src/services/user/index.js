import {callPost} from "../http/index.js";
import urls from "../http/url.js";


const userService = {
    register : (userData) => callPost(urls.users.create, userData),
}

export default userService;