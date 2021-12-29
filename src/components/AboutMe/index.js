import * as React from 'react';
import { Box, Text, Grid, GridItem, Image } from '@chakra-ui/react';
import AboutApp from './AboutApp';
import TextCard from '../Card/TextCard';

const AboutMe = () => {
  return (
    <Box>
      <Box p="2">
        <Grid templateColumns="repeat(4, 1fr)" m="0" p="2">
          <GridItem colSpan={[4, 2, 2]} pt="2" maxW="full" maxH="lg">
            <Box maxW="full">
              <Image src="" alt="Tesa kép ide" />
            </Box>
          </GridItem>
          <GridItem
            colSpan={[4, 2, 2]}
            pt="2"
            maxW="full"
            maxH="lg"
            textAlign="center"
          >
            <Box maxW="full">
              <TextCard
                title="Rólam"
                value="   Mérnökként és coachként egyaránt célomnak tartom, hogy másokat
                támogassak, továbbá a bennük rejlő képességek birtokában
                hozzásegíthessem őket céljuk eléréséhez, és hogy sikeressé
                váljanak. A coaching azért áll hozzám közel, mert olyan
                kapcsolatot létesít két ember között ahol partnerként tudunk
                együttműködni a hozzám fordulók elakadásain, megoldására váró
                kérdésein, ötletei innovatív megvalósításán. Motivált vagyok
                inspirálni másokat és katalizálni folyamatokat, meghallgatni
                másokat. Tudásom bővítése és meglévő képességeim fejlesztése
                mellett egyaránt fontos számomra mások megismerése és
                elfogadása."
              />
            </Box>
          </GridItem>
          <GridItem
            colSpan={[4, 2, 2]}
            pt={{ base: 14, lg: 14 }}
            maxW="full"
            maxH="lg"
            // backgroundColor="blue"
            textAlign="center"
          >
            <Box maxW="full">
              <TextCard
                title="Mi is a Coaching"
                value="Kulcsot ad saját magadhoz, a te megoldásaidhoz, a te életedhez.
                A coaching egy fejlődési lehetőség, egy együttműködésre épülő
                eredmény- és megoldásközpontú folyamat. Egy eszköz. Eszköz az
                önismereted elmélyítésére, a szükségleteid feltárására, az
                erőforrásaid leltározására. Mindezekkel segít abban, hogy az
                életedben jelentkező elakadásokat, problémákat könnyebben tudd
                kezelni most és a későbbiekben egyaránt."
              />
            </Box>
          </GridItem>
          <GridItem
            colSpan={[4, 2, 2]}
            pt="4"
            maxW="full"
            maxH="md"
            // backgroundColor="black"
          >
            <Box maxW="full" height={'fit-content'}>
              <Image
                src="/images/c.png"
                alt="Mi is a coaching kép"
                width={'500px'}
                height={'300px'}
                display={'block'}
                margin={'0 auto'}
              />
            </Box>
          </GridItem>
        </Grid>
      </Box>
      <Box>
        <AboutApp />
      </Box>
      {/* <Box>
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
      </Box> */}
    </Box>
  );
};

export default AboutMe;
