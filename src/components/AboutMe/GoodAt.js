import * as React from 'react';
import {
  Box,
  Text,
  Grid,
  GridItem,
  // useColorModeValue as mode,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const GoodAt = () => {
  return (
    <Box>
      <Box textAlign="center" alignItems="center" pt="2">
        <Text fontSize="2xl">Amiben jó vagyok:</Text>
      </Box>
      <Box p="4" textAlign="center">
        <Grid templateColumns="repeat(2,1fr)">
          <GridItem colSpan={[2, 2, 1]}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Aktív hallgatás
              </ListItem>
              <ListItem>
                <ListIcon color="green.500" as={CheckCircleIcon} />
                Belső feszültség feloldása
              </ListItem>
              <ListItem>
                <ListIcon color="green.500" as={CheckCircleIcon} />
                Stresszkezelés
              </ListItem>
              <ListItem>
                <ListIcon color="green.500" as={CheckCircleIcon} />
                Karrier támogatás
              </ListItem>
              <ListItem>
                <ListIcon color="green.500" as={CheckCircleIcon} />
                Belső kételyek lekűzdése
              </ListItem>
              <ListItem>
                <ListIcon color="green.500" as={CheckCircleIcon} />
                Vezető támogatás
              </ListItem>
              <ListItem>
                <ListIcon color="green.500" as={CheckCircleIcon} />
                Csapatfejlesztés
              </ListItem>
            </List>
          </GridItem>
          <GridItem colSpan={[2, 2, 1]}>
            <List spacing={3}>
              <ListItem>
                <ListIcon color="green.500" as={CheckCircleIcon} />
                Önmenedzselés
              </ListItem>
              <ListItem>
                <ListIcon color="green.500" as={CheckCircleIcon} />
                Asszertív kommunikáció
              </ListItem>
              <ListItem>
                <ListIcon color="green.500" as={CheckCircleIcon} />
                Delegálás
              </ListItem>
              <ListItem>
                <ListIcon color="green.500" as={CheckCircleIcon} />
                Konfliktus/Stresszkezelés
              </ListItem>
              <ListItem>
                <ListIcon color="green.500" as={CheckCircleIcon} />
                Döntéstámogatás
              </ListItem>
              <ListItem>
                <ListIcon color="green.500" as={CheckCircleIcon} />
                Coaching szemlélet
              </ListItem>
            </List>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default GoodAt;
