import { Button, Flex } from "@chakra-ui/react";
import { Form as FormikForm, Formik } from "formik";
import * as Yup from "yup";
import TemplateInput from "./TemplateInput.jsx";
import userService from "../../services/user/index.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const initialValues = {
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address.")
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Please enter a valid email address."
      )
      .required("Please enter an email address."),
    first_name: Yup.string()
      .required("Please enter a first name.")
      .max(50, "First name must be less than 50 characters long."),
    last_name: Yup.string()
      .required("Please enter a last name.")
      .max(50, "Last name must be less than 50 characters long."),
    password: Yup.string().required("Please enter a password."),
    confirmPassword: Yup.string().required("Please enter a password."),
  });

  const passwordSchema = Yup.object({
    password: Yup.string()
      .required("Please enter a password.")
      .min(8, "Password must be at least 8 characters long.")
      .max(100, "Password must be less than 100 characters long.")
      .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w]).*$/,
        "Your password must have at least 8 characters, with a mix of uppercase, lowercase, numbers and symbols."
      ),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Those passwords didn't match. Please try again."
    ),
  });

  const validatePassword = (values) => {
    return passwordSchema
      .validate(values, { abortEarly: false })
      .then(() => setError(null))
      .catch((err) => setError(err.errors[0]));
  };

  const onSave = (values) => {
    validatePassword(values).then((err) => console.log(err));

    if (!error) {
      const userData = {
        ...values,
        verified: true,
      };
      userService
        .register(userData)
        .then(() => {
          navigate("/register/successful", { replace: true });
        })
        .catch((error) => console.log(error));
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
      <FormikForm style={{width: "100%"}}>
        <Flex
          width={"100%"}
          flexDirection={"column"}
          alignItems={"flex-start"}
          gap={"1.25rem"}
        >
          <TemplateInput type={"email"} name={"email"} label={"Email address *"} placeholder={"placeholder@email.com"}/>
          <TemplateInput type={"text"} name={"first_name"} label={"First Name *"} placeholder={"First Name"}/>
          <TemplateInput type={"text"} name={"last_name"} label={"Last Name *"} placeholder={"Last Name"} />
          <TemplateInput type={"password"} name={"password"} label={"Password *"} error={error} />
          <TemplateInput type={"password"} name={"confirmPassword"} label={"Confirm Password *"} error={error} />
          <Button
            type={"submit"}
            variant={"signup"}
            width={"100%"}
            padding={"0.625rem 8.6875rem"}
            textAlign={"center"}
            fontSize={"1rem"}
            fontFamily={"Inter"} //TODO Again, needs to be imported
            fontStyle={"normal"}
            fontWeight={"700"}
            lineHeight={"1.5rem"}
            letterSpacing={"0.00938rem"}
          >
            Sign up
          </Button>
        </Flex>
      </FormikForm>
    </Formik>
  );
};

export default SignUpForm;
