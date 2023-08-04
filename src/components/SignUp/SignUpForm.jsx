import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";

const SignUpForm = () => {
  return (
    <Flex
      width={"100%"}
      flexDirection={"column"}
      alignItems={"flex-start"}
      gap={"2.25rem"}
    >
      <Flex
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"0.315rem"}
        alignSelf={"stretch"}
      >
        <Text
          color={"var(--licorice, #200017)"}
          // fontFamily={"Inter"} //TODO
          fontSize={"1rem"} //TODO Set to 1rem instead 0.875rem
          fontStyle={"normal"}
          fontWeight={"700"}
          lineHeight={"normal"}
        >
          Email address *
        </Text>
        <Input
          type={"text"}
          padding={"0.625rem"}
          alignItem={"flex-start"}
          alignSelf={"stretch"}
          borderRadius={"0.3125rem"}
          border={"2px solid #d9af0e"}
          background={"#FFF"}
        />
      </Flex>
      <Flex
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"0.315rem"}
        alignSelf={"stretch"}
      >
        <Text
          color={"var(--licorice, #200017)"}
          // fontFamily={"Inter"} //TODO
          fontSize={"1rem"} //TODO Set to 1rem instead 0.875rem
          fontStyle={"normal"}
          fontWeight={"700"}
          lineHeight={"normal"}
        >
          First Name *
        </Text>
        <Input
          type={"text"}
          padding={"0.625rem"}
          alignItem={"flex-start"}
          alignSelf={"stretch"}
          borderRadius={"0.3125rem"}
          border={"2px solid #d9af0e"}
          background={"#FFF"}
        />
      </Flex>
      <Flex
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"0.315rem"}
        alignSelf={"stretch"}
      >
        <Text
          color={"var(--licorice, #200017)"}
          // fontFamily={"Inter"} //TODO
          fontSize={"1rem"} //TODO Set to 1rem instead 0.875rem
          fontStyle={"normal"}
          fontWeight={"700"}
          lineHeight={"normal"}
        >
          Last Name *
        </Text>
        <Input
          type={"text"}
          padding={"0.625rem"}
          alignItem={"flex-start"}
          alignSelf={"stretch"}
          borderRadius={"0.3125rem"}
          border={"2px solid #d9af0e"}
          background={"#FFF"}
        />
      </Flex>
      <Flex
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"0.315rem"}
        alignSelf={"stretch"}
      >
        <Text
          color={"var(--licorice, #200017)"}
          // fontFamily={"Inter"} //TODO
          fontSize={"1rem"} //TODO Set to 1rem instead 0.875rem
          fontStyle={"normal"}
          fontWeight={"700"}
          lineHeight={"normal"}
        >
          Password *
        </Text>
        <Input
          type={"password"}
          padding={"0.625rem"}
          alignItem={"flex-start"}
          alignSelf={"stretch"}
          borderRadius={"0.3125rem"}
          border={"2px solid #d9af0e"}
          background={"#FFF"}
        />
      </Flex>
      <Flex
        flexDirection={"column"}
        alignItems={"flex-start"}
        gap={"0.315rem"}
        alignSelf={"stretch"}
      >
        <Text
          color={"var(--licorice, #200017)"}
          // fontFamily={"Inter"} //TODO
          fontSize={"1rem"} //TODO Set to 1rem instead 0.875rem
          fontStyle={"normal"}
          fontWeight={"700"}
          lineHeight={"normal"}
        >
          Confirm Password *
        </Text>
        <Input
          type={"password"}
          padding={"0.625rem"}
          alignItem={"flex-start"}
          alignSelf={"stretch"}
          borderRadius={"0.3125rem"}
          border={"2px solid #d9af0e"}
          background={"#FFF"}
        />
      </Flex>
      <Button
        variant={"signup"}
        width={"100%"}
        padding={"0.625rem 8.6875rem"}
        textAlign={"center"}
        fontSize={"1rem"}
        // fontFamily={"Inter"} //TODO Again, needs to be imported
        fontStyle={"normal"}
        fontWeight={"700"}
        lineHeight={"1.5rem"}
        letterSpacing={"0.00938rem"}
      >
        Sign up
      </Button>
    </Flex>
  );
};

export default SignUpForm;
