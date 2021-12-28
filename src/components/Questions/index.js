import React from 'react';
import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import PropertyField from './PropertyField';

const Questions = () => {
  return (
    <Box>
      <Box textAlign="center" alignItems="center" pt="2">
        <Text fontSize="2xl">Leggyakoribb kérdések:</Text>
        <Box pt="2" p="2">
          <Grid templateColumns="repeat(4,1fr)" m="0" p="2">
            <GridItem
              colSpan={[4, 2, 1]}
              px={{ base: 4, lg: 8 }}
              pt="2"
              maxW="full"
              maxH="lg"
            >
              <Box maxW="full">
                <PropertyField
                  src="./images/stresszkezeles.png"
                  alt="Stressz"
                  header="Stresszkezelés"
                  body="ezt itt a stresszkezeléses body"
                />
              </Box>
            </GridItem>
            <GridItem
              colSpan={[4, 2, 1]}
              px={{ base: 4, lg: 8 }}
              pt="2"
              maxW="full"
            >
              <Box maxW="full">
                <PropertyField
                  src="./images/celkituzes.png"
                  alt="célkituzés"
                  header="Célkitűzés"
                  body="ez itt a celkituzéses body"
                />
              </Box>
            </GridItem>
            <GridItem
              colSpan={[4, 2, 1]}
              px={{ base: 4, lg: 8 }}
              pt="2"
              maxW="full"
            >
              <Box maxW="full">
                <PropertyField
                  src="./images/outplacement_coaching.png"
                  alt="outplacement_coaching"
                  header="Outplacement-Coaching"
                  body="ez itt az outplacement_coaching_body"
                />
              </Box>
            </GridItem>
            <GridItem
              colSpan={[4, 2, 1]}
              px={{ base: 4, lg: 8 }}
              pt="2"
              maxW="full"
            >
              <Box maxW="full">
                <PropertyField
                  src="./images/munkamania.png"
                  alt="Munkamánia"
                  header="Munkamánia"
                  body="ez itt a Munkamánia body"
                />
              </Box>
            </GridItem>
          </Grid>
        </Box>
        <Box p="2">
          <Grid templateColumns="repeat(4,1fr)" m="0" p="2">
            <GridItem
              colSpan={[4, 2, 1]}
              px={{ base: 4, lg: 8 }}
              pt="2"
              maxW="full"
              maxH="lg"
            >
              <Box maxW="full">
                <PropertyField
                  src="./images/timemanagement.png"
                  alt="Időgazdálkodás"
                  header="Időgazdálkodás"
                  body="ezt itt az időgazdálkodás body"
                />
              </Box>
            </GridItem>
            <GridItem
              colSpan={[4, 2, 1]}
              px={{ base: 4, lg: 8 }}
              pt="2"
              maxW="full"
            >
              <Box maxW="full">
                <PropertyField
                  src="./images/dontestamogatas.png"
                  alt="Döntéstámogatás"
                  header="Döntéstámogatás"
                  body="ez itt a döntéstámogatás body"
                />
              </Box>
            </GridItem>
            <GridItem
              colSpan={[4, 2, 1]}
              px={{ base: 4, lg: 8 }}
              pt="2"
              maxW="full"
            >
              <Box maxW="full">
                <PropertyField
                  src="./images/sikeresseg.png"
                  alt="Sikeresség"
                  header="Sikeresség"
                  body="ez itt a sikeresség body"
                />
              </Box>
            </GridItem>
            <GridItem
              colSpan={[4, 2, 1]}
              px={{ base: 4, lg: 8 }}
              pt="2"
              maxW="full"
            >
              <Box maxW="full">
                <PropertyField
                  src="./images/communication.png"
                  alt="Kommunikáció"
                  header="Kommunikáció"
                  body="ez itt a Kommunikáció body"
                />
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Questions;
