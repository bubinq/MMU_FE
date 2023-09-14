import {
  Flex,
  Box,
  Text,
  Link as ChakraLink,
  Spinner,
  Alert,
  AlertIcon,
  Button,
} from "@chakra-ui/react";
import { Link, redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import authService from "../../services/auth";
import checkIcon from "../../assets/registered_checked.svg";
import deniedIcon from "../../assets/denied.svg";
import BackEndValidationErrorMSG from "../../components/SignUp/BackEndValidationErrorMSG";
import useAlert from "../../hooks/useAlert";
import useAuth from "../../contexts/AuthContext";
import { EMAIL_ALREADY_SENT, RESEND_SENT } from "../../constants";

export default function AuthModal({
  headingMessage = "Congratulations!",
  message,
  isSuccessful = true,
  isReset,
}) {
  const resendToken = JSON.parse(sessionStorage.getItem("token"));
  const [authState, setAuthState] = useState({
    isLoading: false,
    success: false,
    error: "",
  });
  const { setUser } = useAuth();

  const [serverError, setServerError] = useState("");
  const { isAlertVisible } = useAlert(serverError, setServerError);

  const requestNewReset = async () => {
    setAuthState((prevState) => ({ ...prevState, isLoading: true }));
    try {
      const response = await authService.resendReset(resendToken);
      if (typeof response === "string") {
        sessionStorage.clear();
        setAuthState({ isLoading: false, success: true });
      }
    } catch (error) {
      setAuthState({ success: false, isLoading: false });
      setServerError({ message: EMAIL_ALREADY_SENT });
    }
  };

  useEffect(() => {
    setUser(null);
  }, []);
  return (
    <Flex
      mt={"15.4425rem"}
      w={["24rem", "30.0625rem"]}
      p={"2.4375rem 3rem"}
      flexDirection={"column"}
      gap={"1.875rem"}
      borderRadius={"0.9375rem"}
      backgroundColor={"#FFFFFD"}
      boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
      marginX={"auto"}
      fontSize={"1rem"}
      zIndex={"1"}
      position={"relative"}
    >
      {authState.success && (
        <Alert
          position={"absolute"}
          top={"-24%"}
          left={"0%"}
          status="success"
          fontSize={"lg"}
          fontWeight={600}
          variant="subtle"
        >
          <AlertIcon />
          {RESEND_SENT}
        </Alert>
      )}
      <Box marginX={"auto"}>
        <img
          src={isSuccessful ? checkIcon : deniedIcon}
          alt={`${isSuccessful ? "Success Icon" : "Error Icon"}`}
          width={"130px"}
        />
      </Box>
      <Box
        marginX={"auto"}
        fontWeight={"600"}
        fontSize={"24px"}
        textAlign={"center"}
      >
        {headingMessage}
      </Box>
      <Text fontSize={"16px"}>
        {message}
        {isReset && (
          <ChakraLink
            as={Button}
            disabled={authState.isLoading}
            onClick={requestNewReset}
            color={"#c34723"}
            bg={"transparent"}
            fontSize={"16px"}
            lineHeight={"1.5rem"}
            p={0}
            ml={["0px", "6px"]}
            letterSpacing={"0.00938rem"}
            _hover={{ bg: "transparent", textDecoration: "underline" }}
          >
            {" here."}
          </ChakraLink>
        )}
      </Text>
      {authState.isLoading && (
        <Spinner
          marginX={"auto"}
          thickness="4px"
          speed="0.65s"
          color="yellow.400"
          size="xl"
        />
      )}
      {isAlertVisible && (
        <BackEndValidationErrorMSG serverError={serverError} />
      )}
      {!isReset && (
        <ChakraLink
          as={Link}
          to={"/login"}
          color={"#c34723"}
          fontSize={"16px"}
          lineHeight={"1.5rem"}
          letterSpacing={"0.00938rem"}
        >
          Go to the Login page
        </ChakraLink>
      )}
    </Flex>
  );
}

export const loader = async () => {
  const token = new URLSearchParams(window.location.search).get("token");

  if (token) {
    try {
      const response = await authService.verifyEmail(token);
      localStorage.removeItem("accessToken");
      if (typeof response === "string") {
        window.history.replaceState(null, null, "/auth/confirm");
        return null;
      }
    } catch (error) {
      if (
        error.response?.data?.message === "The token has expired or is invalid"
      ) {
        return redirect("/auth/verification-expired");
      } else if (error.response?.data?.message === "Email already confirmed") {
        return redirect("/auth/already-verified");
      } else {
        return redirect("/auth/error");
      }
    }
  }
  return null;
};
