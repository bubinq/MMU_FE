import {callGet, callPost} from "../http/index.js";
import urls from "../http/url.js";

const specialtyService = {
    getAllSpecialties : () => callGet(urls.specialty.listAll),
    create : (data) => callPost(urls.specialty.create, data)
}

export default specialtyService;
