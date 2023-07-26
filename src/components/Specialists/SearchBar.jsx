import { Box, Flex, Input, Select, Text } from "@chakra-ui/react";
import { useState } from "react";

const SearchBar = ({ setSearchTerms, specialties = [], cities = [] }) => {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [city, setCity] = useState("");

  const handleCityChange = (e) => {
    const city = e.target.value;
    setCity(city);
    const delta = {
      name: name,
      specialty: specialty,
      city: city,
    };
    setSearchTerms(delta);
  };

  const handleSpecialtyChange = (e) => {
    const specialty = e.target.value;
    setSpecialty(specialty);
    const delta = {
      name: name,
      specialty: specialty,
      city: city,
    };
    setSearchTerms(delta);
  };

  const handleNameChange = (e) => {
    const name = e.target.value;
    setName(name);
    setSearchTerms({
      name: name,
      specialty: specialty,
      city: city,
    });
  }

  return (
    <Flex mt={"2rem"} gap={"5rem"}>
      <Box>
        <Text as="span">Specialist Name</Text>
        <Input
          value={name}
          onChange={handleNameChange}
          placeholder="Search by doctor's name"
          mt={"1rem"}
          size="lg"
        />
      </Box>
      <Box width={"25rem"}>
        <Text as="span">Specialty</Text>
        <Select
          placeholder="Select option"
          mt={"1rem"}
          size="lg"
          onChange={handleSpecialtyChange}
        >
          {specialties.map((s, index) => (
            <option key={index}>{index + 1}</option>
          ))}
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </Box>
      <Box width={"25rem"}>
        <Text as="span">City</Text>
        <Text as="span">Specialty</Text>
        <Select
          placeholder="Select option"
          mt={"1rem"}
          size="lg"
          onChange={handleCityChange}
        >
          {cities.map((c, index) => (
            <option key={index} value={c.id}>
              Option {index + 1}
            </option>
          ))}
          <option value="option4">Option 4</option>
          <option value="option5">Option 5</option>
          <option value="option6">Option 6</option>
        </Select>
      </Box>
    </Flex>
  );
};

export default SearchBar;
