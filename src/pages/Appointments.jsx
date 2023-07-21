import { Flex, Heading } from "@chakra-ui/react";

const Appointments = () => {
  return (
    <Flex as={"section"} w={["75%", "85%","95%"]} mx={"auto"} minH={"650px"}>
      <Heading color={"blue.900"} mt={"55px"}>Appointments</Heading>
    </Flex>
  );
};

export default Appointments;
