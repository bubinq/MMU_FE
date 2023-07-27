import { Flex, Heading } from "@chakra-ui/react";

const Specialists = () => {
  return (
    <Flex as={"section"} w={["75%", "85%", "95%"]} mx={"auto"} minH={"650px"}>
      <Heading variant={"main"}>Specialists</Heading>
    </Flex>
  );
};

export const getSpecialistsSettings = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  console.log(formData);
};
export default Specialists;
