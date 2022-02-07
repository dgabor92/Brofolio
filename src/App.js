import {
  Text,
  Box,
  useColorModeValue as mode,
  Image,
  Heading,
} from '@chakra-ui/react';
import React from 'react';
import AboutMe from './components/AboutMe';
import GoodAt from './components/AboutMe/GoodAt';
import MainLayout from './components/MainLayout';
import Questions from './components/Questions';

function App() {
  return (
    <div>
      <MainLayout>
        <Box
          alignItems="center"
          textAlign="center"
          minH="50%"
          minW="100%"
          maxW="100%"
          bg={mode('rgb(44,92,135)', 'rgb(44,92,135)')}
        >
          <Box textAlign={'center'}>
            <Image src="/images/log.png" margin="0 auto" />
          </Box>
        </Box>
        <Box bg="blue.700" pt="5" pb="5">
          <Box
            maxW={{ base: 'md', md: '5xl' }}
            mx="auto"
            px={{ base: '4', md: 6 }}
          >
            <Box textAlign={'center'} p="2" color="white">
              <Heading size={'lg'} lineHeight="normal" textAlign="center">
                Üdvözöllek az oldalamon, engem Deutsch Tamásnak hívnak!
              </Heading>
            </Box>
          </Box>
        </Box>
        <AboutMe />
        <GoodAt />
        <Questions />
        <Text
          textAlign={'center'}
          p="4"
          fontSize="2rem"
          textDecoration="underline"
        >
          Fordulj hozzám bizalommal!
        </Text>
      </MainLayout>
    </div>
  );
}

export default App;
