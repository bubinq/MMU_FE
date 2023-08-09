import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { FormLabel, Button, Link } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
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
  const goTo = useNavigate();

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/signin",
        { email: values.email, password: values.password }
      );

      localStorage.setItem("accessToken", response.data.accessToken);
      setUser({ name: response.data.accessToken });
      goTo("/", { replace: true });
    } catch (error) {
      setServerError(error.response.data.message);
    }

    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={initialVals}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {({ isSubmitting, errors, touched, values }) => (
        <Form className="formik-form">
          <FormLabel
            fontSize={"16px"}
            fontWeight={700}
            margin={0}
            pos={"relative"}
          >
            Email Address &#42;
            <Field
              type="email"
              name="email"
              placeholder="placeholder@email.com"
              className={
                errors.email && touched.email ? "input-errors" : `input-fields`
              }
            />
            <ErrorMessage
              name="email"
              component="span"
              className="error-message"
            />
          </FormLabel>

          <FormLabel
            fontSize={"16px"}
            fontWeight={700}
            m={0}
            mt={"10px"}
            pos={"relative"}
          >
            Password &#42;
            <Field
              type="password"
              name="password"
              className={
                errors.password && touched.password
                  ? "input-errors"
                  : `input-fields`
              }
            />
            <ErrorMessage
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
            color={"yellow.500"}
            w={"fit-content"}
          >
            Forgot password?
          </Link>
          <Button
            type="submit"
            disabled={isSubmitting || (!errors.email && !errors.password)}
            h={"44px"}
            fontSize={"16px"}
            color={"white"}
            borderRadius="5px"
            py={"10px"}
            bg={
              !values.email || !values.password
                ? "rgba(229, 67, 53, 0.5)"
                : "red.500"
            }
            _hover={{ bg: "red.300" }}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
