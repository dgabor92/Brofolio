import React from 'react';
import { Box, Text, useColorModeValue } from '@chakra-ui/react';

const TextCard = (props) => {
  return (
    <Box
      as="dl"
      bg={useColorModeValue('rgb(197,169,101)', 'rgb(26,54,93)')}
      p="6"
      rounded="lg"
      shadow="md"
    >
      <Text
        as="dt"
        fontSize="xl"
        lineHeight="normal"
        fontWeight="bold"
        pt="2"
        pb="2"
      >
        {props.title}
      </Text>
      <Text as="dd" fontSize={'xl'} lineHeight={1} my="4" textAlign={'center'}>
        {props.value}
      </Text>
    </Box>
  );
};

export default TextCard;
