import { Flex, Image, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import exclamation from "../assets/exclamation.svg";
import useAuth from "../contexts/AuthContext";
import { useEffect } from "react";

const SuccessMessageAlert = ({ message, animation }) => {
  const width = window.innerWidth;
  const { setSuccessMessage, setVerifyMessage } = useAuth();
  useEffect(() => {
    let timer = setTimeout(() => {
      setSuccessMessage(null);
      setVerifyMessage("");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Flex
      position={"absolute"}
      as={motion.div}
      initial={{ scale: 0, opacity: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      animate={{ ...animation, scale: 1, opacity: 1 }}
      left={[
        `calc(50% - ${(width * 0.7) / 2}px)`,
        `calc(50% - ${(width * 0.3) / 2}px)`,
        `calc(50% - ${(width * 0.3) / 2}px)`,
      ]}
      w={["70%", "30%"]}
      minW={"200px"}
      backgroundColor={"green.300"}
      borderRadius={"0.3125rem"}
      boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
      paddingY={"10px"}
      paddingX={["12px", "8px"]}
      transition={"0.2s all"}
    >
      <Image w={"3.125rem"} src={exclamation} />
      <Flex
        color={"blue.900"}
        justifyContent={"center"}
        fontSize={["1rem", "1.15rem"]}
        fontWeight={"500"}
        letterSpacing={"0.2px"}
        lineHeight={"1.5rem"}
        textAlign={"center"}
        pr={"20px"}
        pl={"5px"}
        py={"5px"}
      >
        <Text>{message}</Text>
      </Flex>
      <Button
        onClick={() => {
          setSuccessMessage(null);
          setVerifyMessage("");
        }}
        pos={"absolute"}
        top={"5%"}
        color={"#fff"}
        right={"0%"}
        bg={""}
        fontSize={"xl"}
        _hover={{ bg: "" }}
      >
        &#10005;
      </Button>
    </Flex>
  );
};

export default SuccessMessageAlert;
