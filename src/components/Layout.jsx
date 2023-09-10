import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { AppointmentsProvider } from "../contexts/AppointmentsContext";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Flex as={"main"} bg={"yellow.100"}>
        <AppointmentsProvider>
          <Outlet />
        </AppointmentsProvider>
      </Flex>
    </>
  );
};

export default Layout;
