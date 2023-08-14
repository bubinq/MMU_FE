import { Box, Flex, Image } from "@chakra-ui/react";
import exclamation from "../../assets/exclamation-mark.svg";
import { motion } from "framer-motion";

const ValidationErrorMSG = ({ serverError }) => {
  return (
    <Flex
      position={"absolute"}
      as={motion.div}
      transition={"0.2s all"}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      w={"26.625rem"}
      minHeight={"5.875rem"}
      backgroundColor={"#D71C21"}
      top={["-4%", "-4%", "-5%"]}
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
  );
};

export default ValidationErrorMSG;
