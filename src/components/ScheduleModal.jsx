import { Button, Flex, Heading, Image } from "@chakra-ui/react";
import useAuth from "../contexts/AuthContext";
import { genMonth } from "../utils";
import { useEffect, useState, useRef, useMemo } from "react";
import arrowRight from "../assets/arrowRight.svg";
import arrowLeft from "../assets/arrowLeft.svg";
import DisplayDays from "./DisplayDays";
import useWindowBreakpoints from "../hooks/useWindowBreakpoints";

const ScheduleModal = () => {
  const month = useMemo(() => genMonth(), []);
  const steps = useWindowBreakpoints({ tablet: 768, desktop: 1088 });
  const { setIsScheduleOpened } = useAuth();

  const [slidingWindow, setSlidingWindow] = useState({ left: 0, right: steps });
  const isFirstRender = useRef(true);
  const prevStep = useRef(steps);

  const isPrevDisabled = slidingWindow.left === 0;
  const isNextDisabled = slidingWindow.right === 30;

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
      const diff = Math.abs(steps - prevStep.current);
      const toAdd =
        prevStep.current > steps
          ? -diff
          : prevStep.current === steps
          ? 0
          : diff;

      setSlidingWindow((prevPos) => ({
        left: prevPos.left,
        right: prevPos.right + toAdd,
      }));
      prevStep.current = steps;
    }
    isFirstRender.current = false;
  }, [steps]);
  return (
    <Flex justify={"center"} mt={"-8rem"}>
      <Flex
        pos={"absolute"}
        top={"0"}
        left={"0"}
        bottom={"0"}
        right={"0"}
        bg={"black"}
        zIndex={100}
        opacity={"60%"}
        onClick={() => setIsScheduleOpened(false)}
      ></Flex>
      <Flex
        direction={"column"}
        mx={"auto"}
        w={["80%", "40rem", "46rem"]}
        gap={"2.5rem"}
        shadow={"md"}
        padding={["1rem 2.5rem", "2rem 2.5rem"]}
        borderRadius={"6px"}
        bg={"#fff"}
        pos={"fixed"}
        zIndex={101}
      >
        <Heading size={["md", "lg"]}>Schedule an Appointment</Heading>
        <Flex justify={"space-between"}  overflow={"hidden"}>
          <Button
            onClick={decrementSlide}
            p={"0.625rem"}
            bg={isPrevDisabled ? "rgba(244, 180, 0, 0.5)" : "yellow.400"}
            alignItems={"center"}
            pos={"relative"}
            zIndex={8}
            cursor={isPrevDisabled ? "not-allowed" : "pointer"}
            _hover={{
              bg: isPrevDisabled ? "rgba(244, 180, 0, 0.5)" : "yellow.400",
            }}
            disabled={isPrevDisabled}
          >
            <Image
              src={arrowLeft}
              userSelect={"none"}
              alt="Left navigation arrow"
            />
          </Button>
          <DisplayDays
            slots={month.slice(slidingWindow.left, slidingWindow.right)}
          />
          <Button
            onClick={incrementSlide}
            p={"0.625rem"}
            pos={"relative"}
            zIndex={8}
            bg={isNextDisabled ? "rgba(244, 180, 0, 0.6)" : "yellow.400"}
            alignItems={"center"}
            cursor={isNextDisabled ? "not-allowed" : "pointer"}
            _hover={{
              bg: isNextDisabled ? "rgba(244, 180, 0, 0.6)" : "yellow.400",
            }}
            disabled={isNextDisabled}
          >
            <Image
              src={arrowRight}
              userSelect={"none"}
              alt="Right navigation arrow"
            />
          </Button>
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
