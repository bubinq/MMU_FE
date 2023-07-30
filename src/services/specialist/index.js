import { callDelete, callGet, callPost, callPut } from "../http/index.js";
import urls from "../http/url.js";

const specialistService = {
  getAll: ({ pageNo, pageSize, sortBy, sortDir }) =>
    callGet(urls.specialist.listAll({ pageNo, pageSize, sortBy, sortDir })),
  create: (cityUuid, info) => callPost(urls.specialist.create(cityUuid), info),
  getDoctorDetails: (uuid) => callGet(urls.specialist.getSingleDoctor(uuid)),
  update: (uuid, info) => callPut(urls.specialist.updateDoctor(uuid), info),
  deleteSpecialist: (uuid) => callDelete(urls.specialist.deleteDoctor(uuid)),
  searchDocs: (terms) => callGet(urls.specialist.searchBy(terms)),
};

export default specialistService;
