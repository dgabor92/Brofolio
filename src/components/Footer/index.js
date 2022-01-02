import {
  Box,
  Link,
  Image,
  Icon,
  Flex,
  Grid,
  GridItem,
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
      <Grid
        templateColumns="repeat(3,1fr)"
        gap={{ base: 2, lg: 24 }}
        padding="8"
        justifyContent="space-between"
        textAlign="center"
      >
        <GridItem colSpan={[3, 2, 1]}>
          <Box p="2">
            <Image margin="0 auto" src="/images/logo.png" height="50px" />
          </Box>
          <Box p="2">
            <Icon as={PhoneIcon} mr="2" width="6" height="6" />
            <Link textDecoration="underline" href="tel:+36306403461">
              +36306403461
            </Link>
          </Box>
          <Box p="2">
            <Icon as={EmailIcon} mr="2" width="6" height="6" />
            <Link
              textDecoration="underline"
              href="mailto:coaching.dndnew@gmail.com"
            >
              coaching.dndnew@gmail.com
            </Link>
          </Box>
        </GridItem>
        <GridItem colSpan={[3, 2, 1]}>
          <Box pt={{ base: 2, lg: 12 }}>
            <Booking />
          </Box>
        </GridItem>
        <GridItem colSpan={[3, 2, 1]}>
          <Box p="2">
            <SocialMediaLinks />
          </Box>
          <Box pt="2">
            <CopyRight />
          </Box>
        </GridItem>
      </Grid>
    </Flex>
  </Flex>
);
