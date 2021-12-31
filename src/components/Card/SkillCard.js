import React from 'react';
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const SkillCard = (props) => {
  return (
    <Box
      bg={useColorModeValue('blue.700', 'gray.700')}
      // px="6"
      shadow="base"
      textAlign={'center'}
      rounded="lg"
      opacity="0.9"
      // borderRadius="full"
      border="2px solid rgb(197,169,101)"
    >
      <Heading
        as="h6"
        colorScheme={'whiteAlpha'}
        size="sm"
        my="3"
        p="2"
        textColor={'white'}
      >
        {props.value}
      </Heading>
    </Box>
  );
};

export default SkillCard;
