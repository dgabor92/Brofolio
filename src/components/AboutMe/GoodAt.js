import * as React from 'react';
import {
  Box,
  // Text,
  Heading,
  // Grid,
  // GridItem,
  // Stack,
  // StackDivider,
  // List,
  // ListItem,
  // ListIcon,
  // useColorMode,
  SimpleGrid,
} from '@chakra-ui/react';
import SkillCard from '../Card/SkillCard';

const GoodAt = () => {
  return (
    <Box as="section" p="2">
      <Box textAlign={'center'} pt="4" pb="8">
        <Heading size="xl" lineHeight="normal" textAlign="center">
          Coaching Skillek
        </Heading>
      </Box>
      <Box maxW="7xl" mx="auto" px={{ base: 6, md: 8 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="6">
          <SkillCard value="Aktív hallgatás" />
          <SkillCard value="Belső feszültségek feloldása" />
          <SkillCard value="Stresszkezelés" />
          <SkillCard value="Karriertámogatás" />
        </SimpleGrid>
        <SimpleGrid pt="4" columns={{ base: 1, md: 2, lg: 4 }} spacing="6">
          <SkillCard value="Belső kételyek lekűzdése" />
          <SkillCard value="Vezetőtámogatás" />
          <SkillCard value="Csapattámogatás" />
          <SkillCard value="Önmenedzselés" />
        </SimpleGrid>
        <SimpleGrid pt="4" columns={{ base: 1, md: 2, lg: 4 }} spacing="6">
          <SkillCard value="Asszertív kommunikáció" />
          <SkillCard value="Delegálás" />
          <SkillCard value="Stresszkezelés" />
          <SkillCard value="Döntéstámogatás" />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default GoodAt;
