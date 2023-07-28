import { Link, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";

const Error = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Flex
        as={"section"}
        align={"center"}
        direction={"column"}
        w={["75%", "85%", "95%"]}
        gap={5}
        mx={"auto"}
      >
        <Heading variant={"main"}>Oops!</Heading>
        <Text textAlign={"center"}>Sorry, an unexpected error has occurred.</Text>
        <Heading size={"md"} textAlign={"center"} color={"tomato"}>
          <i>{error.statusText || error.message}</i>
        </Heading>
        <Button variant={"signup"} as={Link} to="/">Return Home</Button>
      </Flex>
    </>
  );
};

export default Error;
