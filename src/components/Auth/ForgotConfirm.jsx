import { Flex, Box, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

export default function ForgotConfirm() {
  const { state } = useLocation();
  return (
    <Flex
      mt={"15.4425rem"}
      w={["24rem", "30.0625rem"]}
      p={"2.4375rem 3rem"}
      flexDirection={"column"}
      gap={"1.875rem"}
      borderRadius={"0.9375rem"}
      backgroundColor={"#FFFFFD"}
      boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
      marginX={"auto"}
      fontSize={"1rem"}
      zIndex={"1"}
      position={"relative"}
    >
      <Box fontWeight={"600"} fontSize={"24px"}>
        Forgot Password
      </Box>
      <Text fontSize={"16px"}>
        If a matching account was found an email was sent to <strong>{state?.email}</strong> to
        allow you to reset your password.
      </Text>
    </Flex>
  );
}
