import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState, useRef } from "react";
import { useLoaderData, redirect, useFetcher } from "react-router-dom";
import { formatData } from "../utils";
import Paginate from "../components/Paginate";
import specialtyService from "../services/specialty";
import appointmentsService from "../services/appointments";
import useSpinner from "../hooks/useSpinner";
import SearchBar from "../components/Appointments/SearchBar";
import Spinner from "../components/Spinner";
import AppointmentsList from "../components/Appointments/AppointmentsLists";
import AppointmentsHeading from "../components/Appointments/AppointmentsHeading";
import useAppointments from "../contexts/AppointmentsContext";

const Appointments = () => {
  const data = useLoaderData();
  const fetcher = useFetcher();

  const isTransitioning = useSpinner();
  const { selectedType } = useAppointments();

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
          value - 1,
          selectedType
        );
      } else {
        data = await appointmentsService.getPage(selectedType, value - 1);
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
      .searchAppointments(formatData(searchTerms), "", selectedType)
      .then((res) => {
        hasSearched.current = true;
        setAppointments(res.content);
        setCount(res.totalPages);
        setPage(1);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (appointments.length === 0 && page > 1) {
      fetcher.load();
      setIsLoading(true);
    }
  }, [appointments, page]);

  useEffect(() => {
    if (fetcher.data) {
      setAppointments(
        fetcher.data.upcoming
          ? fetcher.data.upcoming.content
          : fetcher.data.content
      );
      setCount(
        fetcher.data.upcoming
          ? fetcher.data.upcoming.totalPages
          : fetcher.data.totalPages
      );
      setPage(1);
      setSearchTerms({
        name: "",
        specialty: "",
        from: "",
        to: "",
      });
      setIsLoading(false);
    }
  }, [fetcher.data]);
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
            <AppointmentsHeading fetcher={fetcher} />
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <AppointmentsList
                  appointments={appointments}
                  setAppointments={setAppointments}
                />
                {appointments?.length > 0 && (
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

export const getAppointmentsType = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  try {
    const response = await appointmentsService.getAppointments(
      formData.selectedType
    );
    return response;
  } catch (error) {
    if (error.response.data.message === "Access Denied") {
      throw new Error(
        "You are not authorized to access this resource or you might not have verified your account."
      );
    }
    throw new Error(
      "Server Error: Keep refreshing this page. We will be back soon!"
    );
  }
};

export const loader = async () => {
  let data = {};
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return redirect("/");
  }
  try {
    data.specialties = await specialtyService.getAllSpecialties();
    data.upcoming = await appointmentsService.getAppointments("UPCOMING");
  } catch (err) {
    if (err.response.data.message === "Access Denied") {
      throw new Error(
        "You are not authorized to access this resource or you might not have verified your account."
      );
    }
    throw new Error(
      "Server Error: Keep refreshing this page. We will be back soon!"
    );
  }
  return data;
};
