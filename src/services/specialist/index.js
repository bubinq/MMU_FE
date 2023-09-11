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
  getComentsAndReview: (id) => callGet(urls.specialist.getComments(id)),
  addComment: (data) => callPost(urls.specialist.createComments, data),
  getPage: (id, pageNum) => callGet(urls.specialist.getPage(id, pageNum)),
};

export default specialistService;
