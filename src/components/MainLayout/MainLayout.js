import {
  Flex,
  Box,
  Spacer,
  Image,
  Container,
  useColorModeValue as mode,
  useColorMode,
  IconButton,
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Footer } from '../Footer';

const Layout = (props) => {
  const globalWidth = '9xl';
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex direction="column" bg={mode('gray.100', 'gray.800')}>
      <Flex
        align="center"
        bg={mode('blue.700', 'blue.900')}
        color="white"
        px="6"
        minH="16"
      >
        <Flex justify="space-between" align="center" w="full">
          <Flex alignItems="center" pr={1}>
            <Box p="2">
              <Image src="/images/logo.png" height="50px" />
            </Box>
          </Flex>
          <IconButton
            onClick={toggleColorMode}
            color={mode('gray.50', 'gray.800')}
            bg="none"
            aria-label="Toggle dark mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          />
        </Flex>
      </Flex>
      <Container
        p="0"
        minH="75vh"
        maxW={globalWidth}
        // p={4}
      >
        {props.children}
      </Container>
      <Spacer />
      <Footer />
    </Flex>
  );
};

export default Layout;
