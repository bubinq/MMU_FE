import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TABLET_DEVICES_RES } from "../constants";
import { shouldNavShow } from "../utils";
import Logo from "./Logo";
import MenuList from "./MenuList";
import Buttons from "./Buttons";
import useWindowResize from "../hooks/useWindowResize";
import useWindowScroll from "../hooks/useWindowScroll";
import useAuth from "../contexts/AuthContext";
import NavModal from "./NavModal";

const Navbar = () => {
  const { width } = useWindowResize();
  const { scroll, prevScroll } = useWindowScroll();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { user } = useAuth();

  const scrollDown = scroll - prevScroll.current;

  const handleMenuClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };
  return (
    <Flex
      as={motion.nav}
      animate={shouldNavShow(scrollDown, isMenuOpened)}
      transition="0.1s"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      px={["23px", "46px", "12px"]}
      py={"8px"}
      bg={"yellow.300"}
      zIndex={30}
      position={"fixed"}
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
