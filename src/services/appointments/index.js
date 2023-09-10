import { callGet, callPost } from "../http/index.js";
import urls from "../http/url.js";

const appointmentsService = {
  scheduleAppointment: (data) =>
    callPost(urls.appointments.scheduleAppointment, data),
  getUpcoming: (type) => callGet(urls.appointments.getUpcoming(type)),
  getDoctorAppointments: (id) =>
    callGet(urls.appointments.getDoctorAppointments(id)),
};

export default appointmentsService;
