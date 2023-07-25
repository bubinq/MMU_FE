import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { DUMMY_SPECIALTIES } from "../constants";
import MainCard from "../components/MainCard";

const Home = () => {
  return (
    <Flex
      as={"section"}
      direction={"column"}
      w={["75%", "85%", "95%"]}
      mx={"auto"}
      minH={"3650px"}
    >
      <Heading variant={"main"}>Specialties</Heading>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        columnGap={"50px"}
        rowGap={"50px"}
        as={"article"}
        w={"100%"}
        py={10}
      >
        {DUMMY_SPECIALTIES.map((specialty, idx) => (
          <MainCard
            key={idx}
            title={specialty}
            // specialty={<Text fontSize={"sm"}>Doctor</Text>}
            // rating={<Text fontSize={"sm"}>Rating</Text>}
            // location={
            //   <Text fontSize={"sm"} mt={"20px"}>
            //     23475 Glacier View Dr, Eagle River, Alaska 99577, USA
            //   </Text>
            // }
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default Home;
