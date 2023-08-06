import { Box, Flex } from "@chakra-ui/react";

const SuccessfullyRegistered = () => {
  return (
    <Box w={["75%", "85%", "100%"]} mx={"auto"} minH={"100vh"}>
      <Flex mt={"9.125rem"} justifyContent={"center"}>
        Successfully Registered!
      </Flex>
    </Box>
  );
};

export default SuccessfullyRegistered;
