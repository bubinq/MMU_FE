import { Grid, GridItem, Text } from "@chakra-ui/react";

const DisplayDays = ({ slots }) => {
  return (
    <Grid
      templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
      columnGap={7}
    >
      {slots.map((slot, idx) => (
        <GridItem key={idx}>
            <Text textAlign={"center"} fontWeight={700}>{slot.day}</Text>
            <Text textAlign={"center"}>{slot.date}</Text>
        </GridItem>
      ))}
    </Grid>
  );
};

export default DisplayDays;
