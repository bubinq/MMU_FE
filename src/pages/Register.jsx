import { Box, Flex, Text, Image } from "@chakra-ui/react";
import SignUpHeader from "../components/SignUp/SignUpHeader.jsx";
import SignUpForm from "../components/SignUp/SignUpForm.jsx";
import SignUpWithGoogle from "../components/SignUp/SignUpWithGoogle.jsx";
import exclamation from "../../public/exclamation-mark.svg";
import {useEffect, useState} from "react";

const Register = () => {
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
      if(serverError) {
          setTimeout(()=> {
              setServerError(null);
          }, 5000)
      }
  }, [serverError]);


  return (
    <Box
      w={["75%", "85%", "100%"]}
      mx={"auto"}
      minH={"100vh"}
      position={"relative"}
    >
      <Flex
        width={"30.0625rem"}
        minHeight={"54rem"}
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
        <SignUpForm setServerError={setServerError}/>
        <Flex
          textAlign={"center"}
          alignItems={"center"}
          width={"100%"}
          justifyContent={"center"}
        >
          <Box h={"2px"} w={"44%"} bg={"black"} />
          <Text as={"span"} w={"2.625rem"} fontSize={"1rem"}>
            {" "}
            OR{" "}
          </Text>
          <Box h={"2px"} w={"44%"} bg={"black"} />
        </Flex>
        <SignUpWithGoogle />
      </Flex>
      {serverError && (
        <Flex
          position={"absolute"}
          w={"26.625rem"}
          h={"5.875rem"}
          backgroundColor={"#D71C21"}
          top={"8%"}
          left={"24%"}
          borderRadius={"0.3125rem"}
          boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
          padding={"1.375rem 2.125rem"}
          gap={"0.75rem"}
        >
          <Image w={"3.125rem"} src={exclamation} />
          <Flex
            color={"#FFFFFD"}
            justifyContent={"center"}
            alignItems={"center"}
            fontSize={"1rem"}
            fontStyle={"normal"}
            fontWeight={"700"}
            lineHeight={"1.5rem"}
            letterSpacing={"0.00938rem"}
          >
            {serverError}
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Register;
