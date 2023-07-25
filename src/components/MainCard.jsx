import { Card, CardBody, Image, Heading, Box, Flex } from "@chakra-ui/react";

const MainCard = ({ title, specialty, rating, location }) => {
  return (
    <Card
      maxW="410px"
      minH="420px"
      borderRadius={"5%"}
      boxShadow={"0px 2px 6px 1px rgba(0,0,0,0.75);"}
      overflow={"hidden"}
    >
      <CardBody padding={0}>
        <Image
          h={specialty ? "75%" : "90%"}
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt={title}
          borderRadius="5%"
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
        <Flex justify={"space-between"} paddingX={specialty ? "14px" : ""}>
          <Flex
            pos={"relative"}
            direction={"column"}
            paddingLeft={"15px"}
            zIndex={10}
          >
            <Heading size="lg">
              {title}
            </Heading>
            {specialty}
            {location}
          </Flex>
          <Flex paddingRight={"15px"} zIndex={"10"}>
            {rating}
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MainCard;
