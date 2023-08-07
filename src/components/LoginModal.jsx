import { Flex, Heading, Image, Box, Text, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm";
import google from "../assets/googleTopG.png";

const LoginModal = () => {
  return (
    <Flex
      as={"article"}
      direction={"column"}
      bg={"#FFFFFD"}
      w={"460px"}
      h={"610px"}
      mt={"100px"}
      borderRadius={"15px"}
      boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
      paddingX={["20px", "69px"]}
      paddingY={["39px"]}
      gap={["25px","35px"]}
    >
      <Heading fontWeight={700} fontSize={"24px"} lineHeight={"normal"}>
        Login
      </Heading>
      <Flex
        as={"button"}
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
          fontSize={"16px"}
        >
          Continue with Google
        </Box>
      </Flex>
      <Flex alignItems={"center"}>
        <Box h={"2px"} w={"12.5%"} bg={"black"} />
        <Text w={"75%"} fontSize={"16px"} textAlign={"center"}>
          Or continue with user/email
        </Text>
        <Box h={"2px"} w={"12.5%"} bg={"black"} />
      </Flex>
      <LoginForm/>
      <Text fontSize={"16px"} textAlign={"center"}>
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
