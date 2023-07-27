import {useLoaderData, useNavigate} from "react-router-dom";
import specialistService from "../services/specialist/index.js";
import { Box, Button } from "@chakra-ui/react";

const DoctorDetails = () => {
  const data = useLoaderData();
  const history = useNavigate();
  console.log(data);

  return (
    <Box mx={"auto"} minHeight={"93vh"}>
      <Box fontSize={"1.5rem"} mt={"20rem"}>Coming soon...</Box>
      <Button fontSize={"1.5rem"} bg={"blue.300"} onClick={() => history(-1)}>GO BACK</Button>
    </Box>
  );
};

export default DoctorDetails;

export const loader = async ({ params }) => {
  let data = {};

  try {
    data = await specialistService.getDoctorDetails(params.id);
  } catch (err) {
    console.log(err);
  }

  return data;
};
