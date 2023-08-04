import { Box, Flex, Text } from "@chakra-ui/react";
import SignUpHeader from "../components/SignUp/SignUpHeader.jsx";
import SignUpForm from "../components/SignUp/SignUpForm.jsx";
import SignUpWithGoogle from "../components/SignUp/SignUpWithGoogle.jsx";

const Register = () => {
  return (
    <Box w={["75%", "85%", "100%"]} mx={"auto"} minH={"100vh"}>
      <Flex
        width={"28.75rem"}
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
        <Box textAlign={"center"} width={"100%"}>
          <Text as={"span"} width={"8.40625rem"}>
            -
          </Text>
          <Text as={"span"}> OR </Text>
          <Text as={"span"} width={"8.40625rem"}>
            -
          </Text>
        </Box>
        <SignUpWithGoogle />
      </Flex>
    </Box>
  );
};

export default Register;
