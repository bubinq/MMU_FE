import { Flex, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex as={"section"} w={["75%", "85%","95%"]} mx={"auto"} minH={"3650px"}>
      <Heading color={"blue.900"} mt={"55px"}>Specialties</Heading>
    </Flex>
  );
};

export default Home;
