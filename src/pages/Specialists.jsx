import { Flex, Heading } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Specialists = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <Flex as={"section"} w={["75%", "85%", "95%"]} mx={"auto"} minH={"650px"}>
      <Heading variant={"main"}>Specialists</Heading>
    </Flex>
  );
};

export default Specialists;
