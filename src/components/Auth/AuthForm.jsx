import { Flex, Box, Text, FormLabel, Button, Spinner } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAlert from "../../hooks/useAlert";
import AuthAlert from "./AuthAlert";
import authService from "../../services/auth";
import { AnimatePresence } from "framer-motion";

const initialVals = {
  email: "",
};
const validationSchema = object({
  email: string().email("Please enter a valid email address."),
});

export default function AuthForm() {
  const goTo = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [serverError, setServerError] = useState("");
  const { isAlertVisible } = useAlert(serverError, setServerError);

  const handleResetPassword = async (values) => {
    setIsLoading(true);
    try {
      await authService.forgottenPassword({ email: values.email });
      goTo("/auth/forgot-confirm", {
        replace: true,
        state: { email: values.email },
      });
    } catch (error) {
      setIsLoading(false);
      if (error.response?.data?.email) {
        return setServerError(error.response?.data?.email);
      }
      return setServerError(error.response?.data?.message);
    }
  };
  return (
    <Flex
      as={"article"}
      mt={"15.4425rem"}
      w={["24rem", "30.0625rem"]}
      p={"2.4375rem 4.3125rem"}
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
      <Box>
        <Text fontWeight={"700"} fontSize={"24px"} mb={"5px"}>
          {" "}
          Forgot Password
        </Text>

        <Text
          fontSize={"14px"}
          letterSpacing={"0.15px"}
          lineHeight={"24px"}
          textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
        >
          Please enter your email address. You will receive a link to create a
          new password via email.
        </Text>
      </Box>
      <AnimatePresence>
        {isAlertVisible && <AuthAlert serverError={serverError} />}
      </AnimatePresence>
      <Formik
        initialValues={initialVals}
        validationSchema={validationSchema}
        onSubmit={handleResetPassword}
      >
        {({ errors, touched, values }) => (
          <Form className="forgot-form">
            <FormLabel
              fontSize={["14px", "16px"]}
              fontWeight={700}
              margin={0}
              pos={"relative"}
            >
              Email Address &#42;
              <Field
                type="email"
                name="email"
                aria-label="reset-field"
                placeholder="placeholder@email.com"
                className={
                  errors.email && touched.email
                    ? "input-errors"
                    : `input-fields`
                }
              />
              <ErrorMessage
                aria-label="email-error"
                name="email"
                component="span"
                className="error-message"
              />
            </FormLabel>

            <Button
              type="submit"
              aria-label="reset-submit"
              h={"44px"}
              fontSize={"16px"}
              color={"blue.900"}
              borderRadius="5px"
              isDisabled={!values.email || isLoading}
              py={"10px"}
              mt={"5px"}
              transition={"0.2s all ease"}
              bg={!values.email || isLoading ? "rgba(244, 180, 0, 0.6)" : "yellow.400"}
              _hover={{ bg: "red.300", color: "white" }}
            >
              {isLoading ? (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  color="white"
                  size="lg"
                />
              ) : (
                "Submit"
              )}
            </Button>
          </Form>
        )}
      </Formik>
    </Flex>
  );
}
