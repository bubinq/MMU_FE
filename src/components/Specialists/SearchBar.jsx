import { Box, Button, Flex, Input, Select, Text } from "@chakra-ui/react";

const SearchBar = ({
  searchTerms,
  setSearchTerms,
  specialties,
  cities,
  onSearch,
}) => {
  const handleTermsChange = (e) => {
    const fieldKey = e.target.name;
    const value = e.target.value;

    setSearchTerms((previousState) => ({
      ...previousState,
      [fieldKey]: value,
    }));
  };

  return (
    <Flex mt={"2rem"} gap={"5rem"}>
      <Box>
        <Text as="span">Specialist Name</Text>
        <Input
          value={searchTerms.name}
          onChange={handleTermsChange}
          placeholder="Search by doctor's name"
          mt={"1rem"}
          name="name"
          size="lg"
        />
      </Box>
      <Box width={"25rem"}>
        <Text as="span">Specialty</Text>
        <Select
          placeholder="Select option"
          mt={"1rem"}
          size="lg"
          name="specialty"
          onChange={handleTermsChange}
        >
          {specialties?.content.map((s, index) => (
            <option key={index} value={s.id}>
              {s.name}
            </option>
          ))}
        </Select>
      </Box>
      <Box width={"25rem"}>
        <Text as="span">City</Text>
        <Select
          placeholder="Select option"
          mt={"1rem"}
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
          fontSize={"16px"}
          padding="1.5rem 2rem"
          bg={"blue.300"}
          onClick={onSearch}
        >
          Search
        </Button>
      </Box>
    </Flex>
  );
};

export default SearchBar;
