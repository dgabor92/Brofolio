import {
  Text,
  Button,
  Box,
  Link,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';

const handleTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const Footer = () => (
  <Box bg={mode('blue.700', 'blue.900')}>
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      py="12"
      maxW="7xl"
      px={{ base: '4', md: '8' }}
    >
      <Box textAlign="center">
        <Button onClick={handleTop}>To the top</Button>
      </Box>
      <Box color="white" textAlign="center" pt="2">
        <Text colorScheme="whiteAlpha">
          Powered by{' '}
          <Link href="https://www.linkedin.com/in/g%C3%A1bor-deutsch-aa3952152/">
            Gábor
          </Link>
        </Text>
      </Box>
    </Box>
  </Box>
);
