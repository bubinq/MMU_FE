import { Flex, Heading, Accordion } from "@chakra-ui/react";
import AppointmentItem from "./AppointmentItem";

const AppointmentsList = ({ appointments }) => {
  return (
    <>
      {appointments.length === 0 ? (
        <>
          <Heading textAlign={"center"} py={4} size={"md"} mt={"1rem"}>
            There are no upcoming appointments
          </Heading>
        </>
      ) : (
        <Accordion
          as={"section"}
          w={"100%"}
          direction={"column"}
          gap={5}
          px={6}
          py={8}
          allowToggle

        >
          {appointments.map((data) => (
            <AppointmentItem key={data.id} data={data} />
          ))}
        </Accordion>
      )}
    </>
  );
};

export default AppointmentsList;
