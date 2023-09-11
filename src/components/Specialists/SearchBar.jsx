import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
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
        direction={["column", "column", "row"]}
        alignItems={["center", "center", "end"]}
      >
        <Box width={["20rem", "25rem"]}>
          <FormLabel fontWeight={"bold"} m={"0"} fontSize={"16px"}>
            Specialist Name
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
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon-specialist"
              />
            </Box>
          </FormLabel>
        </Box>
        <Box width={["20rem", "25rem"]}>
          <FormLabel fontWeight={"bold"} m={"0"} fontSize={"16px"}>
            Specialty
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
          </FormLabel>
        </Box>
        <Box width={["20rem", "25rem"]}>
          <FormLabel fontWeight={"bold"} m={"0"} fontSize={"16px"}>
            City
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
          </FormLabel>
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
