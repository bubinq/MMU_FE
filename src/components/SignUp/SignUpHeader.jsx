import { Flex, Heading, Link, Text } from "@chakra-ui/react";

const SignUpHeader = () => {
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"0.3125rem"}
      alignSelf={"stretch"}
    >
      <Heading>Sign up</Heading>
      <Text
        color={"#200017"}
        // fontFamily={"Inter"} //TODO needs to be added
        fontSize={"1rem"}
        fontStyle={"400"}
        lineHeight={"1.5rem"}
        letterSpacing={"0.00938rem"}
      >
        Already have an account?{" "}
        <Link
            color={"#c34723"}
            textDecoration={"underline"}>
          Login
        </Link>
      </Text>
    </Flex>
  );
};

export default SignUpHeader;
