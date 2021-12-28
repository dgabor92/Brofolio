import React from 'react';
import { Button, Text, Icon, Box, Link } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';

const Contact = () => {
  return (
    <>
      <Box textAlign="center" alignItems="center" p="8">
        <Text fontSize="2xl">Elérhetőségeim:</Text>
        <Box>
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
              href="mailto:deutschtamas92@gmail.com"
            >
              deutschtamas92@gmail.com
            </Link>
          </Box>
        </Box>
        <Box pt="2">
          <Button colorScheme="whiteAlpha" backgroundColor="blue.700">
            Időpont foglalás
          </Button>
          <Text pt="2" fontSize="3xl">
            Fordulj hozzám bizalommal!
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
