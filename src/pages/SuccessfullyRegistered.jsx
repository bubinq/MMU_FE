import { Box, Flex, Heading, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SuccessfullyRegistered = () => {
  return (
    <Box w={"100%"} mx={"auto"} minH={"100vh"}>
      <Flex
        className="signup-confirmation"
        mt={"21.4425rem"}
        w={"30.0625rem"}
        p={"2.4375rem 3rem"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"1.875rem"}
        borderRadius={"0.9375rem"}
        backgroundColor={"#FFFFFD"}
        boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
        marginX={"auto"}
      >
        <Box marginX={"auto"}>
          <img src="../assets/registered_checked.svg" alt="Successful" />
        </Box>
        <Heading marginX={"auto"}>
          Congratulations!
        </Heading>
        <Box>
          Your account has been created successfully. An email was sent to
          verify your account, please check your email.
        </Box>
        <ChakraLink
          as={Link}
          to={"/login"}
          color={"#c34723"}
          fontSize={"1rem"}
          lineHeight={"1.5rem"}
          letterSpacing={"0.00938rem"}
        >
          Go to the Login page
        </ChakraLink>
      </Flex>
    </Box>
  );
};

export default SuccessfullyRegistered;
