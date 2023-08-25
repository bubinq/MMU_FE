import { useContext } from 'react';
import { CheckboxGroup, Stack, Checkbox, Flex, Tooltip, Link, Text, Box } from "@chakra-ui/react";
import { QuestionIcon } from '@chakra-ui/icons'
import { AgreementsContext } from '../../contexts/AgreementsContext';

const SignUpAgreements = () => {
    const context = useContext(AgreementsContext);

    const handleCheckboxChange = () => {
        context.setIsAgreed(!context.isAgreed);
    };
    
    return (
        <>
        <CheckboxGroup colorScheme='yellow'>
            <Stack spacing={[1, 5]} direction={['column', 'column']}>
                <Flex  alignItems="center">
                    <Checkbox
                        value='age'
                        mr={"2"}
                        onChange={handleCheckboxChange}>
                            I confirm that I am at least 18 years old *

                    </Checkbox>
                    <Tooltip label='To provide you with the best possible care and respect your autonomy, we require users to be above 18 years old for booking doctor appointments. This ensures you can make informed decisions about your health. Thank you for understanding!' fontSize='sm'>
                        <QuestionIcon />
                    </Tooltip>
                </Flex>

                {/* <Checkbox value=''>I have read and agree to the Privacy Policy</Checkbox>
                <Checkbox value=''>I have read and agree to the Terms and Conditions</Checkbox> */}
            </Stack>
        </CheckboxGroup>
        <Box fontSize="sm">
            <Text as="span">By clicking Sign Up, you agree to our</Text>
            <Link as="span" ml="1" mr="1" color="red">Terms and Conditions</Link>
            <Text as="span">and our</Text>
            <Link as="span" ml="1" color="red">Privacy Policy</Link>
        </Box>
        </>
    );
};

export default SignUpAgreements;