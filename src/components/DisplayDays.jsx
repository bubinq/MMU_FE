import { Grid, GridItem, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const DisplayDays = ({ slots }) => {
  const date = new Date(slots[0].date).getTime();
  const prevSwiper = useRef(date);

  useEffect(() => {
    prevSwiper.current = date;
  }, [slots]);
  return (
    <Grid
      as={motion.div}
      key={slots[0].date}
      initial={{ x: prevSwiper.current < date ? "100%" : "-100%" }}
      animate={{ x: "0px" }}
      transition={"0.3s all ease"}
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
      columnGap={8}
    >
      {slots.map((slot, idx) => (
        <GridItem key={idx}>
          <Text textAlign={"center"} fontWeight={700}>
            {slot.day}
          </Text>
          <Text textAlign={"center"}>{slot.date}</Text>
          <Flex direction={"column"} align={"center"} gap={2} mt={"1.5rem"}>
            {slot.workingHours.map((h, idx) => (
              <Flex
                key={idx}
                border={"2px solid"}
                p={"0.525rem 2.375rem"}
                cursor={"pointer"}
                justify={"center"}
                w={"152px"}
                rounded={"6px"}
                borderColor={"blue.900"}
                bg={h === "Day off" ? "yellow.400" : ""}
              >
                <Text textColor={"blue.900"}>{h}</Text>
              </Flex>
            ))}
          </Flex>
        </GridItem>
      ))}
    </Grid>
  );
};

export default DisplayDays;
