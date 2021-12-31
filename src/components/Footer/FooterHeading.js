import React from 'react';
import { Heading, useColorModeValue } from '@chakra-ui/react';

const FooterHeading = (props) => {
  return (
    <Heading
      as="h4"
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize="sm"
      fontWeight="semibold"
      textTransform="uppercase"
      letterSpacing="wider"
      {...props}
    />
  );
};

export default FooterHeading;
