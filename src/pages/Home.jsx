import { Flex, Grid, Heading } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";
import { requestExecuter } from "../utils";
import specialtyService from "../services/specialty";
import SpecialtyList from "../components/Specialties/SpecialtyList";

const Home = () => {
  const data = useLoaderData();

  return (
    <Flex
      as={"section"}
      direction={"column"}
      w={["75%", "85%", "95%"]}
      mx={"auto"}
    >
      <Heading variant={"main"}>Specialties</Heading>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        rowGap={"70px"}
        columnGap={"40px"}
        as={"article"}
        w={"100%"}
        py={10}
      >
        <SpecialtyList data={data} />
      </Grid>
    </Flex>
  );
};

export default Home;

export const loader = async () => {
  return requestExecuter(specialtyService.getAllSpecialties());
};
