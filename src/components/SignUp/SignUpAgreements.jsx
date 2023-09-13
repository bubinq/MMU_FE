import { useState } from "react";
import {
  CheckboxGroup,
  Stack,
  Checkbox,
  Flex,
  Tooltip,
  Link as ChakraLink,
  Text,
  Box,
} from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { QuestionIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const SignUpAgreements = () => {
  const [isLabelOpen, setIsLabelOpen] = useState(false);
  const formik = useFormikContext();
  return (
    <>
      <CheckboxGroup colorScheme="yellow">
        <Stack spacing={[1, 5]} direction={"column"}>
          <Flex align={"center"}>
            <Checkbox
              mr={[0, "2"]}
              name="isOver18"
              checked={formik.values["isOver18"]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              I confirm that I am at least 18 years old *
            </Checkbox>

            <Tooltip
              isOpen={isLabelOpen}
              label="To provide you with the best possible care and respect your autonomy, we require users to be above 18 years old for booking doctor appointments. This ensures you can make informed decisions about your health. Thank you for understanding!"
              fontSize="md"
              lineHeight={"1.5rem"}
              p={3}
            >
              <QuestionIcon
                onMouseEnter={() => setIsLabelOpen(true)}
                onMouseLeave={() => setIsLabelOpen(false)}
                onClick={() => setIsLabelOpen(!isLabelOpen)}
              />
            </Tooltip>
          </Flex>
        </Stack>
      </CheckboxGroup>
      <Box fontSize="md">
        <Text as="span">By clicking Sign Up, you agree to our</Text>
        <ChakraLink
          as={Link}
          ml="1"
          mr="1"
          color="blue.900"
          fontWeight={700}
          to={"/auth/user-agreement"}
        >
          User Agreement
        </ChakraLink>
        <Text as="span">and our</Text>
        <ChakraLink
          as={Link}
          ml="1"
          color="blue.900"
          fontWeight={700}
          to={"/auth/privacy-policy"}
        >
          Privacy Policy
        </ChakraLink>
      </Box>
    </>
  );
};

export default SignUpAgreements;
