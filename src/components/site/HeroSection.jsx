import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaArrowRight, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { heroLinks } from '../../content/siteContent';
import { ContactLine } from './ContactLine';
import { Reveal } from './Reveal';

export function HeroSection() {
  return (
    <Box
      as="header"
      position="relative"
      overflow="hidden"
      bgGradient="linear(135deg, #fbf7ef 0%, #f6efe2 45%, #e6d5b6 100%)"
    >
      <Box
        position="absolute"
        inset="0"
        bg="radial-gradient(circle at top left, rgba(14, 43, 86, 0.18), transparent 36%), radial-gradient(circle at 85% 20%, rgba(194, 150, 62, 0.22), transparent 28%), radial-gradient(circle at 70% 90%, rgba(14, 43, 86, 0.12), transparent 32%)"
      />
      <Container maxW="7xl" position="relative" px={{ base: 5, md: 8 }}>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          py={{ base: 5, md: 7 }}
          gap="4"
        >
          <HStack spacing="3">
            <Image
              src="/images/log.png"
              alt="D&D Coaching logó"
              boxSize={{ base: '42px', md: '52px' }}
              objectFit="contain"
            />
            <Box>
              <Text fontWeight="semibold" letterSpacing="0.08em">
                D&amp;D Coaching
              </Text>
              <Text fontSize="sm" color="slate.600">
                Deutsch Tamás
              </Text>
            </Box>
          </HStack>

          <HStack spacing="8" display={{ base: 'none', md: 'flex' }}>
            {heroLinks.map((link) => (
              <Link key={link.href} href={link.href} color="slate.700" fontWeight="medium">
                {link.label}
              </Link>
            ))}
          </HStack>
        </Flex>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 12, lg: 16 }}
          alignItems="center"
          minH={{ lg: 'calc(100svh - 96px)' }}
          pb={{ base: 14, lg: 20 }}
        >
          <Stack
            spacing={{ base: 6, md: 8 }}
            maxW={{ base: 'full', lg: 'xl' }}
            pt={{ base: 4, lg: 0 }}
            align="start"
          >
            <Reveal>
              <Box
                display="inline-flex"
                alignItems="center"
                gap="2"
                px="3"
                py="2"
                borderRadius="full"
                bg="rgba(15, 23, 42, 0.08)"
                color="slate.700"
                fontSize={{ base: 'xs', sm: 'sm' }}
                fontWeight="medium"
                width="100%"
                maxW={{ base: 'full', sm: 'fit-content' }}
              >
                <Icon as={FaArrowRight} />
                Coaching vezetőknek, döntéshozóknak és elakadásokhoz
              </Box>
            </Reveal>

            <Reveal delay={0.08}>
              <Heading
                as="h1"
                fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                lineHeight={{ base: '0.98', md: '0.95' }}
                letterSpacing="-0.04em"
                color="slate.950"
                maxW={{ base: '11ch', sm: '12ch', md: '13ch' }}
              >
                Egy tisztább tér, ahol a gondolatból irány lesz.
              </Heading>
            </Reveal>

            <Reveal delay={0.16}>
              <Text fontSize={{ base: 'lg', md: 'xl' }} color="slate.700">
                Olyan coaching folyamatot építek, ahol a figyelem, a
                strukturáltság és a bizalom együtt dolgozik azért, hogy
                könnyebben dönts, tisztábban láss és fenntarthatóbban működj.
              </Text>
            </Reveal>

            <Reveal delay={0.24}>
              <Button
                as="a"
                href="#segitek"
                size="lg"
                variant="outline"
                borderColor="slate.300"
                color="slate.800"
                _hover={{ bg: 'whiteAlpha.700' }}
                w={{ base: 'full', sm: 'auto' }}
              >
                Miben tudok segíteni?
              </Button>
            </Reveal>

            <Reveal delay={0.32}>
              <Stack spacing="3" color="slate.600" align="start" w="full">
                <ContactLine href="tel:+36306403461" icon={FaPhoneAlt}>
                  +36 30 640 3461
                </ContactLine>
                <ContactLine
                  href="mailto:deutschtamas92@gmail.com"
                  icon={FaEnvelope}
                >
                  deutschtamas92@gmail.com
                </ContactLine>
              </Stack>
            </Reveal>
          </Stack>

          <Reveal delay={0.12}>
            <Box position="relative" justifySelf="center" maxW="540px">
              <Box
                position="absolute"
                inset="10% 8% 0"
                bg="rgba(15, 23, 42, 0.08)"
                filter="blur(45px)"
                borderRadius="full"
              />
              <Box
                position="relative"
                borderRadius="3xl"
                overflow="hidden"
                border="1px solid rgba(15, 23, 42, 0.12)"
                boxShadow="0 30px 100px rgba(15, 23, 42, 0.18)"
                bg="white"
              >
                <Image
                  src="/images/tesa3.png"
                  alt="Deutsch Tamás portré"
                  width="100%"
                  height={{ base: '420px', md: '560px' }}
                  objectFit="cover"
                  objectPosition="center top"
                />
                <Box
                  position="absolute"
                  inset="auto 18px 18px 18px"
                  p="5"
                  borderRadius="2xl"
                  bg="rgba(15, 23, 42, 0.76)"
                  color="white"
                  backdropFilter="blur(10px)"
                >
                  <Text fontSize="lg" fontWeight="semibold" mb="2">
                    Deutsch Tamás
                  </Text>
                  <Text
                    fontSize="sm"
                    textTransform="uppercase"
                    letterSpacing="0.18em"
                    mb="1"
                  >
                    Coaching fókusz
                  </Text>
                  <Text fontSize="lg" fontWeight="semibold">
                    nyitott beszélgetés, stabil keret, kézzelfogható következő
                    lépések.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Reveal>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
