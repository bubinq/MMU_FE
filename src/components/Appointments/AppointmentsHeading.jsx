import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import useAppointments from "../../contexts/AppointmentsContext";

const AppointmentsHeading = ({fetcher}) => {
  const { selectedType, setSelectedType } = useAppointments();
  const isUpcoming = selectedType === "UPCOMING";
  return (
    <Flex>
      <Flex
        justify={"center"}
        w={"50%"}
        py={4}
        borderBottom={isUpcoming ? "2px solid" : "2px solid grey"}
        borderColor={isUpcoming && "yellow.400"}
        transition={"0.2s all ease"}
      >
        <ChakraLink
          as={NavLink}
          textDecoration={"none"}
          fontSize={["1.4rem", "1.5rem"]}
          textAlign={"center"}
          textColor={isUpcoming ? "yellow.400" : "grey"}
          _hover={{ textDecoration: "none" }}
          display="flex"
          alignItems="center"
          onClick={(ev) => {
            ev.preventDefault();
            setSelectedType("UPCOMING");
            fetcher.submit({ selectedType: "UPCOMING" }, { method: "post" });
          }}
        >
          Upcoming appointments
        </ChakraLink>
      </Flex>
      <Flex
        justify={"center"}
        w={"50%"}
        py={4}
        borderBottom={!isUpcoming ? "2px solid" : "2px solid grey"}
        borderColor={!isUpcoming && "yellow.400"}
        transition={"0.2s all ease"}
      >
        <ChakraLink
          as={NavLink}
          textDecoration={"none"}
          fontSize={["1.4rem", "1.5rem"]}
          textAlign={"center"}
          textColor={!isUpcoming ? "yellow.400" : "grey"}
          _hover={{ textDecoration: "none" }}
          display="flex"
          alignItems="center"
          onClick={(ev) => {
            ev.preventDefault();
            setSelectedType("PAST");
            fetcher.submit({ selectedType: "PAST" }, { method: "post" });
          }}
        >
          Past appointments
        </ChakraLink>
      </Flex>
    </Flex>
  );
};

export default AppointmentsHeading;
