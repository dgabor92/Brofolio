import { Text } from '@chakra-ui/react';
import React from 'react';

const CopyRight = () => {
  return (
    <Text fontSize="sm" color="white">
      &copy; {new Date().getFullYear()} Envelope, Inc. All rights reserved.
    </Text>
  );
};

export default CopyRight;
