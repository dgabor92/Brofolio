import { Box, Container, Divider, Flex, Heading, Icon, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';
import { services, strengths } from '../../content/siteContent';
import { SectionHeading } from './SectionHeading';
import { SoftCard } from './SoftCard';
import { Reveal } from './Reveal';

export function OfferingsSection() {
  return (
    <>
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
                <SoftCard key={item}>
                  <Box px="4" py="5">
                    <Stack direction="row" align="start" spacing="3">
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
                    </Stack>
                  </Box>
                </SoftCard>
              ))}
            </SimpleGrid>
          </SimpleGrid>
        </Reveal>
      </Container>
    </>
  );
}
