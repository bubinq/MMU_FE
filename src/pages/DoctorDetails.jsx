import { useLoaderData, useNavigate } from "react-router-dom";
import specialistService from "../services/specialist/index.js";
import { Box, Button } from "@chakra-ui/react";

const DoctorDetails = () => {
  const data = useLoaderData();
  const history = useNavigate();

  return (
    <Box mx={"auto"} minHeight={"100vh"}>
      <Box fontSize={"1.5rem"} mt={"20rem"}>
        Coming soon...
      </Box>
      <Button
          mt={"2rem"}
          variant={"signup"}
          fontSize={"1.5rem"}
          onClick={() => history(-1)}>
        GO BACK
      </Button>
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
