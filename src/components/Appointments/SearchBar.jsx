import { Box, Button, Flex, FormLabel, Input, Select } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useFetcher } from "react-router-dom";

const SearchBar = ({ searchTerms, setSearchTerms, specialties }) => {
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
      <Flex mt={"2rem"} gap={"2rem"} w={"85%"}>
        <Box width={["20rem", "25rem"]}>
          <FormLabel fontWeight={"bold"} m={"0"} fontSize={"16px"}>
            Specialist Name
            <Box pos={"relative"} size="lg">
              <Input
                bg={"white"}
                onChange={handleTermsChange}
                placeholder="Search by name"
                mt={"0.3rem"}
                name="name"
                border={"2px solid"}
                borderColor={"yellow.400"}
                _focusVisible={{ borderColor: "yellow.400", outline: "none" }}
                size="lg"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon"
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
              mt={"0.3rem"}
              size="lg"
              name="specialty"
              border={"2px solid"}
              borderColor={"yellow.400"}
              _active={{ borderColor: "yellow.400" }}
              _focusVisible={{ borderColor: "yellow.400", outline: "none" }}
              onChange={handleTermsChange}
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
            From
            <Input
              bg={"white"}
              type="date"
              onChange={handleTermsChange}
              mt={"0.3rem"}
              name="from"
              border={"2px solid"}
              borderColor={"yellow.400"}
              _active={{ borderColor: "yellow.400" }}
              _focusVisible={{ borderColor: "yellow.400", outline: "none" }}
              size="lg"
            />
          </FormLabel>
        </Box>
        <Box width={["20rem", "25rem"]}>
          <FormLabel fontWeight={"bold"} m={"0"} fontSize={"16px"}>
            To
            <Input
              bg={"white"}
              type="date"
              onChange={handleTermsChange}
              mt={"0.3rem"}
              name="to"
              border={"2px solid"}
              borderColor={"yellow.400"}
              _active={{ borderColor: "yellow.400" }}
              _focusVisible={{ borderColor: "yellow.400", outline: "none" }}
              size="lg"
            />
          </FormLabel>
        </Box>
        <Box display={"flex"} alignItems={"end"}>
          <Button variant={"signup"} type="submit" padding="1.5rem 2rem">
            Search
          </Button>
        </Box>
      </Flex>
    </fetcher.Form>
  );
};

export default SearchBar;
