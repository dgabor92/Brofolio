import * as React from 'react';
import { Box, Text, Grid, GridItem, Image } from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <Box>
      <Box textAlign="center" alignItems="center" p="8">
        <Text fontSize="2xl">Rólam:</Text>
        <Text fontSize="xl" textAlign="justify">
          Mérnökként és coachként egyaránt célomnak tartom, hogy másokat
          támogassak, továbbá a bennük rejlő képességek birtokában
          hozzásegíthessem őket céljuk eléréséhez, és hogy sikeressé váljanak. A
          coaching azért áll hozzám közel, mert olyan kapcsolatot létesít két
          ember között ahol partnerként tudunk együttműködni a hozzám fordulók
          elakadásain, megoldására váró kérdésein, ötletei innovatív
          megvalósításán. Motivált vagyok inspirálni másokat és katalizálni
          folyamatokat, meghallgatni másokat. Tudásom bővítése és meglévő
          képességeim fejlesztése mellett egyaránt fontos számomra mások
          megismerése és elfogadása.
        </Text>
      </Box>
      <Box>
        <Grid templateColumns="repeat(2, 1fr)">
          <GridItem colSpan={[2, 2, 1]}>
            <Image src="/images/coach.jpeg" />
          </GridItem>

          <GridItem colSpan={[2, 2, 1]} background="">
            <Text textAlign="center" fontSize="large">
              Rólam mondták:
            </Text>
            <Box padding="4">
              <Text fontSize="large" textAlign="justify">
                "Mikor a felettesemmel beszéltem a fizetésemelésemről, nagyon
                sokat segítettek azok a szituációs gyakorlatok, amiket mutattál.
                Felkészültnek, összeszedettnek és magabiztosnak tűntem. Neked
                köszönhetően nem féltem."
              </Text>
              <Text pt="2" fontSize="larger">
                Gábor
              </Text>
            </Box>
            <Box padding="4">
              <Text fontSize="large" textAlign="justify">
                "Azok a praktikák, melyeket a pontosabb időbeosztásom érdekében
                átbeszéltünk, segítettek jobban, pontosabban és hatékonyabban
                elvégezni a munkámat. Azóta nagyon sok dícséretet kaptam a
                feletteseimtől. Nagyon hálás vagyok neked mindenért."
              </Text>
              <Text pt="2" fontSize="larger">
                Erika
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutMe;
