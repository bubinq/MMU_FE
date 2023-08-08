import { Box, Flex, Text, Image } from "@chakra-ui/react";
import SignUpHeader from "../components/SignUp/SignUpHeader.jsx";
import SignUpForm from "../components/SignUp/SignUpForm.jsx";
import SignUpWithGoogle from "../components/SignUp/SignUpWithGoogle.jsx";
import exclamation from "../../public/exclamation-mark.svg";
import {useEffect, useState} from "react";

const Register = () => {
  const [serverError, setServerError] = useState(null);
  console.log(serverError)

  useEffect(() => {
      if(serverError) {
          const timeOut = setTimeout(()=> {
              setServerError(null);
          }, 5000)
      return () => clearTimeout(timeOut);
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
        <SignUpForm serverError={serverError} setServerError={setServerError}/>
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
        {serverError && (
            <Flex
                position={"absolute"}
                w={"26.625rem"}
                minHeight={"5.875rem"}
                backgroundColor={"#D71C21"}
                top={"8%"}
                left={"calc(50% - 26.625rem / 2)"}
                borderRadius={"0.3125rem"}
                boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
                padding={"1.375rem 2.125rem"}
                gap={"0.75rem"}
            >
              <Image w={"3.125rem"} src={exclamation} />
              <Flex
                  color={"#FFFFFD"}
                  justifyContent={"center"}
                  alignItems={"flex-start"}
                  fontSize={"1rem"}
                  flexDirection={"column"}
                  fontStyle={"normal"}
                  fontWeight={"700"}
                  lineHeight={"1.5rem"}
                  letterSpacing={"0.00938rem"}
                  gap={"0.5rem"}
              >
                {Object.values(serverError).map((msg, index) => (
                    <Box key={index}>• {msg.split(".,")[0]}</Box>
                ))}

              </Flex>
            </Flex>
        )}
      </Flex>

    </Box>
  );
};

export default Register;
