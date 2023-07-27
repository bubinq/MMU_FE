import MainCard from "../MainCard.jsx";
import { Grid, Heading, Text } from "@chakra-ui/react";
import {Link} from "react-router-dom";

const DoctorList = ({ doctors, specialties }) => {
  const specialty = (id) => specialties.content.find((s) => s.id === id);

  return (
    <>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        columnGap={"50px"}
        rowGap={"50px"}
        as={"article"}
        w={"100%"}
        py={10}
        px={"5rem"}
      >
        {doctors.map((d) => (
          <Link key={d.id} to={`${d.id}`} className="img-link">
            <MainCard
              title={
                <Heading size="lg" color={"#181938"}> {`${d.firstName} ${d.lastName}`}</Heading>
              }
              specialty={
                <Text fontSize={"lg"} color="#c34723">{specialty(d.specialtyId).name}</Text>
              }
              rating={<Text fontSize={"lg"}>{d.averageRating}</Text>}
              location={
                <Text className="doc-location" fontSize={"lg"} >
                  {d.address}
                </Text>
              }
              img={d.imageUrl}
              source={"docs"}
            />
          </Link>
        ))}
      </Grid>
    </>
  );
};

export default DoctorList;
