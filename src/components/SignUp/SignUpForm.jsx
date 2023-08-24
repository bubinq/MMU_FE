import { Button, Spinner } from "@chakra-ui/react";
import { Form as FormikForm, Formik } from "formik";
import * as Yup from "yup";
import TemplateInput from "./TemplateInput.jsx";
import authService from "../../services/auth/index.js";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { validatePassword } from "../../utils.js";
import { AgreementsContext } from "../../contexts/AgreementsContext.jsx";
import SignUpAgreements from "./SignUpAgreements.jsx";

const SignUpForm = ({ serverError, setServerError }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(AgreementsContext);

  const initialValues = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    matchingPassword: "",
    isOver18: true
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
          isDisabled={serverError || !context.isAgreed}
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
      </FormikForm>
    </Formik>
  );
};

export default SignUpForm;
