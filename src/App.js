import { Box } from '@chakra-ui/react';
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
            backgroundImage: `url("./images/logo.png")`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '',
            backgroundPosition: 'center center',
            backgroundColor: 'rgb(44,92,135)',
            paddingTop: '10rem',
            paddingBottom: '10rem',
          }}
        >
          {/* {' '}
          <Box>
            <Text fontSize="5xl" pt="10rem" pb="10rem">
              D&D Coaching
            </Text>
          </Box> */}
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
