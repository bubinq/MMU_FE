import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import useAuth from "../contexts/AuthContext";
import { genMonth } from "../utils";
import { useEffect, useState, useRef } from "react";
import arrowRight from "../assets/arrowRight.svg";
import arrowLeft from "../assets/arrowLeft.svg";
import DisplayDays from "./DisplayDays";
import useWindowBreakpoints from "../hooks/useWindowBreakpoints";

const ScheduleModal = () => {
  const month = genMonth();
  const steps = useWindowBreakpoints();
  const { setIsScheduleOpened } = useAuth();

  const [slidingWindow, setSlidingWindow] = useState({ left: 0, right: steps });
  const isFirstRender = useRef(true);
  const prevStep = useRef(steps);

  const incrementSlide = () => {
    if (slidingWindow.right + steps <= month.length) {
      setSlidingWindow((prevPos) => ({
        left: prevPos.left + steps,
        right: prevPos.right + steps,
      }));
    } else if (slidingWindow.right !== 30) {
      setSlidingWindow((prevPos) => ({
        left: prevPos.left + month.length - slidingWindow.right,
        right: prevPos.right + month.length - slidingWindow.right,
      }));
    }
  };

  const decrementSlide = () => {
    if (slidingWindow.left - steps >= 0) {
      setSlidingWindow((prevPos) => ({
        left: prevPos.left - steps,
        right: prevPos.right - steps,
      }));
    } else if (slidingWindow.left !== 0) {
      setSlidingWindow((prevPos) => ({
        left: prevPos.left - slidingWindow.left,
        right: prevPos.right - slidingWindow.left,
      }));
    }
  };

  useEffect(() => {
    if (!isFirstRender.current) {
      const toAdd =
        prevStep.current > steps ? -1 : prevStep.current === steps ? 0 : 1;

      setSlidingWindow((prevPos) => ({
        left: prevPos.left,
        right: prevPos.right + toAdd,
      }));
      prevStep.current = steps;
    }
    isFirstRender.current = false;
  }, [steps]);
  return (
    <Flex w={"100%"} justify={"center"} align={"center"}>
      <Flex
        pos={"fixed"}
        top={"0"}
        left={"0"}
        bottom={"0"}
        right={"0"}
        bg={"black"}
        zIndex={99}
        opacity={"60%"}
        onClick={() => setIsScheduleOpened(false)}
      ></Flex>
      <Flex
        direction={"column"}
        mx={"auto"}
        w={["70%", "60%", "50%"]}
        gap={"2.5rem"}
        shadow={"md"}
        padding={["1rem 1.5rem", "2rem 2.5rem"]}
        borderRadius={"6px"}
        bg={"#fff"}
        pos={"fixed"}
        zIndex={100}
      >
        <Heading size={["md", "lg"]}>Schedule an Appointment</Heading>
        <Flex justify={"space-between"}>
          <Flex
            onClick={decrementSlide}
            p={"0.625rem"}
            bg={"yellow.400"}
            alignItems={"center"}
            cursor={"pointer"}
          >
            <Image
              src={arrowLeft}
              userSelect={"none"}
              alt="Left navigation arrow"
            />
          </Flex>
          <DisplayDays
            slots={month.slice(slidingWindow.left, slidingWindow.right)}
          />
          <Flex
            onClick={incrementSlide}
            p={"0.625rem"}
            bg={"yellow.400"}
            alignItems={"center"}
            cursor={"pointer"}
          >
            <Image
              src={arrowRight}
              userSelect={"none"}
              alt="Right navigation arrow"
            />
          </Flex>
        </Flex>
        <Flex justify={"end"} gap={2}>
          <Button
            bg={"yellow.400"}
            _hover={{ bg: "yellow.300" }}
            textColor={"blue.900"}
            onClick={() => setIsScheduleOpened(false)}
          >
            Cancel
          </Button>
          <Button
            bg={"yellow.400"}
            _hover={{ bg: "yellow.300" }}
            textColor={"blue.900"}
          >
            Schedule
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ScheduleModal;
