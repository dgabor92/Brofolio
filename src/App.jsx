import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  chakra,
} from '@chakra-ui/react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  FaArrowRight,
  FaCheck,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from 'react-icons/fa';

const MotionBox = chakra(motion.div);

const services = [
  {
    title: 'Siker és önazonosság',
    text: 'Ha azt érzed, hogy kifelé minden rendben van, de belül mégis feszít valami, segítek tisztábban látni, mi hajt és mi tart vissza.',
  },
  {
    title: 'Célkitűzés',
    text: 'A nagy, ködös elképzeléseket kézzelfogható, követhető célokra bontjuk, hogy az első lépés is egyértelmű legyen.',
  },
  {
    title: 'Munkamánia és terhelés',
    text: 'Amikor a munka átcsúszik állandó túlterhelésbe, újra lehet rendezni a ritmust, a fókuszt és a határokat.',
  },
  {
    title: 'Időgazdálkodás',
    text: 'A túl sok feladat helyett egy működőbb rendszerre állunk át, hogy ne csak sűrű legyen a nap, hanem eredményes is.',
  },
  {
    title: 'Stresszkezelés',
    text: 'A nyomás alatt is maradhat mozgástered, ha megtaláljuk, nálad mi segít visszanyerni a kontrollt és a nyugalmat.',
  },
];

const strengths = [
  'Aktív hallgatás',
  'Érzelmi intelligencia',
  'Kérdezéstechnika',
  'Asszertív kommunikáció',
  'Vezetőtámogatás',
  'Együttműködés',
  'Alkalmazkodóképesség',
  'Döntéstámogatás',
];

const testimonials = [
  {
    name: 'Krisztián',
    quote:
      'A közös munka segített rendezni a helyzeteket és a megoldások felé fordítani a figyelmet.',
  },
  {
    name: 'Gábor',
    quote:
      'A gyakorlatoknak köszönhetően sokkal összeszedettebben és magabiztosabban tudtam belépni a beszélgetésbe.',
  },
  {
    name: 'Norbert',
    quote:
      'Az ülések végére világosabb lett, hogyan lehet egy nehéz helyzetet nyugodtan és tudatosan kezelni.',
  },
];

const steps = [
  'Rövid helyzetfeltárás: mi az, ami most a legfontosabb?',
  'Fókuszálás: mit érdemes megtartani, és mit érdemes elengedni?',
  'Akció: egy világos, következő lépés, amivel már el lehet indulni.',
];

function SectionLabel({ children }) {
  return (
    <Text
      textTransform="uppercase"
      letterSpacing="0.22em"
      fontSize="xs"
      fontWeight="semibold"
      color="brand.500"
    >
      {children}
    </Text>
  );
}

function SectionHeading({
  label,
  title,
  text,
  titleColor = 'slate.900',
  textColor = 'slate.600',
}) {
  return (
    <Stack spacing="4" maxW="3xl">
      <SectionLabel>{label}</SectionLabel>
      <Heading size="2xl" lineHeight="1.05" color={titleColor}>
        {title}
      </Heading>
      <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor}>
        {text}
      </Text>
    </Stack>
  );
}

function SoftCard({ children, ...props }) {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.92)"
      border="1px solid rgba(15, 23, 42, 0.08)"
      borderRadius="2xl"
      boxShadow="0 10px 30px rgba(15, 23, 42, 0.04)"
      overflow="hidden"
      w="full"
      h="fit-content"
      alignSelf="start"
      {...props}
    >
      {children}
    </Box>
  );
}

function Reveal({ children, delay = 0 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return children;
  }

  return (
    <MotionBox
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionBox>
  );
}

function App() {
  return (
    <Box minH="100vh" bg="surface.50" color="slate.900">
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
              <Link href="#rolam" color="slate.700" fontWeight="medium">
                Rólam
              </Link>
              <Link href="#segitek" color="slate.700" fontWeight="medium">
                Segítek
              </Link>
              <Link href="#kapcsolat" color="slate.700" fontWeight="medium">
                Kapcsolat
              </Link>
            </HStack>
          </Flex>

          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 12, lg: 16 }}
            alignItems="center"
            minH={{ lg: 'calc(100svh - 96px)' }}
            pb={{ base: 14, lg: 20 }}
          >
            <Stack spacing="8" maxW="xl" pt={{ base: 4, lg: 0 }}>
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
                  fontSize="sm"
                  fontWeight="medium"
                  width="fit-content"
                >
                  <Icon as={FaArrowRight} />
                  Coaching vezetőknek, döntéshozóknak és elakadásokhoz
                </Box>
              </Reveal>

              <Reveal delay={0.08}>
                <Heading
                  as="h1"
                  size="4xl"
                  lineHeight="0.95"
                  letterSpacing="-0.04em"
                  color="slate.950"
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
                <HStack spacing="3" flexWrap="wrap">
                  <Button
                    as="a"
                    href="#segitek"
                    size="lg"
                    variant="outline"
                    borderColor="slate.300"
                    color="slate.800"
                    _hover={{ bg: 'whiteAlpha.700' }}
                  >
                    Miben tudok segíteni?
                  </Button>
                </HStack>
              </Reveal>

              <Reveal delay={0.32}>
                <HStack spacing="5" color="slate.600" flexWrap="wrap">
                  <HStack spacing="2">
                    <Icon as={FaPhoneAlt} />
                    <Link href="tel:+36306403461">+36 30 640 3461</Link>
                  </HStack>
                  <HStack spacing="2">
                    <Icon as={FaEnvelope} />
                    <Link href="mailto:deutschtamas92@gmail.com">
                      deutschtamas92@gmail.com
                    </Link>
                  </HStack>
                </HStack>
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

      <Box as="main">
        <Container maxW="7xl" px={{ base: 5, md: 8 }}>
          <Reveal>
            <SimpleGrid
              id="rolam"
              columns={{ base: 1, lg: 2 }}
              spacing={{ base: 8, lg: 14 }}
              py={{ base: 16, md: 24 }}
              alignItems="start"
            >
              <SectionHeading
                label="Rólam"
                title="Partneri, nyugodt és célratörő coaching."
                text="Vezetőként és coachként is abban hiszek, hogy a jó kérdés, a valódi figyelem és az őszinte visszajelzés együtt tud elmozdítani egy helyzetet."
              />

              <Stack spacing="5" fontSize={{ base: 'md', md: 'lg' }} color="slate.700">
                <Text>
                  A coaching számomra nem tanácsadás, hanem együttműködés: egy
                  olyan tér, ahol a meglévő erőforrásaidat és a számodra valóban
                  fontos irányokat tudjuk rendszerezni.
                </Text>
                <Text>
                  Akkor is hasznos lehet, ha teljesítményt akarsz növelni, ha
                  egy döntés előtt állsz, vagy ha egyszerűen csak szeretnél
                  kiszállni a túlterheltségből és tisztábban gondolkodni.
                </Text>
                <HStack spacing="3" flexWrap="wrap" pt="2">
                  {['vezetői fókusz', 'önismeret', 'cselekvés'].map((item) => (
                    <Box
                      key={item}
                      px="4"
                      py="2"
                      borderRadius="full"
                      bg="white"
                      border="1px solid rgba(15, 23, 42, 0.08)"
                      boxShadow="sm"
                      color="slate.700"
                    >
                      {item}
                    </Box>
                  ))}
                </HStack>
              </Stack>
            </SimpleGrid>
          </Reveal>
        </Container>

        <Box bg="white">
          <Container maxW="7xl" px={{ base: 5, md: 8 }}>
            <Reveal>
              <SimpleGrid
                id="segitek"
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, lg: 14 }}
                py={{ base: 16, md: 24 }}
              >
                <SectionHeading
                  label="Támogatási területek"
                  title="Hol dolgozunk együtt?"
                  text="Nem egy nagy, zsúfolt listában gondolkodom, hanem néhány világos fókuszban, ahol érdemi változás történhet."
                />

                <Box>
                  <Stack spacing="0" divider={<Divider borderColor="slate.200" />}>
                    {services.map((service, index) => (
                      <Flex key={service.title} gap="5" py="5" align="start">
                        <Text
                          minW="10"
                          fontSize="sm"
                          fontWeight="semibold"
                          color="brand.500"
                        >
                          0{index + 1}
                        </Text>
                        <SoftCard>
                          <Box p={{ base: 4, md: 5 }}>
                            <Heading as="h3" size="md" mb="2" color="slate.900">
                              {service.title}
                            </Heading>
                            <Text color="slate.600" lineHeight="1.8">
                              {service.text}
                            </Text>
                          </Box>
                        </SoftCard>
                      </Flex>
                    ))}
                  </Stack>
                </Box>
              </SimpleGrid>
            </Reveal>
          </Container>
        </Box>

        <Container maxW="7xl" px={{ base: 5, md: 8 }}>
          <Reveal>
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              spacing={{ base: 8, lg: 14 }}
              py={{ base: 16, md: 24 }}
              alignItems="start"
            >
              <SectionHeading
                label="Coach kvalitások"
                title="A háttérben nyugodt rendszer, a felszínen tiszta figyelem."
                text="Azokat a kompetenciákat építem be a folyamatba, amelyek segítenek kérdezni, visszatükrözni és tartani a tempót anélkül, hogy túlterhelnénk a beszélgetést."
              />

              <SimpleGrid minChildWidth="220px" spacing="4">
                {strengths.map((item) => (
                  <SoftCard
                    key={item}
                  >
                    <Box px="4" py="5">
                      <HStack align="start" spacing="3">
                        <Box
                          mt="1"
                          boxSize="6"
                          borderRadius="full"
                          bg="brand.100"
                          color="brand.700"
                          display="grid"
                          placeItems="center"
                          flexShrink={0}
                        >
                          <Icon as={FaCheck} boxSize="3" />
                        </Box>
                        <Text fontWeight="medium" color="slate.800">
                          {item}
                        </Text>
                      </HStack>
                    </Box>
                  </SoftCard>
                ))}
              </SimpleGrid>
            </SimpleGrid>
          </Reveal>
        </Container>

        <Box bg="slate.950" color="white">
          <Container maxW="7xl" px={{ base: 5, md: 8 }}>
            <Reveal>
              <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, lg: 14 }}
                py={{ base: 16, md: 24 }}
                alignItems="start"
              >
                <SectionHeading
                  label="Visszajelzések"
                  title="A folyamat akkor működik jól, ha a beszélgetés után is marad mozgástér."
                  text="A visszajelzésekben rendszeresen az jelenik meg, hogy a közös munka segített összeszedettebbé, nyugodtabbá és határozottabbá válni."
                  titleColor="white"
                  textColor="whiteAlpha.800"
                />

                <Stack spacing="5">
                  {testimonials.map((item) => (
                    <Box
                      key={item.name}
                      p={{ base: 5, md: 6 }}
                      borderRadius="2xl"
                      bg="rgba(255, 255, 255, 0.08)"
                      border="1px solid rgba(255, 255, 255, 0.12)"
                      backdropFilter="blur(8px)"
                    >
                      <Text fontSize="lg" lineHeight="1.8" color="whiteAlpha.900">
                        “{item.quote}”
                      </Text>
                      <Text mt="4" fontWeight="semibold" color="brand.200">
                        {item.name}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </SimpleGrid>
            </Reveal>
          </Container>
        </Box>

        <Container maxW="7xl" px={{ base: 5, md: 8 }}>
          <Reveal>
            <SimpleGrid
              columns={{ base: 1, lg: 2 }}
              spacing={{ base: 8, lg: 14 }}
              py={{ base: 16, md: 24 }}
              alignItems="start"
            >
              <SectionHeading
                label="A folyamat"
                title="Három lépésben a tisztább működés felé."
                text="A coaching nálam nem lebegő inspiráció, hanem egy jól követhető folyamat, ahol mindennek megvan a maga ritmusa."
              />

              <Stack spacing="4">
                {steps.map((step, index) => (
                  <HStack
                    key={step}
                    align="start"
                    spacing="4"
                    p="4"
                    borderRadius="2xl"
                    bg="white"
                    border="1px solid rgba(15, 23, 42, 0.08)"
                  >
                    <Box
                      boxSize="10"
                      borderRadius="full"
                      bg="brand.500"
                      color="white"
                      display="grid"
                      placeItems="center"
                      flexShrink={0}
                      fontWeight="semibold"
                    >
                      {index + 1}
                    </Box>
                    <Text color="slate.700" fontSize="lg" lineHeight="1.8">
                      {step}
                    </Text>
                  </HStack>
                ))}
              </Stack>
            </SimpleGrid>
          </Reveal>
        </Container>
      </Box>

      <Box as="footer" id="kapcsolat" bg="white" borderTop="1px solid" borderColor="slate.200">
        <Container maxW="7xl" px={{ base: 5, md: 8 }}>
          <Reveal>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, lg: 14 }} py={{ base: 14, md: 18 }}>
              <Stack spacing="5" maxW="xl">
                <SectionLabel>Kapcsolat</SectionLabel>
                <Heading size="xl" color="slate.950">
                  Ha szeretnél beszélgetni, itt talál meg a leggyorsabban.
                </Heading>
                <Text color="slate.600" fontSize={{ base: 'md', md: 'lg' }}>
                  Ha úgy érzed, eljött az ideje egy nyugodtabb, fókuszáltabb
                  működésnek, írj vagy foglalj időpontot.
                </Text>
                <HStack spacing="3" flexWrap="wrap">
                </HStack>
              </Stack>

              <Stack spacing="4" justify="space-between">
                <Box>
                  <Text fontSize="sm" textTransform="uppercase" letterSpacing="0.18em" color="slate.500">
                    Elérhetőségek
                  </Text>
                  <Stack spacing="3" mt="4" color="slate.700">
                    <Link href="tel:+36306403461">+36 30 640 3461</Link>
                    <Link href="mailto:deutschtamas92@gmail.com">
                      deutschtamas92@gmail.com
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/deutsch-tam%C3%A1s-220939152/"
                      isExternal
                    >
                      LinkedIn <Icon as={FaLinkedin} ml="1" />
                    </Link>
                    <Link href="https://www.instagram.com/" isExternal>
                      Instagram <Icon as={FaInstagram} ml="1" />
                    </Link>
                  </Stack>
                </Box>

                <Divider borderColor="slate.200" />

                <Text fontSize="sm" color="slate.500">
                  © {new Date().getFullYear()} D&D Coaching. Minden jog
                  fenntartva.
                </Text>
              </Stack>
            </SimpleGrid>
          </Reveal>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
