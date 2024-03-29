import { Box, Flex, Heading, Link as ChakraLink } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const SignUpHeader = () => {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"0.3125rem"}
      alignself={"stretch"}
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
        <ChakraLink
          textDecoration={"underline"}
          fontSize={["14px", "16px"]}
          as={NavLink}
          color={"blue.900"}
          fontWeight={700}
          to={"/login"}
        >
          Login
        </ChakraLink>
      </Box>
    </Flex>
  );
};

export default SignUpHeader;
