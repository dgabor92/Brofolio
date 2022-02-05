import React from 'react';
import { Box, useColorModeValue } from '@chakra-ui/react';

const Card = (props) => {
  return (
    <Box
      as="dl"
      bg={useColorModeValue('rgb(187,188,182)', 'rgb(187,188,182)')}
      shadow="2xl"
      // border="1px solid"
      // p="6"
      rounded="lg"
    >
      {props.children}
    </Box>
  );
};

export default Card;
