import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import specialistService from "../services/specialist/index.js";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScheduleModal from "../components/ScheduleModal.jsx";
import useAppointments from "../contexts/AppointmentsContext.jsx";

const DoctorDetails = () => {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  const data = useLoaderData();
  const { scheduleInfo, setScheduleInfo } = useAppointments();

  const toggleSchedule = (ev) => {
    ev.preventDefault();
    setScheduleInfo((prev) => ({
      doctorId: data.id,
      isOpened: !prev.isOpened,
    }));
  };

  const mockReviews = [
    {
      id: 0,
      name: "Divina Benitez",
      rating: 3,
      date: "March 23, 2023",
      desc: "I had the pleasure of seeing Elizabeth for a recent medical issue and I must say, I am thoroughly impressed. From the moment I walked into the office, I felt comfortable and at ease. Dr. Smith took the time to listen to all of my concerns and answered all of my questions with patience and clarity.",
    },
    {
      id: 1,
      name: "Pedro Perez",
      rating: 4,
      date: "March 23, 2023",
      desc: "The office staff were also fantastic, always friendly and accommodating. I really appreciated the efficiency of the check-in process and how organized everything was. Overall, I highly recommend Dr. to anyone in need of a compassionate and skilled physician. Thank you for everything!",
    },
  ];

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
          minHeight={["419px", " 363px", "363px"]}
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
                <Box>{data.address}</Box>
              </Flex>

              <Button
                bg={"yellow.400"}
                mt={"1rem"}
                _hover={{ bg: "red.300" }}
                textColor={"blue.900"}
                w={"100%"}
                onClick={toggleSchedule}
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
          >{`About ${data.firstName} ${data.lastName}`}</Heading>
          <Box>{data.summary}</Box>
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
              src={data.imageUrl}
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
              {data.averageRating < 1 || data.averageRating > 5
                ? "--"
                : data.averageRating}
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
              {`${data.firstName} ${data.lastName}`}
            </Heading>
            <Box
              color={"#c34723"}
              fontSize={"16px"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"normal"}
            >
              {data.specialtyName}
            </Box>
            <Flex mt={"8px"} display={["flex", "none", "none"]}>
              <Flex gap={"10px"} alignItems={"center"}>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  fontSize={"1.75rem"}
                  color={"#5b4a0d"}
                />
                <Box as={"div"} data-testid={data.address}>
                  {data.address}
                </Box>
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
          <Box
            as={"form"}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Box mt={"24px"}>
              <Text fontSize={"18px"} fontWeight={"700"}>
                Rating *
              </Text>
              <Flex mt={"8px"}>
                {[...Array(5)].map((star, index) => {
                  const value = index + 1;

                  return (
                    <FontAwesomeIcon
                      icon={faStar}
                      color={value <= (hover || rating) ? "#d9af0e" : "grey"}
                      key={index}
                      style={{ transition: "all .3s" }}
                      onMouseEnter={() => setHover(value)}
                      onMouseLeave={() => setHover(0)}
                      onClick={() => setRating(value)}
                    />
                  );
                })}
              </Flex>
            </Box>
            <Box mt={"24px"}>
              <Text
                as={"label"}
                htmlFor={"comment"}
                fontSize={"18px"}
                fontWeight={"700"}
              >
                Comment *
              </Text>
              <Textarea
                name={"comment"}
                id={"comment"}
                placeholder={"Write your comments here..."}
                resize={"none"}
                h={"106px"}
                mt={"24px"}
              />
            </Box>
            <Button type={"submit"} mt={"40px"}>
              {"Submit Review"}
            </Button>
          </Box>
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
            {mockReviews.map((review) => (
              <Box key={review.id} _notFirst={{ marginTop: "31px" }}>
                <Heading fontSize={"16px"}>{review.name}</Heading>
                <Flex alignItems={"center"} mt={"8px"}>
                  {[...Array(5)].map((star, index) => {
                    return (
                      <FontAwesomeIcon
                        icon={faStar}
                        color={index < review.rating ? "#d9af0e" : "grey"}
                        key={index}
                      />
                    );
                  })}
                  <Text
                    fontWeight={"600"}
                    fontSize={"15px"}
                    pt={"3px"}
                    ml={"5px"}
                  >
                    {review.rating}
                  </Text>
                </Flex>
                <Text mt={"8px"}>{review.date}</Text>
                <Text mt={"31px"}>{review.desc}</Text>
              </Box>
            ))}
          </Box>
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
