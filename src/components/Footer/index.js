// import { Button, Box, useColorModeValue as mode } from '@chakra-ui/react';
import {
  Box,
  Text,
  Link,
  Image,
  Stack,
  Icon,
  StackDivider,
  Flex,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import Contact from '../Contact';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import CopyRight from './CopyRight';
import SocialMediaLinks from './SocialMediaLinks';
import Booking from '../Contact/Booking';

export const Footer = () => (
  // <Box bg={mode('blue.700', 'blue.900')}>
  //   <Box
  //     as="footer"
  //     role="contentinfo"
  //     mx="auto"
  //     py="12"
  //     maxW="7xl"
  //     px={{ base: '4', md: '8' }}
  //     // bg={mode('blue.700', 'blue.900')}
  //   >
  //     <Box color="white" textAlign="center" pt="2">
  //       <Text colorScheme="whiteAlpha">
  //         Powered by{' '}
  //         <Link href="https://www.linkedin.com/in/g%C3%A1bor-deutsch-aa3952152/">
  //           Gábor
  //         </Link>
  //       </Text>
  //     </Box>
  //   </Box>
  // </Box>
  <Flex direction="column" bg={mode('gray.100', 'gray.800')}>
    <Flex
      align="center"
      bg={mode('blue.700', 'blue.900')}
      color="white"
      px="6"
      minH="22"
      direction={'column'}
    >
      <Flex justify="space-between" align="center" w="full">
        <Flex alignItems="center" pr={1}>
          <Box p="2">
            <Image src="/images/logo.png" height="50px" />
          </Box>
        </Flex>
        <Box pt="8">
          <Booking />
        </Box>
        <Box p="2">
          <SocialMediaLinks />
        </Box>
      </Flex>
      <Flex alignItems={'center'} width="full" justify="space-between">
        <Flex direction={'column'}>
          <Box p="4">
            <Icon as={PhoneIcon} mr="2" width="6" height="6" />
            <Link textDecoration="underline" href="tel:+36306403461">
              +36306403461
            </Link>
          </Box>
          <Box p="4">
            <Icon as={EmailIcon} mr="2" width="6" height="6" />
            <Link
              textDecoration="underline"
              href="mailto:coaching.dndnew@gmail.com"
            >
              coaching.dndnew@gmail.com
            </Link>
          </Box>
        </Flex>
        <CopyRight />
      </Flex>
    </Flex>
  </Flex>
);
