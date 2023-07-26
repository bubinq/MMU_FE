import { Box, List, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import useAuth from "../contexts/AuthContext";
import Buttons from "./Buttons";

const NavModal = ({ isMenuOpened, handleMenuClick }) => {
  const { user } = useAuth();
  return (
    <Box
      as={motion.div}
      aria-label="navigation-modal"
      position={"fixed"}
      top={0}
      left={0}
      bg={"yellow.100"}
      opacity={"95%"}
      initial={{ width: "60%" }}
      animate={{ width: "100%" }}
      transition="0.2s ease"
    >
      <Box visibility={isMenuOpened ? "" : "hidden"}>
        <List
          display={"flex"}
          flexDirection={"column"}
          gap={6}
          h={"100vh"}
          alignItems={"center"}
          mt={"7rem"}
        >
          <MenuItem handleMenuClick={handleMenuClick} to={"/"}>
            Specialties
          </MenuItem>
          <MenuItem handleMenuClick={handleMenuClick} to={"/specialists"}>
            Specialists
          </MenuItem>
          {user.name && (
            <MenuItem handleMenuClick={handleMenuClick} to={"/appointments"}>
              Appointments
            </MenuItem>
          )}
          <Box w={"60%"} mx={"auto"} my={3} h={"2px"} bg={"black"} />
          <>
            {user.name ? (
              <Buttons type={"logout"} text={"Log out"} />
            ) : (
              <Flex gap={6}>
                <Buttons type={"login"} text={"Login"} handleMenuClick={handleMenuClick} />
                <Buttons type={"signup"} text={"Sign Up"} handleMenuClick={handleMenuClick}/>
              </Flex>
            )}
          </>
        </List>
      </Box>
    </Box>
  );
};

export default NavModal;
