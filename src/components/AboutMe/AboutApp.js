import React from 'react';
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import AboutMeCard from '../Card/AboutMeCard';

const AboutApp = () => {
  return (
    <Box as="section" pb="10" pt={{ base: 2, lg: 10 }}>
      <Box bg="blue.700" pt="5" pb="5">
        <Box
          maxW={{ base: 'md', md: '5xl' }}
          mx="auto"
          px={{ base: '6', md: 8 }}
        >
          <Box mb="16" color="white" maxW="xl">
            <Heading size="xl" lineHeight="normal" textAlign="center">
              Rólam mondták
            </Heading>
          </Box>
        </Box>
      </Box>
      <Box mt="-10">
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: 6, md: 8 }}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
            <AboutMeCard
              title=""
              value="Azok a praktikák, melyeket a pontosabb időbeosztásom érdekében
                átbeszéltünk, segítettek jobban, pontosabban és hatékonyabban
                elvégezni a munkámat. Azóta nagyon sok dícséretet kaptam a
                feletteseimtől. Nagyon hálás vagyok neked mindenért."
            >
              Erika
            </AboutMeCard>
            <AboutMeCard
              title=""
              value="Mikor a felettesemmel beszéltem a fizetésemelésemről, nagyon
              sokat segítettek azok a szituációs gyakorlatok, amiket mutattál.
              Felkészültnek, összeszedettnek és magabiztosnak tűntem. Neked
              köszönhetően nem féltem."
            >
              Gábor
            </AboutMeCard>
            <AboutMeCard
              title=""
              value="Mikor a felettesemmel beszéltem a előléptetésről, nagyon
              sokat segítettek azok a szituációs gyakorlatok, amiket mutattál.
              Felkészültnek, összeszedettnek és magabiztosnak tűntem. Neked
              köszönhetően nem féltem."
            >
              Norbert
            </AboutMeCard>
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutApp;
