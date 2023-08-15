import { useFormikContext } from "formik";
import { Box } from "@chakra-ui/react";

const FrontEndValidationErrorMsg = ({ error, name }) => {
  const formik = useFormikContext();
  const passwordHint =
    "Use 8 or more characters, with a mix of uppercase, lowercase, numbers and symbols.";
  const passwordsNotMatch = "Those passwords didn't match. Please try again.";

  if (error && name === "matchingPassword" && error === passwordsNotMatch) {
    return <Box className="invalid-input">{error}</Box>;
  }
  if (error && name === "password") {
    if (error !== passwordsNotMatch) {
      return <Box className="invalid-input">{error}</Box>;
    }
  }

  if (formik.touched[name] && formik.errors[name]) {
    return <Box className="invalid-input">{formik.errors[name]}</Box>;
  }

  if (name === "password") {
    return (
      <Box className="invalid-input" color={"#ACA1A6"} minHeight={"26px"}>
        {passwordHint}
      </Box>
    );
  }

  return <></>;
};

export default FrontEndValidationErrorMsg;
