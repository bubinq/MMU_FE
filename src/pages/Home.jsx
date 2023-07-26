import { Flex, Grid, Heading } from "@chakra-ui/react";
import { DUMMY_SPECIALTIES } from "../constants";
import { Link } from "react-router-dom";
import MainCard from "../components/MainCard";

const Home = () => {
  // const data = useLoaderData();

  // console.log(data);
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
        columnGap={"50px"}
        rowGap={"70px"}
        as={"article"}
        w={"100%"}
        py={10}
      >
        {DUMMY_SPECIALTIES.map((specialty, idx) => (
          <Link
            key={idx}
            to={"/specialists"}
            state={{ specialty: specialty.name }}
            className="img-link"
          >
            <MainCard key={idx} title={specialty.name} img={specialty.img} />
          </Link>
        ))}
      </Grid>
    </Flex>
  );
};

export default Home;

// export const loader = async () => {
//   let data;
//   const res = await fetch("/api/v1/specialties");
//   if (res.ok) {
//     data = await res.json();
//   }

//   return data;
// };
