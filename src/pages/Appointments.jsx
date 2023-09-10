import { Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLoaderData, redirect } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import { ThemeProvider, createTheme } from "@mui/material";
import specialtyService from "../services/specialty";
import appointmentsService from "../services/appointments";
import useSpinner from "../hooks/useSpinner";
import SearchBar from "../components/Appointments/SearchBar";
import Spinner from "../components/Spinner";
import AppointmentsList from "../components/Appointments/AppointmentsLists";
import AppointmentsHeading from "../components/Appointments/AppointmentsHeading";

const Appointments = () => {
  const data = useLoaderData();
  const isLoading = useSpinner();
  const theme = createTheme({
    palette: {
      primary: { main: "#F4B400", contrastText: "#200017" },
    },
  });
  const [searchTerms, setSearchTerms] = useState({
    name: "",
    specialty: "",
    from: "",
    to: "",
  });
  const [appointments, setAppointments] = useState(data.upcoming.content || []);
  const [page, setPage] = useState(1);

  const goToPage = async (e, value) => {
    try {
      const data = await appointmentsService.getPage(value - 1);
      setPage(value);
      setAppointments(data.content);
    } catch (error) {
      console.log(error);
    }
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
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Heading variant={"main"}>Appointments</Heading>
          <SearchBar
            searchTerms={searchTerms}
            setSearchTerms={setSearchTerms}
            specialties={data.specialties}
          />
          <Flex
            direction={"column"}
            bg={"white"}
            my={"2.25rem"}
            borderRadius={"10px"}
            shadow={"md"}
          >
            <AppointmentsHeading />

            <AppointmentsList
              appointments={appointments}
              setAppointments={setAppointments}
            />
            {appointments.length > 0 && (
              <ThemeProvider theme={theme}>
                <Flex justify={"center"} pb={"20px"}>
                  <Pagination
                    count={data.upcoming.totalPages}
                    size="large"
                    color="primary"
                    page={page}
                    onChange={goToPage}
                  />
                </Flex>
              </ThemeProvider>
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
    throw new Error(
      "Server Error: Keep refreshing this page. We will be back soon!"
    );
  }
  return data;
};
