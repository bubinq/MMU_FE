import { Flex, Grid, Heading } from "@chakra-ui/react";
import { Link, useLoaderData, useSubmit } from "react-router-dom";
import MainCard from "../components/MainCard";

const Home = () => {
  const data = useLoaderData();
  const submit = useSubmit();

  return (
    <Flex
      as={"section"}
      direction={"column"}
      w={["75%", "85%", "95%"]}
      mx={"auto"}
      minH={"10000px"}
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
        {data.content.map((specialty) => (
          <Link
            key={specialty.id}
            onClick={() => {
              submit(
                { specialty },
                { method: "post", action: "/specialists" }
              );
            }}
            to={`/specialists`}
            // state={{ specialty: specialty.name }}
            className="img-link"
          >
            <MainCard title={specialty.name} img={specialty.image_url} />
          </Link>
        ))}
      </Grid>
    </Flex>
  );
};

export default Home;

export const loader = async () => {
  let data;
  const res = await fetch(
    "http://localhost:8080/api/v1/specialties?sortBy=name&sortDir=asc"
  );
  if (res.ok) {
    data = await res.json();
  }

  return data;
};
