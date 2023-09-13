import { Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import exclamation from "../../assets/exclamation.svg";

const AuthAlert = ({ serverError, isSchedule, isVerify }) => {
  return (
    <Flex
      position={`${isVerify ? "absolute" : "relative"}`}
      as={motion.div}
      transition={"0.2s all"}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      w={isSchedule ? "90%" : isVerify? "80%"  :"100%"}
      top={`${isVerify && "100%"}`}
      mx={isSchedule && "auto"}
      mb={isSchedule && "2rem"}
      mt={isVerify && "1.5rem"}
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
        fontSize={["0.8rem", "1rem"]}
        flexDirection={"column"}
        fontStyle={"normal"}
        fontWeight={"700"}
        lineHeight={["1.25rem", "1.5rem"]}
        letterSpacing={"0.00938rem"}
        gap={"0.5rem"}
      >
        {serverError}
      </Flex>
    </Flex>
  );
};

export default AuthAlert;
