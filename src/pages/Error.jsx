import { Link, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Flex, Heading, Text } from "@chakra-ui/react";

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
        <Text>Sorry, an unexpected error has occurred.</Text>
        <Text>
          <i>{error.statusText || error.message}</i>
        </Text>
        <Link to="/">Return Home</Link>
      </Flex>
    </>
  );
};

export default Error;
