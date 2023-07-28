import {callDelete, callGet, callPost, callPut} from "../http/index.js";
import urls from "../http/url.js";

const countryService = {
    getAllCountries : () => callGet(urls.country.listAll),
    createCounty : (name) => callPost(urls.country.create, name),
    getCountry : (uuid) => callGet(urls.country.getCountry(uuid)),
    updateCountry : (uuid, name) => callPut(urls.country.updateCountry(uuid), name),
    deleteCountry : (uuid) => callDelete(urls.country.deleteCountry(uuid))
}

export default countryService;