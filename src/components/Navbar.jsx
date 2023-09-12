import { NavLink } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { shouldNavShow } from "../utils";
import useWindowBreakpoints from "../hooks/useWindowBreakpoints";
import { useWindowScroll } from "../hooks/useWindowScroll";
import Logo from "./Logo";
import VerifyEmailAlert from "./VerifyEmailAlert";
import MenuList from "./MenuList";
import Buttons from "./Buttons";
import useAuth from "../contexts/AuthContext";
import NavModal from "./NavModal";

const Navbar = () => {
  const steps = useWindowBreakpoints({ tablet: 768, desktop: 997 });
  const { scroll, prevScroll } = useWindowScroll();
  const { user, isMenuOpened, verifyMessage } = useAuth();

  const scrollDown = scroll - prevScroll.current;
  const animation = shouldNavShow(scrollDown, isMenuOpened);
  return (
    <Flex
      as={motion.nav}
      animate={animation.nav}
      transition="0.05s"
      align="center"
      justify="space-between"
      w="100%"
      px={["calc(12.3%)", "calc(7.3%)", "calc(2.5%)"]}
      py={"8px"}
      bg={"yellow.300"}
      zIndex={30}
      position={"fixed"}
      shadow={"md"}
    >
      <NavLink to="/">
        <Logo />
      </NavLink>
      <MenuList steps={steps} />
      {steps > 2 ? (
        <>
          {user.accessToken ? (
            <Buttons type={"logout"} text={"Log out"} />
          ) : (
            <Flex gap={6}>
              <Buttons type={"login"} text={"Login"} />
              <Buttons type={"signup"} text={"Sign Up"} />
            </Flex>
          )}
        </>
      ) : (
        <>{isMenuOpened && <NavModal />}</>
      )}

      <AnimatePresence>
        {verifyMessage && <VerifyEmailAlert animation={animation.message} />}
      </AnimatePresence>
    </Flex>
  );
};

export default Navbar;
