import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useFetcher } from "react-router-dom";

const SearchBar = ({
  searchTerms,
  setSearchTerms,
  specialties,
  cities,
  onSearch,
}) => {
  const fetcher = useFetcher();
  const handleTermsChange = (e) => {
    const fieldKey = e.target.name;
    const value = e.target.value;

    setSearchTerms((previousState) => ({
      ...previousState,
      [fieldKey]: value,
    }));
  };

  return (
    <fetcher.Form>
      <Flex
        mt={"2rem"}
        gap={["1rem", "2rem", "5rem"]}
        ml={["0rem", "0rem", "4rem"]}
        direction={["column", "column", "row"]}
        alignItems={["center", "center", "end"]}
      >
        <Box width={["20rem", "25rem"]}>
          <Text as="span" fontWeight={"bold"}>
            Specialist Name
          </Text>
          <Box pos={"relative"} size="lg">
            <Input
              bg={"white"}
              value={searchTerms.name}
              onChange={handleTermsChange}
              placeholder="Search by doctor's name"
              mt={["0.5rem", "1rem"]}
              name="name"
              size="lg"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          </Box>
        </Box>
        <Box width={["20rem", "25rem"]}>
          <Text as="span" fontWeight={"bold"}>
            Specialty
          </Text>
          <Select
            bg={"white"}
            placeholder="Select option"
            mt={["0.5rem", "1rem"]}
            size="lg"
            name="specialty"
            onChange={handleTermsChange}
            value={searchTerms.specialty}
          >
            {specialties?.content.map((s, index) => (
              <option key={index} value={s.id}>
                {s.name}
              </option>
            ))}
          </Select>
        </Box>
        <Box width={["20rem", "25rem"]}>
          <Text as="span" fontWeight={"bold"}>
            City
          </Text>
          <Select
            bg={"white"}
            placeholder="Select option"
            mt={["0.5rem", "1rem"]}
            size="lg"
            name="city"
            onChange={handleTermsChange}
          >
            {cities?.content.map((c, index) => (
              <option key={index} value={c.id}>
                {c.name}
              </option>
            ))}
          </Select>
        </Box>
        <Box display={"flex"} alignItems={"end"}>
          <Button
            variant={"signup"}
            type="submit"
            padding="1.5rem 2rem"
            onClick={(event) => onSearch(event)}
          >
            Search
          </Button>
        </Box>
      </Flex>
    </fetcher.Form>
  );
};

export default SearchBar;
