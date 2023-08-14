import logo from "../assets/logo.png"
import { Flex, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Flex align="center" gap={"6px"}>
      <Image as={motion.img} alt="Logo" src={logo} whileHover={{rotate: 180}}/>
      <Text fontSize={"2xl"} color={"blue.900"} fontWeight={700}>DocConnect</Text>
    </Flex>
  );
};

export default Logo;
