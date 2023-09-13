import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

import exclamation from "../assets/exclamation.svg";

const SuccessMessageAlert = ({ message }) => {
  const width = window.innerWidth;
  return (
    <Flex
      position={"absolute"}
      as={motion.div}
      initial={{ scale: 0, opacity: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      left={[
        `calc(50% - ${(width * 0.7) / 2}px)`,
        `calc(50% - ${(width * 0.7) / 2}px)`,
        "0%",
      ]}
      w={["70%", "70%", "100%"]}
      minW={"120px"}
      backgroundColor={"green.300"}
      borderRadius={"0.3125rem"}
      boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
      paddingY={"10px"}
      paddingX={["12px", "22px"]}
      transition={"0.2s all"}
    >
      <Image w={"3.125rem"} src={exclamation} />
      <Flex
        color={"blue.900"}
        justifyContent={"center"}
        fontSize={["1rem", "1.2rem"]}
        fontWeight={"500"}
        letterSpacing={"0.2px"}
        lineHeight={"1.5rem"}
        textAlign={["left", "center"]}
        py={"5px"}
        px={["5px", "10px"]}
      >
        <Text>{message}</Text>
      </Flex>
    </Flex>
  );
};

export default SuccessMessageAlert;
