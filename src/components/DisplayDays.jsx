import { Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import TimeSlots from "./Appointments/TimeSlots";

const DisplayDays = ({ slots }) => {
  const date = new Date(slots[0].date).getTime();
  const prevSwiper = useRef(date);

  const [selectDate, setSelectDate] = useState(null);

  useEffect(() => {
    prevSwiper.current = date;
  }, [slots]);
  return (
    <Grid
      as={motion.div}
      key={slots[0].date}
      initial={{ x: prevSwiper.current < date ? "100%" : "-100%" }}
      animate={{ x: "0px" }}
      transition={"0.3s all ease"}
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
      columnGap={8}
    >
      {slots.map((slot, idx) => (
        <TimeSlots
          key={idx}
          slot={slot}
          selectDate={selectDate}
          setSelectDate={setSelectDate}
        />
      ))}
    </Grid>
  );
};

export default DisplayDays;
