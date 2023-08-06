import { Box, Flex, Text } from "@chakra-ui/react";
import SignUpHeader from "../components/SignUp/SignUpHeader.jsx";
import SignUpForm from "../components/SignUp/SignUpForm.jsx";
import SignUpWithGoogle from "../components/SignUp/SignUpWithGoogle.jsx";

const Register = () => {
  return (
    <Box w={["75%", "85%", "100%"]} mx={"auto"} minH={"100vh"}>
      <Flex
        width={"30.0625rem"}
        height={"52.25rem"}
        mt={"9.125rem"}
        mx={"auto"}
        padding={"2.4375rem 4.3125rem"}
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"1.875rem"}
        backgroundColor={"var(--white, #FFFFFD)"}
        borderRadius={"0.9375rem"}
        boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
      >
        <SignUpHeader />
        <SignUpForm />
        <Flex textAlign={"center"} width={"100%"}>
          <Box width={"8.40625rem"}></Box>
          <Text as={"span"}> OR </Text>
          <Box width={"8.40625rem"}></Box>
        </Flex>
        <SignUpWithGoogle />
      </Flex>
    </Box>
  );
};

export default Register;
