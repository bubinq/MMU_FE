import { useLoaderData, useNavigate } from "react-router-dom";
import specialistService from "../services/specialist/index.js";
import {Box, Flex, Image} from "@chakra-ui/react";
import {faLocationDot, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DoctorDetails = () => {
  const data = useLoaderData();
  const history = useNavigate();

    console.log(data)

  return (
    <Box mx={"auto"} minHeight={"100vh"}>
        <Flex w={"1034px"} h={"622px"} mt={"122px"} flexDirection={"column"} gap={"31px"} position={"relative"} >
            <Box w={"100%"} h={"363px"} borderRadius={"15px"} boxShadow={"2px 2px 6px 0px rgba(0, 0, 0, 0.25)"} overflow={"hidden"} backgroundColor={"#fff"} >
                <Box background="linear-gradient(90deg, rgba(217,175,14,1) 0%, rgba(195,71,35,1) 100%)" w={"100%"} h={"148px"}></Box>
                <Flex mt={"48px"} ml={"378px"}>
                    <Flex gap={"10px"} alignItems={"center"}>
                        <FontAwesomeIcon icon={faLocationDot} fontSize={"1.75rem"} color={"#5b4a0d"}/>
                        <Box>{data.address}</Box>
                    </Flex>
                </Flex>
            </Box>
            <Flex w={"100%"} h={"228px"} gap={"31px"} flexDir={"column"} borderRadius={"15px"} boxShadow={"2px 2px 6px 0px rgba(0, 0, 0, 0.25)"} p={"31px"} backgroundColor={"#fff"} color={"#200017"}>
                <Box fontSize={"20px"} lineHeight={"normal"} fontWeight={"700"}>{`About ${data.firstName} ${data.lastName}`}</Box>
                <Box>{data.summary}</Box>
            </Flex>
            <Flex position={"absolute"} top={"21px"} left={"41px"} w={"217px"} h={"319px"} flexDir={"column"}>
                <Box borderRadius={"50%"} overflow={"hidden"} w={"217px"} h={"217px"} border={"none"}>
                    <Image src={data.imageUrl} w={"217px"} h={"217px"} objectFit={"cover"} borderRadius={"50%"} border={"10px solid #fff"}/>
                </Box>
                <Flex gap={"3px"} alignItems={"center"} justifyContent={"center"} mt={"0.5rem"} mb={"18px"}>
                    <FontAwesomeIcon icon={faStar} color={"#d9af0e"} />
                    <Box fontSize={"15px"} fontWeight={"600"} color={"#200017"} textAlign={"center"}>{data.averageRating || "--"}</Box>
                </Flex>
                <Flex flexDir={"column"} gap={"-1px"}>
                    <Box fontSize={"24px"} fontWeight={"700"} lineHeight={"normal"} fontStyle={"normal"}>
                        {`${data.firstName} ${data.lastName}`}
                    </Box>
                    <Box color={"#c34723"} fontSize={"16px"} fontStyle={"normal"} fontWeight={"400"} lineHeight={"normal"}>
                        {data.specialtyName}
                    </Box>
                </Flex>
            </Flex>
        </Flex>
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
