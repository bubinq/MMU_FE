import { Box, Flex, Image } from "@chakra-ui/react";
import { GOOGLE_OAUTH2_URL } from "../../constants.js";
import googleImg from "../../assets/googleTopG.png";

const SignUpWithGoogle = () => {
  return (
    <Flex
      as={"a"}
      href={GOOGLE_OAUTH2_URL}
      target="_self"
      border={"2px solid #F4B400"}
      alignItems={"center"}
      borderRadius={"5px"}
      h={"36px"}
      w={"100%"}
      transition={"0.2s all ease-in-out"}
      _hover={{ borderColor: "red.300" }}
    >
      <Image w={"47px"} h={"32px"} src={googleImg} borderLeftRadius={"5px"} />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        bg={"yellow.400"}
        w={"100%"}
        h={"100%"}
        p={"0px"}
        transition={"0.2s all ease-in-out"}
        _hover={{ bg: "red.300" }}
        color={"white"}
        fontWeight={700}
        fontSize={"1rem"}
      >
        Sign up with Google
      </Box>
    </Flex>
  );
};

export default SignUpWithGoogle;
