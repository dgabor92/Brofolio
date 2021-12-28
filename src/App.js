import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import AboutMe from './components/AboutMe';
import GoodAt from './components/AboutMe/GoodAt';
import Contact from './components/Contact';
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
          style={{
            backgroundImage: `url("./images/coach.jpeg")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center fixed',
            // opacity: '0.45',
          }}
        >
          {' '}
          <Box>
            <Text fontSize="5xl" pt="10rem" pb="10rem">
              Coach Tomi
            </Text>
          </Box>
        </Box>
        <AboutMe />
        <GoodAt />
        <Questions />
        <Contact />
      </MainLayout>
    </div>
  );
}

export default App;
