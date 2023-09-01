import { Flex } from "@chakra-ui/react";
import SignUpHeader from "../components/SignUp/SignUpHeader.jsx";
import SignUpForm from "../components/SignUp/SignUpForm.jsx";
import { useState } from "react";
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
          width={["316px", "30.0625rem"]}
          padding={[
            "1.5rem 2rem",
            "2.4375rem 4.3125rem",
            "2.4375rem 4.3125rem",
          ]}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={"1.875rem"}
          bg={["rgba(255, 255, 253, 0.8)", "#FFFFFD"]}
          borderRadius={"0.9375rem"}
          zIndex={"1"}
          mt={"100px"}
          position={"relative"}
          boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
        >
          <SignUpHeader />
          <SignUpForm
            serverError={serverError}
            setServerError={setServerError}
            isAlertVisible={isAlertVisible}
          />
        </Flex>
      )}
    </Flex>
  );
};

export default Register;
