import { callGet, callPatch, callPost } from "../http/index.js";
import urls from "../http/url.js";

const appointmentsService = {
  scheduleAppointment: (data) =>
    callPost(urls.appointments.scheduleAppointment, data),
  getUpcoming: (type) => callGet(urls.appointments.getUpcoming(type)),
  getDoctorAppointments: (id) =>
    callGet(urls.appointments.getDoctorAppointments(id)),
  cancelAppointment: (id) => callPatch(urls.appointments.cancel(id)),
};

export default appointmentsService;
