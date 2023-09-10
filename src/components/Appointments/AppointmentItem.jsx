import { Flex, Text } from "@chakra-ui/react";

const AppointmentItem = ({ data }) => {
  return (
    <Flex
      as={"article"}
      justify={"space-between"}
      align={"center"}
      px={4}
      py={2}
      border={"2px solid"} 
      borderColor={"yellow.400"}
      borderRadius={"6px"}
    >
      <Flex gap={5}>
        <Flex direction={"column"}>
          <Text fontWeight={700}>Date</Text>
          <Text>{data.startTime.split("T")[0]}</Text>
        </Flex>
        <Flex direction={"column"}>
          <Text fontWeight={700}>Doctor</Text>
          <Text>{data.doctorName}</Text>
        </Flex>
      </Flex>
      <Flex>
        <Text>Details /\</Text>
      </Flex>
    </Flex>
  );
};

export default AppointmentItem;
