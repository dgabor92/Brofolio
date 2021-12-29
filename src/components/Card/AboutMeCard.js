import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';

const AboutMeCard = (props) => {
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
        color={useColorModeValue('white', 'blue.900')}
        fontSize="sm"
        fontWeight="bold"
      >
        {props.title}
      </Text>
      <Text as="dd" fontSize="xl" lineHeight="1" my="4" textAlign="center">
        {props.value}
      </Text>
      <Text as="dd" color={useColorModeValue('rgb(44,82,130)', 'blue.700')}>
        {props.children}
      </Text>
    </Box>
  );
};

export default AboutMeCard;
