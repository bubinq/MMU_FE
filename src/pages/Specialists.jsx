import { Box, Heading } from "@chakra-ui/react";
import SearchBar from "../components/Specialists/SearchBar.jsx";
import specialistService from "../services/specialist/index.js";
import cityService from "../services/city/index.js";
import specialtyService from "../services/specialty/index.js";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import DoctorList from "../components/Specialists/DoctorList.jsx";

const Specialists = () => {
  const data = useLoaderData();

  const [searchTerms, setSearchTerms] = useState({
    name: "",
    specialty: "",
    city: "",
  });
  const [doctors, setDoctors] = useState([]);
  console.log(doctors);

  const handleSearch = () => {
    specialistService
      .searchDocs(searchTerms)
      .then((res) => {
        setDoctors(res.content);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box as={"section"} w={["75%", "85%", "95%"]} mx={"auto"}>
      <Heading variant={"main"} display={"block"}>
        Specialists
      </Heading>
      <SearchBar
        searchTerms={searchTerms}
        setSearchTerms={setSearchTerms}
        specialties={data.specialties}
        cities={data.cities}
        onSearch={handleSearch}
      />
      <DoctorList
        doctors={doctors.length > 0 ? doctors : data.specialists.content}
        specialties={data.specialties}
      />
    </Box>
  );
};

export const getSpecialistsSettings = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  console.log(formData);
};
export default Specialists;

export const loader = async () => {
  let data = {};

  try {
    data.specialists = await specialistService.getAll({
      pageNo: 0,
      pageSize: 10000,
      sortBy: "averageRating",
      sortDir: "desc",
    });

    data.cities = await cityService.getAllCities;

    data.specialties = await specialtyService.getAllSpecialties;
  } catch (err) {
    console.log(err);
  }

  return data;
};
