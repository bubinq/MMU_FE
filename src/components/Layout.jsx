import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Flex as={"main"} bg={"yellow.100"} height={"100vh"}>
        <Outlet />
      </Flex>
    </>
  );
};

export default Layout;
