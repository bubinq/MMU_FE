import { Flex, Heading, Image, Box, Text, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import LoginForm from "./LoginForm";
import googleImg from "../../assets/googleTopG.png";
import AuthAlert from "../../components/Auth/AuthAlert";
import { GOOGLE_OAUTH2_URL } from "../../constants";
import { AnimatePresence } from "framer-motion";
import useAlert from "../../hooks/useAlert";

const LoginModal = () => {
  const [serverError, setServerError] = useState("");
  const { isAlertVisible } = useAlert(serverError, setServerError);

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
        border={"2px solid #F4B400"}
        alignItems={"center"}
        borderRadius={"5px"}
        h={"44px"}
        transition={"0.2s all ease-in-out"}
        _hover={{ borderColor: "red.300" }}
      >
        <Image
          w={"59px"}
          h={"40px"}
          src={googleImg}
          alt="Google Logo"
          borderLeftRadius={"5px"}
        />
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          bg={"yellow.400"}
          w={"100%"}
          h={"100%"}
          p={"0px"}
          transition={"0.2s all ease-in-out"}
          _hover={{ bg: "red.300", color: "white" }}
          color={"blue.900"}
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
      <AnimatePresence>
        {isAlertVisible && <AuthAlert serverError={serverError} />}
      </AnimatePresence>

      <LoginForm setServerError={setServerError} />

      <Text fontSize={["14px", "16px"]} textAlign={"center"}>
        Don’t have an account yet?{" "}
        <Link
          textDecoration={"underline"}
          as={NavLink}
          color={"blue.900"}
          fontWeight={700}
          to={"/register"}
        >
          Sign up
        </Link>
      </Text>
    </Flex>
  );
};

export default LoginModal;
