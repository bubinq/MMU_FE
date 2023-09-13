import { Box, Heading } from "@chakra-ui/react";
import SearchBar from "../components/Specialists/SearchBar.jsx";
import specialistService from "../services/specialist/index.js";
import stateService from "../services/state/index.js";
import specialtyService from "../services/specialty/index.js";
import { useLoaderData, useActionData } from "react-router-dom";
import { useEffect, useState } from "react";
import DoctorList from "../components/Specialists/DoctorList.jsx";
import { requestExecuter } from "../utils.js";
import useScrollToTop from "../hooks/useScrollToTop.jsx";
import useSpinner from "../hooks/useSpinner.jsx";
import Spinner from "../components/Spinner.jsx";
import ScheduleModal from "../components/ScheduleModal.jsx";
import useAppointments from "../contexts/AppointmentsContext.jsx";

const Specialists = () => {
  const data = useLoaderData();
  const actionData = useActionData();
  const isLoading = useSpinner();
  const { scheduleInfo } = useAppointments();
  useScrollToTop();

  const fromSpecialtyCard = actionData && actionData.length > 0;

  const [searchTerms, setSearchTerms] = useState({
    name: "",
    specialty: fromSpecialtyCard ? actionData[0].specialtyId : "",
    state: "",
    city: "",
  });
  const [doctors, setDoctors] = useState(
    actionData || data.specialists.content
  );
  const [cities, setCities] = useState([]);

  const handleSearch = () => {
    specialistService
      .searchDocs(searchTerms)
      .then((res) => {
        setDoctors(res.content);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (searchTerms.state) {
      (async function () {
        const res = await stateService.getCitiesByState(searchTerms.state);
        if (res && res.content.length > 0) {
          setCities(res.content);
        }
      })();
    }

    setSearchTerms((prev) => ({ ...prev, city: "" }));
  }, [searchTerms.state]);

  return (
    <Box as={"main"} w={["100%", "85%", "95%"]} mx={"auto"} minH={"100vh"}>
      {scheduleInfo.isOpened && <ScheduleModal />}
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Heading
            as={"h1"}
            variant={"main"}
            textAlign={["center", "center", "start"]}
          >
            Specialists
          </Heading>

          <SearchBar
            searchTerms={searchTerms}
            setSearchTerms={setSearchTerms}
            specialties={data.specialties}
            cities={cities}
            states={data.states}
            onSearch={handleSearch}
          />

          <DoctorList doctors={doctors} specialties={data.specialties} />
        </>
      )}
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
      pageSize: 100,
      sortBy: "averageRating",
      sortDir: "desc",
    });

    data.states = await stateService.getAllStates();

    data.specialties = await specialtyService.getAllSpecialties();
  } catch (err) {
    throw new Error(
      "Server Error: Keep refreshing this page. We will be back soon!"
    );
  }
  return data;
};
