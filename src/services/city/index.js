import urls from "../http/url.js";
import {callGet, callPost} from "../http/index.js";

const cityService = {
    getAllCities : callGet(urls.city.listAll),
    getCity : (uuid) => callGet(urls.city.getCity(uuid)),
    create : (countryUuid, name) => callPost(urls.city.create(countryUuid), name)
}

export default cityService;