import { Flex, Image } from "@chakra-ui/react";
import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";

const Arrow = ({ direction }) => {
  return (
    <Flex p={"0.625rem"} bg={"yellow.400"} alignItems={"center"} cursor={"pointer"}>
      <Image
        src={direction === "right" ? arrowRight : arrowLeft}
        alt="Navigation arrows"
      />
    </Flex>
  );
};

export default Arrow;
