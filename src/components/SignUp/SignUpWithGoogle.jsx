import {Box, Flex, Image} from "@chakra-ui/react";
import google from "../../assets/googleTopG.png";

const SignUpWithGoogle = () => {
 return (
     <Flex
         as={"button"}
         borderColor={"red.500"}
         borderRadius={"5px"}
         borderWidth={"2px"}
         w={"100%"}
         alignItems={"center"}
         backgroundColor={"#e54335"}
         _hover={{ bg: "red.300" }}
     >
        <Image w={"3.25rem"} src={google} borderLeftRadius={"5px"} />
        <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            borderRadius={"0px"}
            bg={"red.500"}
            w={"100%"}
            h={"34.5px"}
            p={"0px"}
            _hover={{ bg: "red.300" }}
            color={"#FFF2F8"}
            lineHeight={"1.5rem"}
            fontWeight={700}
            fontSize={"1rem"}
            letterSpacing={"0.00938rem"}
        >
          Sign up with Google
        </Box>
      </Flex>
 );
}

export default SignUpWithGoogle;