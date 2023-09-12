import {
  Button,
  Flex,
  Image,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import authService from "../services/auth";
import exclamation from "../assets/exclamation.svg";
import useAuth from "../contexts/AuthContext";
import useAlert from "../hooks/useAlert";
import AuthAlert from "./Auth/AuthAlert";
import { useEffect, useState } from "react";

const VerifyEmailAlert = ({ animation }) => {
  const { setVerifyMessage } = useAuth();
  const [serverError, setServerError] = useState("");
  const { isAlertVisible } = useAlert(serverError, setServerError);

  const width = window.innerWidth;

  const resendVerificationEmail = async (ev) => {
    ev.preventDefault();
    try {
      await authService.resendVerifyEmail();
    } catch (error) {
      if (
        error.response.data.message === "A previous token has not expired yet"
      ) {
        setServerError(
          "An active link has already been sent, please check your email inbox"
        );
      } else if (error.response.data.message === "Access denied") {
        setServerError("Something went wrong!");
      }
    }
  };
  useEffect(() => {
    let timer;
    if (serverError) {
      timer = setTimeout(() => {
        setVerifyMessage("");
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [serverError]);
  return (
    <Flex
      position={"absolute"}
      as={motion.div}
      initial={{ scale: 0, opacity: 0 }}
      exit={{ scale: 0, opacity: 0 }}
      animate={{ ...animation, scale: 1, opacity: 1 }}
      left={[
        `calc(50% - ${(width * 0.7) / 2}px)`,
        `calc(50% - ${(width * 0.7) / 2}px)`,
        "50%",
      ]}
      w={["70%", "70%", "30%"]}
      minW={"120px"}
      backgroundColor={"yellow.400"}
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
        <Text key={"text"}>
          Your account is not yet verified. Please check your inbox or verify
          your email{" "}
          <ChakraLink
            as={Link}
            to={""}
            fontWeight={900}
            textDecoration={"underline"}
            onClick={resendVerificationEmail}
          >
            here!
          </ChakraLink>
        </Text>

        <Button
          onClick={() => setVerifyMessage("")}
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
      <AnimatePresence>
        {isAlertVisible && (
          <AuthAlert isVerify={true} serverError={serverError} />
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default VerifyEmailAlert;
