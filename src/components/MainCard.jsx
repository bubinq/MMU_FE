import { Card, CardBody, Image, Box, Flex, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../contexts/AuthContext";

const MainCard = ({ title, specialty, rating, location, img, source }) => {
  const { isScheduleOpened, setIsScheduleOpened } = useAuth();

  const toggleSchedule = (ev) => {
    ev.preventDefault();
    setIsScheduleOpened(!isScheduleOpened);
  };
  return (
    <Card
      as={"article"}
      maxW="410px"
      minH="480px"
      borderRadius={"5%"}
      boxShadow={"0px 2px 6px 1px rgba(0,0,0,0.75);"}
      overflow={"hidden"}
      cursor={"pointer"}
      transition={"0.2s all"}
      _hover={{ ring: 4, ringColor: "blue.900" }}
    >
      <CardBody padding={0}>
        <Image
          as={motion.img}
          transition={"0.2s all"}
          whileHover={{ scale: 1.05 }}
          h={specialty ? "65%" : "90%"}
          w={"100%"}
          objectFit={"cover"}
          src={img}
          alt={`${specialty ? "Doctor Profile" : "Specialty"}`}
          borderRadius="5%"
          pos={"absolute"}
        />

        <Box
          pos={"absolute"}
          h={"4%"}
          w={"94.1%"}
          left={"3%"}
          top={specialty ? "65%" : "92%"}
          bg={"white"}
          boxShadow={"0px 0px 20px 30px rgba(255, 255, 255, 1)"}
          overflow={"hidden"}
        ></Box>
        {source === "home" && (
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
        )}
        {source === "docs" && (
          <Flex
            justify={"space-between"}
            position={"absolute"}
            top={"63%"}
            direction={"column"}
            gap={3}
            width={"100%"}
            paddingX={"2rem"}
          >
            <Flex pos={"relative"} direction={"column"} zIndex={10}>
              <Flex justify={"space-between"} alignItems={"center"}>
                <Box>
                  {title}
                  {specialty}
                </Box>
                <Flex gap={1} alignItems={"center"}>
                  <FontAwesomeIcon icon={faStar} color={"#d9af0e"} />
                  {rating}
                </Flex>
              </Flex>
            </Flex>
            <Flex gap={2} alignItems={"center"}>
              <FontAwesomeIcon
                icon={faLocationDot}
                fontSize={"1.5rem"}
                color={"#5b4a0d"}
              />
              {location}
            </Flex>
            <Flex>
              <Button
                bg={"yellow.400"}
                _hover={{ bg: "red.300" }}
                textColor={"blue.900"}
                w={"100%"}
                onClick={toggleSchedule}
              >
                Schedule an Appointment
              </Button>
            </Flex>
          </Flex>
        )}
      </CardBody>
    </Card>
  );
};

export default MainCard;
