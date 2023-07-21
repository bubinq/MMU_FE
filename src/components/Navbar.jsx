import { NavLink } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { TABLET_DEVICES_RES } from "../constants";
import Logo from "./Logo";
import MenuList from "./MenuList";
import Buttons from "./Buttons";
import useWindowResize from "../hooks/useWindowResize";
import NavModal from "./NavModal";
import { useState } from "react";
import useAuth from "../contexts/AuthContext";

const Navbar = () => {
  const { width } = useWindowResize();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { user } = useAuth();

  const handleMenuClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      px={["23px", "46px", "12px"]}
      py={"8px"}
      bg={"yellow.300"}
    >
      <NavLink to="/">
        <Logo />
      </NavLink>
      <MenuList
        width={width}
        handleMenuClick={handleMenuClick}
        isMenuOpened={isMenuOpened}
      />
      {width > TABLET_DEVICES_RES ? (
        <>
          {user.name ? (
            <Buttons type={"logout"} text={"Log out"} />
          ) : (
            <Flex gap={6}>
              <Buttons type={"login"} text={"Login"} />
              <Buttons type={"signup"} text={"Sign Up"} />
            </Flex>
          )}
        </>
      ) : (
        <>
          {isMenuOpened && (
            <NavModal
              isMenuOpened={isMenuOpened}
              handleMenuClick={handleMenuClick}
            />
          )}
        </>
      )}
    </Flex>
  );
};

export default Navbar;
