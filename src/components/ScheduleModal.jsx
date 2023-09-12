import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalFooter,
  Image,
  Portal,
  Spinner as ScheduleSpinner,
} from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import useAppointments from "../contexts/AppointmentsContext";
import useAlert from "../hooks/useAlert";
import AuthAlert from "./Auth/AuthAlert";
import { genMonth } from "../utils";
import { useEffect, useState, useRef, useMemo } from "react";
import arrowRight from "../assets/arrowRight.svg";
import arrowLeft from "../assets/arrowLeft.svg";
import DisplayDays from "./Appointments/DisplayDays";
import useWindowBreakpoints from "../hooks/useWindowBreakpoints";
import appointmentsService from "../services/appointments";
import Spinner from "./Spinner";

const ScheduleModal = () => {
  const [selectDate, setSelectDate] = useState("");
  const [serverError, setServerError] = useState("");
  const [isLoading, setIsLoading] = useState({ mount: false, schedule: false });
  const [availableHours, setAvailableHours] = useState(null);
  const isFirstRender = useRef(true);
  const month = useMemo(() => genMonth(availableHours), [availableHours]);

  const steps = useWindowBreakpoints({ tablet: 768, desktop: 1088 });
  const [slidingWindow, setSlidingWindow] = useState({ left: 0, right: steps });
  const prevStep = useRef(steps);

  const { scheduleInfo, setScheduleInfo } = useAppointments();
  const { isAlertVisible } = useAlert(serverError, setServerError);
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

  const closeModal = () => {
    setScheduleInfo((prev) => ({ ...prev, isOpened: false }));
  };

  const scheduleAppointment = async () => {
    if (!selectDate) {
      return;
    }
    setIsLoading((prev) => ({ ...prev, schedule: true }));
    try {
      const [date, time] = selectDate.split("T");
      const data = {
        doctorId: scheduleInfo.doctorId,
        date,
        hour: parseInt(time),
      };
      await appointmentsService.scheduleAppointment(data);
      closeModal();
    } catch (error) {
      setServerError(error.response.data.message);
    } finally {
      setIsLoading((prev) => ({ ...prev, schedule: false }));
    }
  };

  const fetchAvailableHours = async () => {
    setIsLoading((prev) => ({ ...prev, mount: true }));
    try {
      const hours = await appointmentsService.getDoctorAppointments(
        scheduleInfo.doctorId
      );
      setAvailableHours(hours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading((prev) => ({ ...prev, mount: false }));
  };
  useEffect(() => {
    if (isFirstRender.current) {
      fetchAvailableHours();
    }
  }, []);
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
        ...prevPos,
        right: prevPos.right + toAdd,
      }));
      prevStep.current = steps;
    }
    isFirstRender.current = false;
  }, [steps]);
  return (
    <Portal>
      <Modal isOpen={scheduleInfo.isOpened} onClose={closeModal}>
        <ModalOverlay onClick={closeModal} />
        <ModalContent
          display={"flex"}
          direction={"column"}
          maxW={"auto"}
          gap={"1.5rem"}
          w={["80%", "40rem", "52rem"]}
          minH={"500px"}
          shadow={"md"}
          padding={["1rem 2.5rem", "2rem 2.5rem"]}
          borderRadius={"6px"}
        >
          <ModalHeader fontSize={["xl", "3xl"]} p={0}>
            Schedule an Appointment
          </ModalHeader>

          <ModalBody p={0}>
            <AnimatePresence>
              {isAlertVisible && (
                <AuthAlert isSchedule={true} serverError={serverError} />
              )}
            </AnimatePresence>
            <Flex justify={"space-between"} overflow={"hidden"}>
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
              </Button>{" "}
              {isLoading.mount ? (
                <Spinner />
              ) : (
                <DisplayDays
                  selectDate={selectDate}
                  setSelectDate={setSelectDate}
                  slots={month.slice(slidingWindow.left, slidingWindow.right)}
                />
              )}
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
            {!isLoading.mount && (
              <ModalFooter mt={"2.5rem"} p={0} display={"flex"} gap={3}>
                <Button
                  bg={"transparent"}
                  border={"2px solid"}
                  borderColor={"yellow.400"}
                  padding={"0.625rem 4rem"}
                  transition={"0.3s all ease"}
                  _hover={{ bg: "transparent", borderColor: "red.300" }}
                  textColor={"blue.900"}
                  onClick={closeModal}
                >
                  Cancel
                </Button>
                <Button
                  bg={"yellow.400"}
                  padding={"0.625rem 4rem"}
                  _hover={{ bg: "red.300" }}
                  transition={"0.3s all ease"}
                  textColor={"blue.900"}
                  onClick={scheduleAppointment}
                >
                  {isLoading.schedule ? (
                    <ScheduleSpinner
                      thickness="4px"
                      speed="0.65s"
                      color="white"
                      size="lg"
                    />
                  ) : (
                    "Schedule"
                  )}
                </Button>
              </ModalFooter>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Portal>
  );
};

export default ScheduleModal;
