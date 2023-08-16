import { Field, useFormikContext } from "formik";
import { Box, Flex, FormLabel } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const TemplateInput = ({ type, name, label, placeholder = "", error }) => {
  const [isVisible, setIsVisible] = useState(false);
  const formik = useFormikContext();
  const passwordHint =
    "Use 8 or more characters, with a mix of uppercase, lowercase, numbers and symbols.";

  return (
    <Flex
      flexDirection={"column"}
      alignitems={"flex-start"}
      gap={"0.315rem"}
      alignself={"stretch"}
      w={"100%"}
    >
      <FormLabel
        color={"var(--licorice, #200017)"}
        fontSize={"1rem"}
        fontStyle={"normal"}
        fontWeight={"700"}
        lineHeight={"normal"}
        m={"0px"}
      >
        {label}
      </FormLabel>
      <Box position={type === "password" && "relative"}>
        <Field
          type={isVisible ? "text" : type}
          name={name}
          placeholder={placeholder}
          padding={"0.625rem"}
          alignitems={"flex-start"}
          alignself={"stretch"}
          borderradius={"0.3125rem"}
          value={formik.values[name]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.errors[name] && formik.touched[name]
              ? "input-errors-reg"
              : `input-fields-reg`
          }
        ></Field>
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
        {error && name === "password" ? (
          <Box className="invalid-input">{error}</Box>
        ) : formik.touched[name] && formik.errors[name] ? (
          <Box className="invalid-input">{formik.errors[name]}</Box>
        ) : (
          name === "password" && (
            <Box className="invalid-input" color={"#ACA1A6"} minHeight={"26px"}>
              {passwordHint}
            </Box>
          )
        )}
      </Box>
    </Flex>
  );
};

export default TemplateInput;
