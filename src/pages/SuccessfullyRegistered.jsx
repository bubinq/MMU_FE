import { Box, Flex, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {useEffect, useRef} from "react";
import {Canvas} from "../utils.js";

const SuccessfullyRegistered = () => {
  const ref = useRef();
  useEffect(() => {
    new Canvas(ref.current);
  }, []);

  return (
    <Box w={"100%"} mx={"auto"} minH={"100vh"} ref={ref}>
      <Flex
        className="signup-confirmation"
        mt={"15.4425rem"}
        w={"30.0625rem"}
        p={"2.4375rem 3rem"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"1.875rem"}
        borderRadius={"0.9375rem"}
        backgroundColor={"#FFFFFD"}
        boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
        marginX={"auto"}
        fontSize={"1rem"}
        zIndex={"1"}
        position={"relative"}
      >
        <Box marginX={"auto"}>
          <img src="../src/assets/registered_checked.svg" alt="Successful" width={"130px"}/>
        </Box>
        <Box marginX={"auto"} fontWeight={"600"}>
          Congratulations!
        </Box>
        <Box>
          Your account has been created successfully.
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
