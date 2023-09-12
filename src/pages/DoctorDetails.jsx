import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import specialistService from "../services/specialist/index.js";
import { Box, Flex, Heading, Image, Button } from "@chakra-ui/react";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Paginate from "../components/Paginate.jsx";
import Comment from "../components/Comments/Comment.jsx";
import CommentForm from "../components/Comments/CommentForm.jsx";
import ScheduleModal from "../components/ScheduleModal.jsx";
import useAppointments from "../contexts/AppointmentsContext.jsx";
import useAuth from "../contexts/AuthContext.jsx";

const DoctorDetails = () => {
  const data = useLoaderData();
  const { scheduleInfo, setScheduleInfo } = useAppointments();
  const { user } = useAuth();
  const [page, setPage] = useState(1);
  const [comments, setComments] = useState(data.comments.content || []);

  const goToPage = async (e, value) => {
    try {
      const response = await specialistService.getPage(
        data.doctor.id,
        value - 1
      );
      setPage(value);
      setComments(response.content);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSchedule = (ev) => {
    ev.preventDefault();
    setScheduleInfo((prev) => ({
      doctorId: data.doctor.id,
      isOpened: !prev.isOpened,
    }));
  };

  useEffect(() => {
    if (data) {
      setComments(data.comments.content);
    }
  }, [data]);
  return (
    <Box mx={"auto"} minHeight={"100vh"}>
      <Flex
        w={["310px", "740px", "1034px"]}
        minHeight={"622px"}
        mt={["90px", "120px", "122px"]}
        flexDirection={"column"}
        gap={["24px", "31px", "31px"]}
        position={"relative"}
        mb={"2rem"}
      >
        {scheduleInfo.isOpened && <ScheduleModal />}
        <Box
          w={"100%"}
          minHeight={["449px", " 363px", "363px"]}
          borderRadius={"15px"}
          boxShadow={"2px 2px 6px 0px rgba(0, 0, 0, 0.25)"}
          overflow={"hidden"}
          backgroundColor={"#fff"}
        >
          <Box
            background="linear-gradient(90deg, rgba(244,180,0,1) 0%, rgba(217,175,14,1) 100%)"
            w={"100%"}
            h={"148px"}
          ></Box>
          <Flex
            mt={["196px", "48px", "48px"]}
            ml={["12px", "360px", "378px"]}
            mr={["12px", "30px", "30px"]}
            mb={"8px"}
            display={["none", "flex", "flex"]}
          >
            <Flex gap={"10px"} direction={"column"} alignItems={"center"}>
              <Flex gap={"10px"} alignItems={"center"}>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  fontSize={"1.75rem"}
                  color={"#5b4a0d"}
                />
                <Box>{data.doctor.address}</Box>
              </Flex>

              <Button
                bg={"yellow.400"}
                mt={"1rem"}
                _hover={{ bg: "red.300" }}
                textColor={"blue.900"}
                w={"100%"}
                onClick={toggleSchedule}
                isDisabled={!user.accessToken}
              >
                Schedule an Appointment
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Flex
          w={"100%"}
          minHeight={["200px", "228px", "228px"]}
          gap={"31px"}
          flexDir={"column"}
          borderRadius={"15px"}
          boxShadow={"2px 2px 6px 0px rgba(0, 0, 0, 0.25)"}
          p={"31px"}
          backgroundColor={"#fff"}
          color={"#200017"}
        >
          <Heading
            as={"h3"}
            fontSize={"20px"}
            lineHeight={"normal"}
            fontWeight={"700"}
          >{`About ${data.doctor.firstName} ${data.doctor.lastName}`}</Heading>
          <Box>{data.doctor.summary}</Box>
        </Flex>
        <Flex
          position={"absolute"}
          top={"21px"}
          left={"41px"}
          w={"217px"}
          minH={"319px"}
          flexDir={"column"}
        >
          <Box
            borderRadius={"50%"}
            overflow={"hidden"}
            w={"217px"}
            h={"217px"}
            border={"none"}
          >
            <Image
              src={data.doctor.imageUrl}
              w={"217px"}
              h={"217px"}
              objectFit={"cover"}
              borderRadius={"50%"}
              border={"10px solid #fff"}
            />
          </Box>
          <Flex
            gap={"3px"}
            alignItems={"center"}
            justifyContent={"center"}
            mt={"0.5rem"}
            mb={["8px", "18px", "18px"]}
          >
            <FontAwesomeIcon icon={faStar} color={"#d9af0e"} />
            <Box fontSize={"15px"} color={"#200017"} textAlign={"center"}>
              {data.doctor.averageRating < 1 || data.doctor.averageRating > 5
                ? "--"
                : data.doctor.averageRating}
            </Box>
          </Flex>
          <Flex flexDir={"column"} gap={"-1px"}>
            <Heading
              as={"h2"}
              fontSize={"24px"}
              fontWeight={"700"}
              lineHeight={"normal"}
              fontStyle={"normal"}
              w={["100%", "max-content", "max-content"]}
            >
              {`${data.doctor.firstName} ${data.doctor.lastName}`}
            </Heading>
            <Box
              color={"#c34723"}
              fontSize={"16px"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"normal"}
            >
              {data.doctor.specialtyName}
            </Box>
            <Flex mt={"8px"} display={["flex", "none", "none"]}>
              <Flex alignItems={"center"} direction={"column"}>
                <Flex align={"center"} gap={"5px"}>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    fontSize={"1.75rem"}
                    color={"#5b4a0d"}
                  />

                  <Box as={"div"} data-testid={data.doctor.address}>
                    {data.doctor.address}
                  </Box>
                </Flex>

                <Button
                  bg={"yellow.400"}
                  mt={"1rem"}
                  _hover={{ bg: "red.300" }}
                  textColor={"blue.900"}
                  w={"100%"}
                  onClick={toggleSchedule}
                  isDisabled={!user.accessToken}
                >
                  Schedule an Appointment
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Box
          w={"100%"}
          minHeight={["200px", "228px", "228px"]}
          gap={"31px"}
          borderRadius={"15px"}
          boxShadow={"2px 2px 6px 0px rgba(0, 0, 0, 0.25)"}
          p={"31px"}
          backgroundColor={"#fff"}
          color={"#200017"}
        >
          <Heading
            as={"h2"}
            fontSize={"24px"}
            fontWeight={"700"}
            lineHeight={"normal"}
            fontStyle={"normal"}
            w={["100%", "max-content", "max-content"]}
          >
            Create a Review
          </Heading>
          <CommentForm doctorId={data.doctor.id} />
        </Box>
        <Flex
          w={"100%"}
          minHeight={["200px", "228px", "228px"]}
          gap={"31px"}
          flexDir={"column"}
          borderRadius={"15px"}
          boxShadow={"2px 2px 6px 0px rgba(0, 0, 0, 0.25)"}
          p={"31px"}
          backgroundColor={"#fff"}
          color={"#200017"}
        >
          <Heading
            as={"h2"}
            fontSize={"24px"}
            fontWeight={"700"}
            lineHeight={"normal"}
            fontStyle={"normal"}
            w={["100%", "max-content", "max-content"]}
          >
            Reviews
          </Heading>
          <Box>
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </Box>
          {comments.length > 0 && (
            <Paginate
              count={data.comments.totalPages}
              page={page}
              goToPage={goToPage}
            />
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default DoctorDetails;

export const loader = async ({ params }) => {
  let data = {};

  try {
    data.doctor = await specialistService.getDoctorDetails(params.id);
    data.comments = await specialistService.getComentsAndReview(params.id);
  } catch (err) {
    console.log(err);
  }

  return data;
};
