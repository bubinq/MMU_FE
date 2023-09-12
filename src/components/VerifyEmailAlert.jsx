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
import { useState } from "react";

const VerifyEmailAlert = ({ message }) => {
  const { setShowVerifyMessage } = useAuth();
  const [serverError, setServerError] = useState("");
  const { isAlertVisible } = useAlert(serverError, setServerError);

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
      }
    } finally {
      setTimeout(() => {
        setShowVerifyMessage(false);
      }, 10000);
    }
  };
  return (
    <Flex
      position={"absolute"}
      as={motion.div}
      transition={"0.2s all"}
      animate={message}
      left={"50%"}
      w={"30%"}
      minW={"120px"}
      backgroundColor={"yellow.400"}
      borderRadius={"0.3125rem"}
      boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
      paddingY={"10px"}
      paddingX={"22px"}
    >
      <Image w={"3.125rem"} src={exclamation} />
      <Flex
        color={"blue.900"}
        justifyContent={"center"}
        fontSize={["1rem", "1.2rem"]}
        fontWeight={"500"}
        letterSpacing={"0.2px"}
        lineHeight={["1.25rem", "1.5rem"]}
        textAlign={"center"}
        py={"5px"}
      >
        <Text>
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
          onClick={() => setShowVerifyMessage(false)}
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
