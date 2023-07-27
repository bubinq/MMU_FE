import { Flex, Grid, Heading } from "@chakra-ui/react";
import { useLoaderData, Form, useSubmit } from "react-router-dom";
import MainCard from "../components/MainCard";
import specialtyService from "../services/specialty";

const Home = () => {
  const data = useLoaderData();
  const submit = useSubmit();

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
        {data.content.map((specialty) => (
          <Form
            key={specialty.id}
            action="/specialists"
            onClick={() => {
              const formData = new FormData();
              formData.append("id", specialty.id);
              submit(formData, {
                method: "post",
                action: "/specialists",
              });
            }}
            className="img-link"
          >
            <MainCard
              title={
                <Heading as={"h3"} size="lg">
                  {specialty.name}
                </Heading>
              }
              img={specialty.image_url}
            />
          </Form>
        ))}
      </Grid>
    </Flex>
  );
};

export default Home;

export const loader = async () => {
  let data;
  try {
    data = await specialtyService.getAllSpecialties();
  } catch (error) {
    console.log(error);
  }
  return data;
};
