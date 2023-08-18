import { Box, Flex, Text } from "@chakra-ui/react";
import SignUpHeader from "../components/SignUp/SignUpHeader.jsx";
import SignUpForm from "../components/SignUp/SignUpForm.jsx";
import SignUpWithGoogle from "../components/SignUp/SignUpWithGoogle.jsx";
import { useState } from "react";
import BackEndValidationErrorMSG from "../components/SignUp/BackEndValidationErrorMSG.jsx";
import { AnimatePresence } from "framer-motion";
import useCanvasWaves from "../hooks/useCanvasWaves.jsx";
import useSpinner from "../hooks/useSpinner.jsx";
import Spinner from "../components/Spinner.jsx";
import useAlert from "../hooks/useAlert.jsx";

const Register = () => {
  const ref = useCanvasWaves();
  const isLoading = useSpinner();

  const [serverError, setServerError] = useState(null);
  const { isAlertVisible } = useAlert(serverError, setServerError);

  return (
    <Flex
      as={"section"}
      w={"100%"}
      mx={"auto"}
      minH={"100vh"}
      position={"relative"}
      ref={ref}
      justifyContent={"center"}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <Flex
          as={"article"}
          width={["316px", "30.0625rem", "30.0625rem"]}
          maxHeight={"56rem"}
          mt={"100px"}
          padding={[
            "1.5rem 2rem",
            "2.4375rem 4.3125rem",
            "2.4375rem 4.3125rem",
          ]}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={"1.875rem"}
          backgroundColor={"var(--white, #FFFFFD)"}
          borderRadius={"0.9375rem"}
          zIndex={"1"}
          position={"relative"}
          boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
        >
          <SignUpHeader />
          <SignUpForm
            serverError={serverError}
            setServerError={setServerError}
          />
          <Flex
            textAlign={"center"}
            alignItems={"center"}
            width={"100%"}
            justifyContent={"center"}
          >
            <Box h={"2px"} w={"44%"} bg={"black"} />
            <Text as={"span"} w={"2.625rem"} fontSize={"1rem"}>
              {" "}
              OR{" "}
            </Text>
            <Box h={"2px"} w={"44%"} bg={"black"} />
          </Flex>
          <SignUpWithGoogle />
          <AnimatePresence>
            {isAlertVisible && (
              <BackEndValidationErrorMSG serverError={serverError} />
            )}
          </AnimatePresence>
        </Flex>
      )}
    </Flex>
  );
};

export default Register;
