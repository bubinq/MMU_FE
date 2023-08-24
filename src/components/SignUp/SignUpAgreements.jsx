import { useContext } from 'react';
import { CheckboxGroup, Stack, Checkbox, Flex, Tooltip } from "@chakra-ui/react";
import { QuestionIcon } from '@chakra-ui/icons'
import { AgreementsContext } from '../../contexts/AgreementsContext';

const SignUpAgreements = () => {
    const context = useContext(AgreementsContext);

    const handleCheckboxChange = () => {
        context.setIsAgreed(!context.isAgreed);
    };
    
    return (
        <CheckboxGroup colorScheme='yellow'>
            <Stack spacing={[1, 5]} direction={['column', 'column']}>
                <Flex  alignItems="center" justifyContent="space-around">
                    <Checkbox
                        value='age'
                        isAgreed={context.isAgreed} 
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
    );
};

export default SignUpAgreements;