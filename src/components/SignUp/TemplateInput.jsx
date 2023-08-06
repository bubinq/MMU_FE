import { useFormikContext } from "formik";
import { Box, Flex, FormLabel, Input } from "@chakra-ui/react";

const TemplateInput = ({ type, name, label, placeholder = "", error }) => {
  const formik = useFormikContext();
  const passwordHint =
    "Use 8 or more characters, with a mix of uppercase, lowercase, numbers and symbols.";

  // console.log(formik.errors);
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"0.315rem"}
      alignSelf={"stretch"}
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
      <Input
        type={type}
        name={name}
        width={"100%"}
        placeholder={placeholder}
        padding={"0.625rem"}
        alignItems={"flex-start"}
        alignSelf={"stretch"}
        borderRadius={"0.3125rem"}
        border={"2px solid #d9af0e"}
        background={"#FFF"}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <Box minHeight={name === "password" ? "26px" : "1rem"}>
        {error && name === "password" ? (
          <Box className="invalid-input">{error}</Box>
        ) : formik.touched[name] && formik.errors[name] ? (
          <Box className="invalid-input">{formik.errors[name]}</Box>
        ) : (
          name === "password" && (
            <Box className="invalid-input" color={"#ACA1A6"}>
              {passwordHint}
            </Box>
          )
        )}
      </Box>
    </Flex>
  );
};

export default TemplateInput;
