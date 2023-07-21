import { Box, List } from "@chakra-ui/react";
import { motion } from "framer-motion";
import MenuItem from "./MenuItem";
import useAuth from "../contexts/AuthContext";

const NavModal = ({ isMenuOpened, handleMenuClick }) => {
  const { user } = useAuth();
  return (
    <Box
      as={motion.div}
      position={"fixed"}
      top={0}
      left={0}
      bg={"white"}
      opacity={"80%"}
      initial={{ width: "30%" }}
      animate={{ width: "100%" }}
      transition="0.2s ease"
    >
      <Box visibility={isMenuOpened ? "" : "hidden"}>
        <List
          display={"flex"}
          flexDirection={"column"}
          gap={10}
          h={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
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
        </List>
      </Box>
    </Box>
  );
};

export default NavModal;
