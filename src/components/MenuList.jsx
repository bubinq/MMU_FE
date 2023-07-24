import { Flex } from "@chakra-ui/react";
import { TABLET_DEVICES_RES } from "../constants";
import MenuItem from "./MenuItem";
import BurgerMenu from "./BurgerMenu";
import useAuth from "../contexts/AuthContext";

const MenuList = ({ width, handleMenuClick, isMenuOpened }) => {
  const { user } = useAuth();
  return (
    <Flex align="center" gap={[4, 8]}>
      {width > TABLET_DEVICES_RES ? (
        <>
          <MenuItem to={"/"}>Specialties</MenuItem>
          <MenuItem to={"/specialists"}>Specialists</MenuItem>
          {user.name && <MenuItem to={"/appointments"}>Appointments</MenuItem>}
        </>
      ) : (
        <BurgerMenu
          handleMenuClick={handleMenuClick}
          isMenuOpened={isMenuOpened}
        />
      )}
    </Flex>
  );
};

export default MenuList;
