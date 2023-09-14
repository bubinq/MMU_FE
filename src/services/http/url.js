const specialty = {
  listAll: "/specialties?sortBy=name&sortDir=asc",
};

const specialist = {
  listAll: ({ pageNo, pageSize, sortBy, sortDir }) =>
    `/doctors?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`,
  create: (cityUuid) => `/cities/${cityUuid}/doctors`,
  getSingleDoctor: (uuid) => `/doctors/${uuid}`,
  updateDoctor: (uuid) => `/doctors/${uuid}`,
  deleteDoctor: (uuid) => `/doctors/${uuid}`,
  searchBy: ({
    name = "",
    specialty = "",
    city = "",
    state = "",
    pageSize = 100,
    sortBy = "averageRating",
    sortDir = "desc",
  }) =>
    `/doctors?name=${name}&specialtyId=${specialty}&cityId=${city}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}&stateId=${state}`,
  getComments: (id) => `/doctors/${id}/reviews`,
  createComments: `/doctors/reviews`,
  getPage: (id, pageNum) =>
    `/doctors/${id}/reviews?pageNo=${pageNum}&pageSize=3&sortBy=postedAt&sortDir=desc`,
};

const city = {
  listAll: () => "/cities",
  getCity: (uuid) => `/cities/${uuid}`,
  create: (countryUuid) => `/countries/${countryUuid}/cities`,
};

const state = {
  listAll: "/states?pageNo=0&pageSize=50&sortBy=id&sortDir=asc",
  getCitiesByState: (stateId) => `/states/${stateId}/cities`,
};

const auth = {
  create: "/auth/register",
  login: "/auth/login",
  verify: (token) => `/auth/verify-email?token=${token}`,
  validateToken: (token) => `/auth/validate-token?token=${token}`,
  resendVerification: `/auth/send-email-verification`,
  resend: (token) => `/auth/resend-forgot?token=${token}`,
  changePassword: (token) => `auth/change-password?token=${token}`,
  forgottenPassword: "/auth/forgot",
};

const appointments = {
  getAppointments: (type) => `/appointments/search?type=${type}`,
  scheduleAppointment: `/appointments`,
  cancel: (id) => `/appointments/${id}`,
  getDoctorAppointments: (id) => `/doctors/${id}/appointments`,
  getPage: (type, pageNum) =>
    `/appointments/search?type=${type}&pageNo=${pageNum}`,
  searchBy: (
    {
      name = "",
      specialty = "",
      city = "",
      fromYear = "",
      fromMonth = "",
      fromDay = "",
      toYear = "",
      toMonth = "",
      toDay = "",
    },
    pageNum = 0,
    type
  ) =>
    `/appointments/search?type=${type}&name=${name}&cityId=${city}&specialtyId=${specialty}&pageNo=${pageNum}&fromYear=${fromYear}&fromMonth=${fromMonth}&fromDay=${fromDay}&toYear=${toYear}&toMonth=${toMonth}&toDay=${toDay}`,
};

const urls = {
  appointments,
  specialty,
  specialist,
  state,
  city,
  auth,
};

export default urls;
