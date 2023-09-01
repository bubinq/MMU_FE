import { Box, Flex, Image } from "@chakra-ui/react";
import { GOOGLE_OAUTH2_URL2 } from "../../constants.js";
import googleImg from "../../assets/googleTopG.png";
import { useFormikContext } from "formik";

const SignUpWithGoogle = () => {
  const formik = useFormikContext();
  return (
    <Flex
      as={"a"}
      href={formik.values.isOver18 ? GOOGLE_OAUTH2_URL2 : "#"}
      target="_self"
      border={"2px solid #F4B400"}
      alignItems={"center"}
      borderRadius={"5px"}
      h={"36px"}
      w={"100%"}
      cursor={!formik.values.isOver18 && "not-allowed"}
      transition={"0.2s all ease-in-out"}
      _hover={{ borderColor: "red.300" }}
      onClick={(e) => {
        if (!formik.values.isOver18) {
          e.preventDefault();
        }
      }}
    >
      <Image
        w={"47px"}
        h={"32px"}
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
        opacity={formik.values.isOver18 ? "100%" : "40%"}
        cursor={!formik.values.isOver18 && "not-allowed"}
        color={"blue.900"}
        fontWeight={700}
        fontSize={"1rem"}
      >
        Sign up with Google
      </Box>
    </Flex>
  );
};

export default SignUpWithGoogle;
