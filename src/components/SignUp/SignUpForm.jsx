import { Button, Flex } from "@chakra-ui/react";
import { Form as FormikForm, Formik } from "formik";
import * as Yup from "yup";
import TemplateInput from "./TemplateInput.jsx";
import userService from "../../services/user/index.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ serverError, setServerError }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    matchingPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address.")
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/,
        "Please enter a valid email address."
      )
      .required("Please enter an email address."),
    firstName: Yup.string()
      .required("Please enter a first name.")
      .max(50, "First name must not exceed 50 characters.")
      .matches(/^[A-Za-z'-]{1,50}$/, "Please enter a valid name."),
    lastName: Yup.string()
      .required("Please enter a last name.")
      .max(50, "Last name must not exceed 50 characters.")
      .matches(/^[A-Za-z'-]{1,50}$/, "Please enter a valid name."),
    password: Yup.string().required("Please enter a password."),
    matchingPassword: Yup.string().required("Please enter a password."),
  });

  const passwordSchema = Yup.object({
    password: Yup.string()
      .required("Please enter a password.")
      .min(8, "Password must be at least 8 characters long.")
      .max(100, "Password must not exceed 100 characters.")
      .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w]).*$/,
        "Your password must have at least 8 characters, with a mix of uppercase, lowercase, numbers and symbols."
      ),
    matchingPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Those passwords didn't match. Please try again."
    ),
  });

  const validatePassword = async (values) => {
    try {
      await passwordSchema.validate(values, { abortEarly: false });
      setError(null);
      return null;
    } catch (err) {
      setError(err.errors[0]);
      return err.errors[0];
    }
  };

  const onSave = async (values) => {
    try {
      const validationError = await validatePassword(values);
      if (!validationError && values.password === values.matchingPassword) {
        userService
          .register(values)
          .then(() => {
            navigate("/register/successful", { replace: true });
          })
          .catch((error) => {
            setServerError(error.response.data);
          });
      }
    } catch (validationError) {
      // Handle validation error if needed
      console.error(validationError);
    }
  };

  return (
    <Formik
      type="submit"
      initialValues={initialValues}
      enableReinitialize
      validationSchema={validationSchema}
      onSubmit={onSave}
    >
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
          isDisabled={serverError}
          h={"2.75rem"}
          color={"blue.900"}
          borderRadius="5px"
          py={"10px"}
          transition={"0.2s all ease"}
          bg={"yellow.400"}
          _disabled={{ opacity: "40%" }}
          _hover={{ bg: "red.300", color: "white" }}
        >
          Sign up
        </Button>
      </FormikForm>
    </Formik>
  );
};

export default SignUpForm;
