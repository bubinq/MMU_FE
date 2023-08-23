import { Field, useFormikContext } from "formik";
import { Box, FormLabel } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import FrontEndValidationErrorMsg from "./FrontEndValidationErrorMsg.jsx";

const TemplateInput = ({ type, name, label, placeholder = "", error }) => {
  const [isVisible, setIsVisible] = useState(false);
  const formik = useFormikContext();

  return (
    <>
      <FormLabel
        display={"flex"}
        gap={"0.15rem"}
        flexDir={"column"}
        color={"var(--licorice, #200017)"}
        fontSize={"1rem"}
        fontWeight={700}
        m={0}
        position={"relative"}
      >
        {label}
        <Box position={type === "password" && "relative"}>
          <Field
            type={isVisible ? "text" : type}
            name={name}
            placeholder={placeholder}
            value={formik.values[name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors[name] && formik.touched[name]
                ? "input-errors-reg"
                : `input-fields-reg`
            }
          />
          {type === "password" && (
            <Box
              zIndex={"3"}
              _hover={{ cursor: "pointer" }}
              position={"absolute"}
              top={"4px"}
              right={"10px"}
              onClick={() => setIsVisible(!isVisible)}
            >
              <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
            </Box>
          )}
        </Box>
        <Box minHeight={"13px"}>
          <FrontEndValidationErrorMsg error={error} name={name} />
        </Box>
      </FormLabel>
    </>
  );
};

export default TemplateInput;
