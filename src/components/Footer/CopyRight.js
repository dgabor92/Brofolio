import { Text } from '@chakra-ui/react';
import React from 'react';

const CopyRight = () => {
  return (
    <Text fontSize="sm" color="white">
      &copy; {new Date().getFullYear()} Minden jog fenntartva
    </Text>
  );
};

export default CopyRight;
