import {
  Box,
  Link,
  Image,
  Icon,
  Flex,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import CopyRight from './CopyRight';
import SocialMediaLinks from './SocialMediaLinks';
import Booking from '../Contact/Booking';

export const Footer = () => (
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
        <Flex alignItems="center">
          <Box>
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
          <Box>
            <Icon as={PhoneIcon} mr="2" width="6" height="6" />
            <Link textDecoration="underline" href="tel:+36306403461">
              +36306403461
            </Link>
          </Box>
          <Box>
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
