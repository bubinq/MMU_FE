import { Card, CardBody, Image, Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MainCard = ({ title, specialty, rating, location, img }) => {
  return (
    <Card
      maxW="410px"
      minH="420px"
      borderRadius={"5%"}
      boxShadow={"0px 2px 6px 1px rgba(0,0,0,0.75);"}
      overflow={"hidden"}
      cursor={"pointer"}
      transition={"0.2s all"}
      _hover={{ ring: 4, ringColor: "blue.900"}}
    >
      <CardBody padding={0}>
        <Image
          as={motion.img}
          transition={"0.2s all"}
          whileHover={{scale: 1.05}}
          h={specialty ? "75%" : "90%"}
          w={"100%"}
          objectFit={"cover"}
          src={img}
          alt={title}
          borderRadius="5%"
          pos={"absolute"}
        />{" "}
        <Box
          pos={"absolute"}
          h={"4%"}
          w={"94.1%"}
          left={"3%"}
          top={specialty ? "75%" : "92%"}
          bg={"white"}
          boxShadow={"0px 0px 20px 30px rgba(255, 255, 255, 1)"}
          overflow={"hidden"}
        ></Box>
        <Flex
          justify={"space-between"}
          paddingX={specialty ? "14px" : ""}
          position={"absolute"}
          top={"89%"}
        >
          <Flex
            pos={"relative"}
            direction={"column"}
            paddingLeft={"15px"}
            zIndex={10}
          >
            {title}
            {specialty}
            {location}
          </Flex>
          {rating}
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MainCard;
