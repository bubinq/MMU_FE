import { Flex } from "@chakra-ui/react";
import MenuItem from "./MenuItem";
import BurgerMenu from "./BurgerMenu";
import useAuth from "../contexts/AuthContext";

const MenuList = ({ steps }) => {
  const { user } = useAuth();
  return (
    <Flex align="center" ml={"30%"} gap={[4, 8]}>
      {steps > 2 ? (
        <>
          <MenuItem to={"/"}>Specialties</MenuItem>
          <MenuItem to={"/specialists"}>Specialists</MenuItem>
          {user.accessToken && (
            <MenuItem to={"/appointments"}>Appointments</MenuItem>
          )}
        </>
      ) : (
        <BurgerMenu />
      )}
    </Flex>
  );
};

export default MenuList;
