import { chakra, useColorModeValue, Image } from '@chakra-ui/react';
import * as React from 'react';

const Logo = (props) => {
  return (
    <chakra.svg
      color={useColorModeValue('blue.500', 'blue.300')}
      aria-hidden
      viewBox="0 0 123 24"
      fill="none"
      h="6"
      flexShrink={0}
      {...props}
    >
      {/* <Image src="/images/logo.png/> */}
    </chakra.svg>
  );
};

export default Logo;
