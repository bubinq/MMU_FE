import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { useLoaderData, redirect } from "react-router-dom";
import { formatData } from "../utils";
import Paginate from "../components/Paginate";
import specialtyService from "../services/specialty";
import appointmentsService from "../services/appointments";
import useSpinner from "../hooks/useSpinner";
import SearchBar from "../components/Appointments/SearchBar";
import Spinner from "../components/Spinner";
import AppointmentsList from "../components/Appointments/AppointmentsLists";
import AppointmentsHeading from "../components/Appointments/AppointmentsHeading";

const Appointments = () => {
  const data = useLoaderData();
  const isTransitioning = useSpinner();
  const hasSearched = useRef(false);
  const [searchTerms, setSearchTerms] = useState({
    name: "",
    specialty: "",
    from: "",
    to: "",
  });
  const [appointments, setAppointments] = useState(data.upcoming.content || []);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(data.upcoming.totalPages || 0);

  const goToPage = async (e, value) => {
    let data;
    setIsLoading(true);
    try {
      if (hasSearched.current) {
        data = await appointmentsService.searchAppointments(
          formatData(searchTerms),
          value - 1
        );
      } else {
        data = await appointmentsService.getPage(value - 1);
      }
      setPage(value);
      setAppointments(data.content);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    setIsLoading(true);
    appointmentsService
      .searchAppointments(formatData(searchTerms))
      .then((res) => {
        hasSearched.current = true;
        setAppointments(res.content);
        setCount(res.totalPages);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (appointments.length === 0 && page > 1) {
      window.location.reload();
    }
  }, [appointments, page]);
  return (
    <Flex
      as={"section"}
      direction={"column"}
      w={["75%", "85%", "95%"]}
      mx={"auto"}
      minH={"100vh"}
    >
      {isTransitioning ? (
        <Spinner />
      ) : (
        <>
          <Heading variant={"main"}>Appointments</Heading>
          <SearchBar
            searchTerms={searchTerms}
            setSearchTerms={setSearchTerms}
            specialties={data.specialties}
            onSearch={handleSearch}
          />
          <Flex
            direction={"column"}
            bg={"white"}
            my={"2.25rem"}
            borderRadius={"10px"}
            shadow={"md"}
          >
            <AppointmentsHeading />
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <AppointmentsList
                  appointments={appointments}
                  setAppointments={setAppointments}
                />
                {appointments.length > 0 && (
                  <Paginate count={count} page={page} goToPage={goToPage} />
                )}
              </>
            )}
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Appointments;

export const loader = async () => {
  let data = {};
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return redirect("/");
  }
  try {
    data.specialties = await specialtyService.getAllSpecialties();
    data.upcoming = await appointmentsService.getUpcoming("UPCOMING");
  } catch (err) {
    console.log(err);
    throw new Error(
      "Server Error: Keep refreshing this page. We will be back soon!"
    );
  }
  return data;
};
