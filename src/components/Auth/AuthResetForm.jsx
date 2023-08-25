import { Flex, Box, Button, Spinner, Heading } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TemplateInput from "../SignUp/TemplateInput";
import { passwordInitial, passwordSchema, validatePassword } from "../../utils";
import authService from "../../services/auth";

export default function AuthResetForm() {
  const goTo = useNavigate();
  const token = new URLSearchParams(window.location.search).get("token");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleResetPassword = async (values) => {
    try {
      const validationError = await validatePassword(values, setError);
      if (!validationError && values.password === values.matchingPassword) {
        setIsLoading(true);
        await authService.changePassword(token, {
          password: values.password,
          matchingPassword: values.matchingPassword,
        });
        goTo("/auth/reset-success", { replace: true });
      }
    } catch (error) {
      sessionStorage.setItem("token", JSON.stringify(token));
      if (
        error.response?.data?.message === "The token has expired or is invalid"
      ) {
        goTo("/auth/reset-error");
      }
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
        <Heading fontWeight={"700"} fontSize={"24px"} mb={"5px"}>
          Reset Password
        </Heading>
      </Box>

      <Formik
        initialValues={passwordInitial}
        validationSchema={passwordSchema}
        onSubmit={handleResetPassword}
      >
        {({ values }) => (
          <Form className="forgot-form">
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
            <Button
              type="submit"
              aria-label="reset-submit"
              h={"44px"}
              fontSize={"16px"}
              color={"blue.900"}
              borderRadius="5px"
              py={"10px"}
              mt={"-10px"}
              transition={"0.2s all ease"}
              bg={!values.email ? "rgba(244, 180, 0, 0.6)" : "yellow.400"}
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
