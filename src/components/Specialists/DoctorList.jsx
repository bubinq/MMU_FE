import MainCard from "../MainCard.jsx";
import {Flex, Grid, Heading, Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const DoctorList = ({ doctors, specialties }) => {

  return (
    <>
      {doctors.length === 0 ? (
        <>
          <Heading textAlign={"center"} mt={"5rem"}>
            No doctors found matching this search!
          </Heading>
          <Flex justifyContent={"center"} mt={"5rem"}>
            <FontAwesomeIcon icon={faMagnifyingGlass} fontSize={"5rem"}/>
          </Flex>
        </>
      ) : (
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          columnGap={"50px"}
          rowGap={"50px"}
          as={"section"}
          w={"100%"}
          py={10}
        >
          {doctors.map((d) => (
            <Link  key={d.id} to={`${d.id}`} className="doc-img-link" data-testid={`link-${d.id}`}>
              <MainCard
                title={
                  <Heading size="md" color={"#181938"}>
                    {" "}
                    {`${d.firstName} ${d.lastName}`}
                  </Heading>
                }
                specialty={
                  <Text fontSize={"md"} color="#c34723" id={`${d.id}-specialtyName`} data-testid={d.id}>
                    {d.specialtyName}
                  </Text>
                }
                rating={<Text fontSize={"md"} data-testid={d.averageRating}>{(d.averageRating < 1 || d.averageRating > 5 ) ? "- -" : d.averageRating }</Text>}
                location={
                  <Text className="doc-location" fontSize={"md"} data-testid={d.address}>
                    {d.address}
                  </Text>
                }
                img={d.imageUrl}
                source={"docs"}
              />
            </Link>
          ))}
        </Grid>
      )}
    </>
  );
};

export default DoctorList;
