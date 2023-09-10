import {
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Flex,
  Text,
  Box,
  useDisclosure,
  AlertDialog,
  Button,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from 'react'
const AppointmentItem = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const page = 'upcoming'
  return (
    <AccordionItem mt='1rem'>
      <Box
        display="flex"
        borderRadius="4px"
        border="2px solid #f4b400"
        px="24px"
        py="10px"
        flexDirection={["column", "row"]}
        rowGap={["0.5rem", "0"]}
      >
        <Box
          mr={["0", "34px"]}
          textAlign={["center", "left"]}
          display={["flex", "block"]}
          justifyContent={["space-between", "initial"]}
        >
          <Text fontWeight="700">Date</Text>
          <Text>{data.date}</Text>
        </Box>
        <Box
          textAlign={["center", "left"]}
          display={["flex", "block"]}
          justifyContent={["space-between", "initial"]}
        >
          <Text fontWeight="700">Doctor</Text>
          <Text>{data.doctor}</Text>
        </Box>
        <AccordionButton
          w="auto"
          display="block"
          ml={["0", "auto"]}
          borderRadius="5px"
        >
          Details
          <AccordionIcon />
        </AccordionButton>
      </Box>

      <AccordionPanel
        px="24px"
        py="20px"
        border="2px solid #f4b400"
        borderBottomRadius="4px"
      >
        <Box
          display="flex"
          alignItems="center"
          flexDirection={["column", "row"]}
          justifyContent="space-between"
          rowGap={["1rem", "0"]}
          columnGap={["0", "0.7rem"]}
        >
          <Box>
            <Box
              fontWeight="700"
              textAlign={["center", "left"]}
              display='flex'
              alignItems='center'
              mt="5px"
              justifyContent={['center', 'left']}
            >
              Address:
            </Box>

            <Box
              display="flex"
              alignItems='center'
            // ml='2rem'
            // key={x}
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                fontSize={"1.75rem"}
                color={"#5b4a0d"}
              />
              <Text
                ml="5px"
                lineHeight="16px"
                fontSize={["14px", "14px", "14px", "16px"]}
                textAlign='left'
              >
                New York Brato
              </Text>
            </Box>
          </Box>


          {page === "upcoming" && (
            <>
              <Button
                display="block"
                ml="auto"
                bg="#D71C21"
                color='#fff'
                _hover={{
                  bg: "#FF1B00",
                }}
                onClick={onOpen}
                minW="auto"
                mx={["auto", "0"]}
                fontSize={["12px", "13px", "15px"]}
                w={['100%', 'auto']}
              >
                Cancel Appointment
              </Button>
              <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isCentered
                motionPreset="slideInBottom"
              >
                <AlertDialogOverlay>
                  <AlertDialogContent width={["90%", "auto"]}>
                    <AlertDialogHeader
                      fontSize="lg"
                      fontWeight="bold"
                    >
                      Cancel Appointment
                    </AlertDialogHeader>
                    <AlertDialogBody>Are you sure?</AlertDialogBody>
                    <AlertDialogFooter>
                      <Button
                        ref={cancelRef}
                        onClick={onClose}
                      >
                        Back
                      </Button>
                      <Button
                        // onClick={() => onCancel()}
                        bg="#D71C21"
                        ml="10px"
                        color='#fff'
                        _hover={{
                          _disabled: { bg: "red" },
                          bg: "#FF1B00",
                        }}
                      >
                        Cancel appointment
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialogOverlay>
              </AlertDialog>
            </>
          )}
        </Box>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default AppointmentItem;
