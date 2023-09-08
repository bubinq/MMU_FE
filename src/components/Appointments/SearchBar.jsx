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
      <Box
        mt={"2rem"}
        gap={["0.5rem", "0.5rem", "2rem"]}
        w={"100%"}
        display="flex"
        flexDirection={['column', 'column', 'row']}
      >
        <Box flex={1}>
          <FormLabel fontWeight={"bold"} m={"0"} fontSize={"16px"}>
            Specialist Name
            <Box pos={"relative"} size="lg" mt='0.3rem' display='flex' alignItems='center' >
              <Input
                bg={"white"}
                onChange={handleTermsChange}
                placeholder="Search by name"
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
        <Box flex={1}>
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
        <Box flex={1} display={['none', 'none', 'block']}>
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
        <Box flex={1} display={['none', 'none', 'block']}>
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
        <Flex display={['flex', 'flex', 'none']} justifyContent='space-between' gap='1rem'>
          <Box flex='1'>
            <FormLabel fontWeight={"bold"} m={"0"} fontSize={"16px"}>
              From
              <Input
                // w='100%'
                bg={"white"}
                type="date"

                onChange={handleTermsChange}
                mt={"0.3rem"}
                name="from"
                border={"2px solid"}
                borderColor={"yellow.400"}
                _active={{ borderColor: "yellow.400" }}
                _focusVisible={{ borderColor: "yellow.400", outline: "none" }}
                fontSize='12px'
                padding='0'
                px='7px'
              />
            </FormLabel>
          </Box>
          <Box flex='1'>
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
                // size="lg"
                fontSize='12px'
                padding='0'
                px='7px'
              />
            </FormLabel>
          </Box>
        </Flex>
        <Box display={"flex"} alignItems={"end"} mt='1rem' w={['100%','100%','auto']}>
          <Button variant={"signup"} type="submit" padding="1.5rem 2rem" w='100%'>
            Search
          </Button>
        </Box>
      </Box>
    </fetcher.Form>
  );
};

export default SearchBar;
