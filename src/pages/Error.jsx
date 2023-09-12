import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Flex, Button, Image } from "@chakra-ui/react";
import oops from "../assets/oops.avif"

const Error = () => {

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
        <Image w={"420px"} mt={"100px"} src={oops} alt="Oops error!"/>
        <Button variant={"signup"} as={Link} to="/">Return Home</Button>
      </Flex>
    </>
  );
};

export default Error;
