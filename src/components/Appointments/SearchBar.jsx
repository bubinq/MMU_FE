import { Box, Button, Flex, FormLabel, Input, Select } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useFetcher } from "react-router-dom";
import { requestExecuter } from "../../utils";
import appointmentsService from "../../services/appointments";

const SearchBar = ({ searchTerms, setSearchTerms, specialties, onSearch }) => {
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
        flexDirection={["column", "column", "row"]}
      >
        <Box flex={1}>
          <FormLabel fontWeight={"bold"} m={"0"} fontSize={"16px"}>
            Specialist Name
            <Box
              pos={"relative"}
              size="lg"
              mt="0.3rem"
              display="flex"
              alignItems="center"
            >
              <Input
                bg={"white"}
                onChange={handleTermsChange}
                placeholder="Search by name"
                name="name"
                value={searchTerms.name}
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
              value={searchTerms.specialty}
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
        <Flex
          flex={1}
          display={["flex", "flex"]}
          justifyContent="space-between"
          alignItems="flex-end"
          gap="1rem"
        >
          <FormLabel fontWeight={"bold"} fontSize={"16px"} w={"50%"} m={0}>
            From
            <Input
              bg={"white"}
              type="date"
              onChange={handleTermsChange}
              mt={"0.3rem"}
              name="from"
              value={searchTerms.from}
              border={"2px solid"}
              borderColor={"yellow.400"}
              _active={{ borderColor: "yellow.400" }}
              _focusVisible={{ borderColor: "yellow.400", outline: "none" }}
              px="7px"
              height={"3rem"}
            />
          </FormLabel>
          <FormLabel fontSize={"16px"} fontWeight={"bold"} w={"50%"} m={0}>
            To
            <Input
              bg={"white"}
              type="date"
              onChange={handleTermsChange}
              mt={"0.3rem"}
              value={searchTerms.to}
              name="to"
              border={"2px solid"}
              borderColor={"yellow.400"}
              _active={{ borderColor: "yellow.400" }}
              _focusVisible={{ borderColor: "yellow.400", outline: "none" }}
              px="7px"
              height={"3rem"}
            />
          </FormLabel>
        </Flex>
        <Box
          display={"flex"}
          alignItems={"end"}
          mt="1rem"
          w={["100%", "100%", "auto"]}
        >
          <Button
            variant={"signup"}
            type="submit"
            padding="1.5rem 2rem"
            w="100%"
            onClick={(event) => onSearch(event)}
          >
            Search
          </Button>
        </Box>
      </Box>
    </fetcher.Form>
  );
};

export default SearchBar;

export const getAppointmentsSettings = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());

  const data = await requestExecuter(
    appointmentsService.searchDocs({ specialty: formData.id })
  );

  return data.content;
};
