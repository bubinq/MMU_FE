import { Flex, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useFetcher, useLocation } from "react-router-dom";

const Specialists = () => {
  // const fetcher = useFetcher();
  // const { state } = useLocation();
  

  // useEffect(() => {
  //   if (state?.specialty) {
  //     fetcher.submit({ specialty: state.specialty }, { method: "post" });
  //   }
  // }, [state, fetcher]);
  return (
    <Flex as={"section"} w={["75%", "85%", "95%"]} mx={"auto"} minH={"650px"}>
      <Heading variant={"main"}>Specialists</Heading>
    </Flex>
  );
};
// export const loader = async ({ params, request }) => {
//   console.log(`Params: ${JSON.stringify(params)}`);
//   console.log(`Request: ${JSON.stringify(request)}`);
//   return json({message: "ok"})
// };
export const getSpecialistsSettings = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  console.log(formData);
  console.log(request);

  
};
export default Specialists;
