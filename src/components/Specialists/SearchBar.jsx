import { Button, Flex, Box, FormLabel, Input, Select } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useFetcher } from "react-router-dom";

const SearchBar = ({
  searchTerms,
  setSearchTerms,
  specialties,
  states,
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
        gap={["1rem", "2rem", "2rem"]}
        w={["70%", "80%", "100%"]}
        mx={"auto"}
        direction={["column", "column", "row"]}
        alignItems={["center", "stretch", "end"]}
      >
        <Box flex={1} transition="0.3s all"  w={["70%", "auto"]}>
          <FormLabel fontWeight={"bold"} m={"0"} fontSize={"16px"}  textAlign={["center", "left"]}>
            Specialist Name
            <Flex pos={"relative"} size="lg">
              <Input
                bg={"white"}
                w={"100%"}
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
            </Flex>
          </FormLabel>
        </Box>
        <Box flex={1} transition="0.3s all"  w={["70%", "auto"]}>
          <FormLabel fontWeight={"bold"} m={"0"} fontSize={"16px"}  textAlign={["center", "left"]}>
            Specialty
            <Select
              bg={"white"}
              w={"100%"}
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
        <Flex
          flex={searchTerms.state ? 2 : 1}
          w={["70%", "auto"]}
          direction={["column", "row", "row"]}
          gap={["1rem", "2rem"]}
          transition="0.3s all"
        >
          <Box flex={1} transition="0.3s all">
            <FormLabel
              fontWeight={"bold"}
              m={"0"}
              textAlign={["center", "left"]}
              fontSize={"16px"}
            >
              State
              <Select
                bg={"white"}
                placeholder="Select option"
                mt={["0.5rem", "1rem"]}
                size="lg"
                name="state"
                onChange={handleTermsChange}
                value={searchTerms.state}
              >
                {states?.content.map((c, index) => (
                  <option key={index} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </Select>
            </FormLabel>
          </Box>
          <AnimatePresence>
            {(searchTerms.state && cities) && (
              <Box
                as={motion.div}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                flex={1}
                transition="0.3s all"
              >
                <FormLabel
                  textAlign={["center", "left"]}
                  fontWeight={"bold"}
                  m={"0"}
                  fontSize={"16px"}
                >
                  City
                  <Select
                    w={"100%"}
                    bg={"white"}
                    placeholder="Select option"
                    mt={["0.5rem", "1rem"]}
                    size="lg"
                    name="city"
                    onChange={handleTermsChange}
                    value={searchTerms.city}
                  >
                    {cities?.map((c, index) => (
                      <option key={index} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </Select>
                </FormLabel>
              </Box>
            )}
          </AnimatePresence>
        </Flex>

        <Box flex={1} alignItems={"end"} mx={"auto"} transition="0.3s all ease" mt={["1.5rem", "auto"]}>
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
