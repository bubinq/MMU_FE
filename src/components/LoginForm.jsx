import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { FormLabel, Button, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

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

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialVals}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="formik-form">
          <FormLabel fontSize={"16px"} fontWeight={700} margin={0}>
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

          <FormLabel fontSize={"16px"} fontWeight={700} m={0} mt={"10px"}>
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
            fontSize={"16px"}
            as={NavLink}
            color={"yellow.500"}
            w={"fit-content"}
          >
            Forgot password?
          </Link>
          <Button
            type="submit"
            disabled={isSubmitting}
            h={"44px"}
            fontSize={"16px"}
            color={"white"}
            borderRadius="5px"
            py={"10px"}
            bg={"red.500"}
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
