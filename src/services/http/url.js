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
    pageSize = 100,
    sortBy = "averageRating",
    sortDir = "desc",
  }) =>
    `/doctors?name=${name}&specialtyId=${specialty}&cityId=${city}&pageSize=${pageSize}&sortBy=${sortBy}&sortDir=${sortDir}`,
};

const city = {
  listAll: () => "/cities",
  getCity: (uuid) => `/cities/${uuid}`,
  create: (countryUuid) => `/countries/${countryUuid}/cities`,
};

const country = {
  listAll: () => "/country",
  create: () => "/country",
  getCountry: (uuid) => `/countries/${uuid}`,
  updateCountry: (uuid) => `/countries/${uuid}`,
  deleteCountry: (uuid) => `/countries/${uuid}`,
};

const auth = {
  create: "/auth/register",
  login: "/auth/login",
  verify: (token) => `/auth/verify-email?token=${token}`,
  validateToken: (token) => `/auth/validate-token?token=${token}`,
  resendVerification: (email) => `/auth/send-email-verification?email=${email}`,
  resend: (token) => `/auth/resend-forgot?token=${token}`,
  changePassword: (token) => `auth/change-password?token=${token}`,
  forgottenPassword: "/auth/forgot",
};

const appointments = {
  getUpcoming: (type) => `/appointments/search?type=${type}`,
  scheduleAppointment: `/appointments`,
  cancel: (id) => `/appointments/${id}`,
  getDoctorAppointments: (id) => `/doctors/${id}/appointments`,
};

const urls = {
  appointments,
  specialty,
  specialist,
  country,
  city,
  auth,
};

export default urls;
