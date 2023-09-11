import { Box, Heading, Flex, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Comment({ comment }) {
  return (
    <Box _notFirst={{ marginTop: "31px" }}>
      <Heading fontSize={"16px"}>{comment.userName}</Heading>
      <Flex alignItems={"center"} mt={"8px"}>
        {[...Array(5)].map((star, index) => {
          return (
            <FontAwesomeIcon
              icon={faStar}
              color={index < comment.rating ? "#d9af0e" : "grey"}
              key={index}
            />
          );
        })}
        <Text fontWeight={"600"} fontSize={"15px"} pt={"3px"} ml={"5px"}>
          {comment.rating}
        </Text>
      </Flex>
      <Text mt={"8px"}>{comment.postedAt.split("T")[0]}</Text>
      <Text mt={"31px"}>{comment.comment}</Text>
    </Box>
  );
}
