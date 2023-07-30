import { Box, Heading } from "@chakra-ui/react";
import SearchBar from "../components/Specialists/SearchBar.jsx";
import specialistService from "../services/specialist/index.js";
import cityService from "../services/city/index.js";
import specialtyService from "../services/specialty/index.js";
import { useLoaderData, useActionData } from "react-router-dom";
import { useState } from "react";
import DoctorList from "../components/Specialists/DoctorList.jsx";
import { requestExecuter } from "../utils.js";

const Specialists = () => {
  const data = useLoaderData();
  const actionData = useActionData();

  const fromSpecialtyCard = actionData && actionData.length > 0;

  const [searchTerms, setSearchTerms] = useState({
    name: "",
    specialty: fromSpecialtyCard ? actionData[0].specialtyId : "",
    city: ""
  });
  const [doctors, setDoctors] = useState(
    actionData || data.specialists.content
  );

  const handleSearch = () => {
    specialistService
      .searchDocs(searchTerms)
      .then((res) => {
        setDoctors(res.content);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box as={"main"} w={["100%", "85%", "95%"]} mx={"auto"} minH={"100vh"}>
      <Heading
        variant={"main"}
        textAlign={["center", "center", "start"]}
      >
        Specialists
      </Heading>
      <SearchBar
        searchTerms={searchTerms}
        setSearchTerms={setSearchTerms}
        specialties={data.specialties}
        cities={data.cities}
        onSearch={handleSearch}
      />
      <DoctorList doctors={doctors} specialties={data.specialties} />
    </Box>
  );
};

export const getSpecialistsSettings = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());

  const data = await requestExecuter(
    specialistService.searchDocs({ specialty: formData.id })
  );

  return data.content;
};
export default Specialists;

export const loader = async () => {
  let data = {};

  try {
    data.specialists = await specialistService.getAll({
      pageNo: 0,
      pageSize: 10,
      sortBy: "averageRating",
      sortDir: "desc",
    });

    data.cities = await cityService.getAllCities();

    data.specialties = await specialtyService.getAllSpecialties();
  } catch (err) {
    throw new Error(
      "Server Error: Keep refreshing this page. We will be back soon!"
    );
  }
  return data;
};
