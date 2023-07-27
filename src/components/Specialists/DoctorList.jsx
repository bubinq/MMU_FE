import MainCard from "../MainCard.jsx";
import {Grid, Heading, Text} from "@chakra-ui/react";

const DoctorList = ({ doctors, specialties }) => {

    console.log(doctors)
    const specialty = (id) => specialties.content.find((s) => s.id === id);

    return (
        <>
      {doctors.map((d, index) => (
          <Grid key={index}
                templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(3, 1fr)",
                ]}
                columnGap={"50px"}
                rowGap={"50px"}
                as={"article"}
                w={"100%"}
                py={10}
          >
          <MainCard
              title={<Heading size="lg"> {`${d.firstName} ${d.lastName}`}</Heading>}
              specialty={
                  <Text fontSize={"sm"}>{specialty(d.specialtyId).name}</Text>
              }
              rating={<Text fontSize={"sm"}>{d.averageRating}</Text>}
              location={
                  <Text fontSize={"sm"} mt={"20px"}>
                {d.address}
              </Text>
              }
              image={d.imageUrl}
          />
        </Grid>
      ))}
    </>
    );
};

export default DoctorList;
