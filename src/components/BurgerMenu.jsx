import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useAuth from "../contexts/AuthContext";

const BurgerMenu = () => {
  const { handleMenuClick, isMenuOpened } = useAuth();
  return (
    <Flex
      aria-label="burger-menu"
      onClick={handleMenuClick}
      as={motion.div}
      w={"50px"}
      h={"50px"}
      bg={"yellow.900"}
      flexDirection={"column"}
      gap={2}
      align="center"
      justify="center"
      rounded={"full"}
      shadow={"md"}
      _hover={{
        ring: "4",
      }}
      zIndex={70}
      transition="0.2s linear"
      cursor={"pointer"}
    >
      {isMenuOpened ? (
        <>
          <Flex
            as={motion.div}
            position={"absolute"}
            animate={{ rotate: "45deg" }}
            w={"20px"}
            h={"2px"}
            bg={"black"}
          />
          <Flex
            as={motion.div}
            position={"absolute"}
            animate={{ rotate: "-45deg" }}
            w={"20px"}
            h={"2px"}
            bg={"black"}
          />
        </>
      ) : (
        <>
          <Flex w={"20px"} h={"2px"} bg={"black"} />
          <Flex w={"20px"} h={"2px"} bg={"black"} />
          <Flex w={"20px"} h={"2px"} bg={"black"} />
        </>
      )}
    </Flex>
  );
};

export default BurgerMenu;
