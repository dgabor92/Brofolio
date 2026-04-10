import {
  Box,
  Link,
  Button,
  Image,
  Icon,
  Flex,
  Grid,
  GridItem,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import * as React from 'react';
import { useState } from 'react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import CopyRight from './CopyRight';
import SocialMediaLinks from './SocialMediaLinks';

export const Footer = () => {
  const [hidden, setHidden] = useState(true);

  const handleOnClick = () => {
    setHidden(!hidden);
  };
  return (
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
            {hidden === true ? (
              <Box p="2">
                <Button colorScheme="facebook" onClick={handleOnClick}>
                  Mutass többet
                </Button>
              </Box>
            ) : (
              <Box p="2" flexDirection="column">
                <Icon as={PhoneIcon} mr="2" width="6" height="6" />
                <Link textDecoration="underline" href="tel:+36306403461">
                  +36306403461
                </Link>
                <br />
                <Icon as={EmailIcon} mr="2" width="6" height="6" />
                <Link
                  textDecoration="underline"
                  href="mailto:deutschtamas92@gmail.com"
                >
                  deutschtamas92@gmail.com
                </Link>
              </Box>
            )}
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
};
