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

const urls = {
  specialty,
  specialist,
  country,
  city,
};

export default urls;
