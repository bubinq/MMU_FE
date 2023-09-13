import { Link, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Flex, Button, Image, Text, Heading } from "@chakra-ui/react";
import oops from "../assets/oops.avif";

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
        <Text textAlign={"center"}>
          Sorry, an unexpected error has occurred.
        </Text>
        <Heading size={"md"} textAlign={"center"} color={"tomato"}>
          <i>{error.statusText || error.message}</i>
        </Heading>

        {/* <Image w={"420px"} mt={"100px"} src={oops} alt="Oops error!"/> */}
        <Button variant={"signup"} as={Link} to="/">
          Return Home
        </Button>
      </Flex>
    </>
  );
};

export default Error;
