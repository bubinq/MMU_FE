import { Heading, Accordion } from "@chakra-ui/react";
import AppointmentItem from "./AppointmentItem";
import { useState, memo } from "react";
import useAppointments from "../../contexts/AppointmentsContext";

const AppointmentsList = ({ appointments, setAppointments }) => {
  const [accordionIndex, setAccordionIndex] = useState(-1);
  const { selectedType } = useAppointments();

  return (
    <>
      {appointments.length === 0 ? (
        <>
          <Heading textAlign={"center"} py={4} size={"md"} mt={"1rem"}>
            There are no {selectedType.toLocaleLowerCase()} appointments
          </Heading>
        </>
      ) : (
        <Accordion
          w={"100%"}
          direction={"column"}
          gap={5}
          px={6}
          py={8}
          allowToggle
          index={accordionIndex}
          onChange={(i) => setAccordionIndex(i)}
        >
          {appointments.map((data) => (
            <AppointmentItem
              key={data.id}
              data={data}
              setAppointments={setAppointments}
              setAccordionIndex={setAccordionIndex}
            />
          ))}
        </Accordion>
      )}
    </>
  );
};

export default memo(AppointmentsList);
