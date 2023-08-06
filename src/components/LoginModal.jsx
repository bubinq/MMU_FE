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
      shadow={"lg"}
      paddingX={"69px"}
      paddingY={"39px"}
      gap={"30px"}
    >
      <Heading fontWeight={700} fontSize={"24px"} lineHeight={"29.05px"}>
        Login
      </Heading>
      <Flex
        as={"button"}
        borderColor={"red.500"}
        borderRadius={"5px"}
        borderWidth={"2px"}
      >
        <Image w={"59px"} h={"44px"} src={google} borderLeftRadius={"5px"} />
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"0px"}
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
