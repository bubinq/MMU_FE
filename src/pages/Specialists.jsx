import { Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SearchBar from "../components/Specialists/SearchBar.jsx";
import specialistService from "../services/specialist/index.js";
import cityService from "../services/city/index.js";
import specialtyService from "../services/specialty/index.js";
import { useLoaderData } from "react-router-dom";

const Specialists = ({ specialties = [], cities = [] }) => {
  const data = useLoaderData();
  console.log(data);

  // const [data, setData] = useState([]);

  const [searchTerms, setSearchTerms] = useState({});

  console.log(data);

  // useEffect(() => {
  //   specialistService
  //     .getAll({
  //       pageNo: 0,
  //       pageSize: 10000,
  //       sortBy: "averageRating",
  //       sortDir: "asc",
  //     })
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <Box as={"section"} w={["75%", "85%", "95%"]} mx={"auto"}>
      <Heading variant={"main"} display={"block"}>
        Specialists
      </Heading>
      <SearchBar
        setSearchTerms={setSearchTerms}
        specialties={specialties}
        cities={cities}
      />
    </Box>
  );
};

export const getSpecialistsSettings = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  console.log(formData);
};
export default Specialists;

export const loader = async (params) => {
  let data = {};

    console.log(params);

    specialistService
        .getAll({
            pageNo: 0,
            pageSize: 10000,
            sortBy: "averageRating",
            sortDir: "asc",
        })
        .then((res) => (data.specialists = res))
        .catch((err) => console.log(err));

  cityService.getAllCities
    .then((res) => (data.cities = res))
    .catch((err) => console.log(err));

  specialtyService.getAllSpecialties
    .then((res) => (data.specialties = res))
    .catch((err) => console.log(err));

  return data;
};
