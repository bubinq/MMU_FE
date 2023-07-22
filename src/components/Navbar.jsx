import { NavLink } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { TABLET_DEVICES_RES } from "../constants";
import Logo from "./Logo";
import MenuList from "./MenuList";
import Buttons from "./Buttons";
import useWindowResize from "../hooks/useWindowResize";
import NavModal from "./NavModal";
import { useState } from "react";
import useAuth from "../contexts/AuthContext";
import useWindowScroll from "../hooks/useWindowScroll";

const Navbar = () => {
  const { width } = useWindowResize();
  const { scroll, prevScroll } = useWindowScroll();
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { user } = useAuth();

  const isScrollingDown = scroll - prevScroll.current;

  console.log("Scroll is", scroll);
  console.log("PrevScroll is", prevScroll.current);

  const handleMenuClick = () => {
    setIsMenuOpened(!isMenuOpened);
  };
  return (
    <Flex
      as={motion.nav}
      animate={
        isScrollingDown > 0
          ? { top: "-8%" }
          : isScrollingDown < 0 && { top: "0%" }
      }
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
