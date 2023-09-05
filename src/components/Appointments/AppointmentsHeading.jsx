import { Flex, Link as ChakraLink } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const AppointmentsHeading = () => {
  return (
    <Flex>
      <Flex
        justify={"center"}
        w={"50%"}
        py={4}
        borderBottom={"2px solid"}
        borderColor={"yellow.400"}
      >
        <ChakraLink
          as={NavLink}
          textDecoration={"none"}
          fontSize={"1.5rem"}
          textAlign={"center"}
          textColor={"yellow.400"}
          _hover={{textDecoration: "none"}}
        >
          Upcoming appointments
        </ChakraLink>
      </Flex>
      <Flex justify={"center"} w={"50%"} py={4} borderBottom={"2px solid grey"}>
        <ChakraLink
          as={NavLink}
          textDecoration={"none"}
          fontSize={"1.5rem"}
          textAlign={"center"}
          textColor={"grey"}
          _hover={{textDecoration: "none"}}
        >
          Past appointments
        </ChakraLink>
      </Flex>
    </Flex>
  );
};

export default AppointmentsHeading;
