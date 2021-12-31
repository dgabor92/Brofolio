import { Box, useColorModeValue as mode, Image } from '@chakra-ui/react';
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
        <AboutMe />
        <GoodAt />
        <Questions />
      </MainLayout>
    </div>
  );
}

export default App;
