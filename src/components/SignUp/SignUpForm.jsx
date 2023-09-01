import { Button, Spinner, Flex, Box, Text } from "@chakra-ui/react";
import { Form as FormikForm, Formik } from "formik";
import { validatePassword, signUpValidationSchema, signUpInitialValues } from "../../utils.js";
import TemplateInput from "./TemplateInput.jsx";
import authService from "../../services/auth/index.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpAgreements from "./SignUpAgreements.jsx";
import SignUpWithGoogle from "./SignUpWithGoogle.jsx";
import BackEndValidationErrorMSG from "./BackEndValidationErrorMSG.jsx";
import { AnimatePresence } from "framer-motion";

const SignUpForm = ({ serverError, setServerError, isAlertVisible }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSave = async (values) => {
    try {
      const validationError = await validatePassword(values, setError);
      if (!validationError && values.password === values.matchingPassword) {
        setIsLoading(true);
        authService
          .register(values)
          .then(() => {
            navigate("/auth/successful", { replace: true });
          })
          .catch((error) => {
            setIsLoading(false);
            setServerError(error.response.data);
          });
      }
    } catch (validationError) {
      // Handle validation error if needed
      setIsLoading(false);
      console.error(validationError);
    }
  };

  return (
    <Formik
      type="submit"
      initialValues={signUpInitialValues}
      enableReinitialize
      validationSchema={signUpValidationSchema}
      onSubmit={onSave}
    >
      {({ values }) => (
        <FormikForm className="formik-form">
          <TemplateInput
            type={"email"}
            name={"email"}
            label={"Email address *"}
            placeholder={"placeholder@email.com"}
          />
          <TemplateInput
            type={"text"}
            name={"firstName"}
            label={"First Name *"}
            placeholder={"First Name"}
          />
          <TemplateInput
            type={"text"}
            name={"lastName"}
            label={"Last Name *"}
            placeholder={"Last Name"}
          />
          <TemplateInput
            type={"password"}
            name={"password"}
            label={"Password *"}
            error={error}
          />
          <TemplateInput
            type={"password"}
            name={"matchingPassword"}
            label={"Confirm Password *"}
            error={error}
          />
          <SignUpAgreements />
          <Button
            type={"submit"}
            variant={"signup"}
            width={"100%"}
            padding={"0.625rem 8.6875rem"}
            textAlign={"center"}
            fontSize={"1rem"}
            fontStyle={"normal"}
            fontWeight={"700"}
            lineHeight={"1.5rem"}
            letterSpacing={"0.00938rem"}
            isDisabled={serverError || !values.isOver18}
            h={"2.75rem"}
            color={"blue.900"}
            borderRadius="5px"
            py={"10px"}
            transition={"0.2s all ease"}
            bg={"yellow.400"}
            _disabled={{ opacity: "40%", cursor: "not-allowed" }}
            _hover={{ bg: "red.300", color: "white" }}
          >
            {isLoading ? (
              <Spinner thickness="4px" speed="0.65s" color="white" size="lg" />
            ) : (
              "Sign up"
            )}
          </Button>
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
        </FormikForm>
      )}
    </Formik>
  );
};

export default SignUpForm;
