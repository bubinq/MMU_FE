import {Box, Flex, Heading, Link as ChakraLink} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const SignUpHeader = () => {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"0.3125rem"}
      alignSelf={"stretch"}
    >
      <Heading>Sign up</Heading>
      <Box
        color={"#200017"}
        fontSize={"1rem"}
        fontStyle={"400"}
        lineHeight={"1.5rem"}
        letterSpacing={"0.00938rem"}
      >
        Already have an account?{" "}
        <ChakraLink as={Link} to={"/login"} color={"#c34723"} textDecoration={"underline"}>
          Login
        </ChakraLink>
      </Box>
    </Flex>
  );
};

export default SignUpHeader;
