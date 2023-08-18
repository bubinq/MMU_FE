import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { FormLabel, Button, Link, Spinner } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { BASE_API } from "../../constants";
import { useState } from "react";
import useAuth from "../../contexts/AuthContext";
import axios from "axios";

const initialVals = {
  email: "",
  password: "",
};
const validationSchema = object({
  email: string()
    .email("Please enter a valid email address.")
    .required("Please enter your email address."),
  password: string().required("Please enter your password."),
});

const LoginForm = ({ setServerError }) => {
  const { setUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const goTo = useNavigate();

  const handleLogin = async (values, { setSubmitting }) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_API}/auth/signin`, {
        email: values.email,
        password: values.password,
      });

      localStorage.setItem("accessToken", response.data.accessToken);
      setUser({ accessToken: response.data.accessToken });
      setIsLoading(false);

      goTo("/", { replace: true });
    } catch (error) {
      setServerError(error.response.data.message);
      setIsLoading(false);
    }

    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={initialVals}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {({ errors, touched, values }) => (
        <Form className="formik-form">
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
              aria-label="email-field"
              placeholder="placeholder@email.com"
              className={
                errors.email && touched.email ? "input-errors" : `input-fields`
              }
            />
            <ErrorMessage
              aria-label="email-error"
              name="email"
              component="span"
              className="error-message"
            />
          </FormLabel>

          <FormLabel
            fontSize={["14px", "16px"]}
            fontWeight={700}
            m={0}
            mt={"10px"}
            pos={"relative"}
          >
            Password &#42;
            <Field
              type="password"
              name="password"
              aria-label="password-field"
              className={
                errors.password && touched.password
                  ? "input-errors"
                  : `input-fields`
              }
            />
            <ErrorMessage
              aria-label="password-error"
              name="password"
              component="span"
              className="error-message"
            />
          </FormLabel>

          <Link
            mt={"16px"}
            ml={"auto"}
            textDecoration={"underline"}
            fontSize={["14px", "16px"]}
            as={NavLink}
            fontWeight={700}
            color={"blue.900"}
            w={"fit-content"}
          >
            Forgot password?
          </Link>
          <Button
            type="submit"
            aria-label="login-submit"
            disabled={isLoading}
            h={"44px"}
            fontSize={"16px"}
            color={"blue.900"}
            borderRadius="5px"
            py={"10px"}
            transition={"0.2s all ease"}
            bg={
              !values.email || !values.password
                ? "rgba(244, 180, 0, 0.6)"
                : "yellow.400"
            }
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
              "Login"
            )}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
