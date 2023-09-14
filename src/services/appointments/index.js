import { callGet, callPatch, callPost } from "../http/index.js";
import urls from "../http/url.js";

const appointmentsService = {
  scheduleAppointment: (data) =>
    callPost(urls.appointments.scheduleAppointment, data),
  getAppointments: (type) => callGet(urls.appointments.getAppointments(type)),
  getDoctorAppointments: (id) =>
    callGet(urls.appointments.getDoctorAppointments(id)),
  cancelAppointment: (id) => callPatch(urls.appointments.cancel(id)),
  getPage: (type, pageNum) => callGet(urls.appointments.getPage(type, pageNum)),
  searchAppointments: (terms, pageNum, type) =>
    callGet(urls.appointments.searchBy(terms, pageNum, type)),
};

export default appointmentsService;
