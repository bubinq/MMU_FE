import { Flex, Button, Text, GridItem } from "@chakra-ui/react";

export default function TimeSlots({ slot, setSelectDate, selectDate }) {
  return (
    <GridItem>
      <Text textAlign={"center"} fontWeight={700}>
        {slot.day}
      </Text>
      <Text textAlign={"center"}>{slot.date}</Text>
      <Flex direction={"column"} align={"center"} gap={2} mt={"1.5rem"}>
        {slot.workingHours.map((h, idx) => (
          <Button
            key={idx}
            onClick={() => setSelectDate(`${slot.date}T${h}`)}
            display={"flex"}
            border={"2px solid"}
            p={"0.525rem 2.375rem"}
            cursor={
              h === "Day off" || h === "Reserved" ? "not-allowed" : "pointer"
            }
            justify={"center"}
            w={"152px"}
            rounded={"6px"}
            disabled={h === "Day off" || h === "Reserved"}
            borderColor={"blue.900"}
            textColor={"blue.900"}
            _hover={{ bg: "" }}
            opacity={h === "Day off" || h === "Reserved" ? "50%" : "100%"}
            bg={
              h === "Day off" ||
              h === "Reserved" ||
              `${slot.date}T${h}` === selectDate
                ? "yellow.400"
                : ""
            }
          >
            {h}
          </Button>
        ))}
      </Flex>
    </GridItem>
  );
}
