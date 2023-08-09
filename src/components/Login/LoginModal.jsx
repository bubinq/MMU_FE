import { Flex, Heading, Image, Box, Text, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import google from "../../assets/googleTopG.png";
import exclamation from "../../assets/exclamation.svg";
import { GOOGLE_OAUTH2_URL } from "../../constants";

const LoginModal = () => {
  const [serverError, setServerError] = useState("");
  useEffect(() => {
    if (serverError) {
      setTimeout(() => {
        setServerError("");
      }, 5000);
    }
  }, [serverError]);
  return (
    <Flex
      as={"article"}
      direction={"column"}
      bg={["rgba(255, 255, 253, 0.8)", "#FFFFFD"]}
      w={["fit-content", "460px"]}
      h={"fit-content"}
      mt={"100px"}
      borderRadius={"15px"}
      boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
      paddingX={["2rem", "69px"]}
      paddingY={["24px", "39px"]}
      gap={["25px", "35px"]}
      pos={"relative"}
      zIndex={1}
    >
      <Heading fontWeight={700} fontSize={"24px"} lineHeight={"normal"}>
        Login
      </Heading>
      <Flex
        as={"a"}
        href={GOOGLE_OAUTH2_URL}
        target="_self"
        border={"2px solid #E54335"}
        alignItems={"center"}
        borderRadius={"5px"}
        h={"44px"}
      >
        <Image w={"59px"} h={"40px"} src={google} borderLeftRadius={"5px"} />
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          bg={"red.500"}
          w={"100%"}
          h={"100%"}
          p={"0px"}
          _hover={{ bg: "red.300" }}
          color={"white"}
          fontWeight={700}
          fontSize={["14px", "16px"]}
        >
          Continue with Google
        </Box>
      </Flex>
      <Flex alignItems={"center"}>
        <Box h={"2px"} w={"12.5%"} bg={"black"} />
        <Text w={"75%"} fontSize={["12px", "16px"]} textAlign={"center"}>
          Or continue with user/email
        </Text>
        <Box h={"2px"} w={"12.5%"} bg={"black"} />
      </Flex>
      {serverError && (
        <Flex
          position={"relative"}
          w={"20.2rem"}
          backgroundColor={"#D71C21"}
          borderRadius={"0.3125rem"}
          boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
          padding={"10px"}
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
            {serverError}
          </Flex>
        </Flex>
      )}
      <LoginForm setServerError={setServerError} />

      <Text fontSize={["14px", "16px"]} textAlign={"center"}>
        Don’t have an account yet?{" "}
        <Link
          textDecoration={"underline"}
          as={NavLink}
          color={"yellow.500"}
          to={"/register"}
        >
          Sign up
        </Link>
      </Text>
    </Flex>
  );
};

export default LoginModal;
