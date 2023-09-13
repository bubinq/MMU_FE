import { Link, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Flex, Button, Image, Heading } from "@chakra-ui/react";
import oops from "../assets/oops.avif";

const Error = () => {
  const error = useRouteError();
  console.log(error);
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
        <Heading variant={"main"} textAlign={"center"}>
          Sorry, an unexpected error has occurred.
        </Heading>
        <Heading size={"md"} textAlign={"center"} color={"tomato"} mb={0}>
          <i>{error.statusText || error.message}</i>
        </Heading>

        <Image w={"300px"} src={oops} alt="Oops error!"/>
        <Button variant={"signup"} as={Link} to="/">
          Return Home
        </Button>
      </Flex>
    </>
  );
};

export default Error;
