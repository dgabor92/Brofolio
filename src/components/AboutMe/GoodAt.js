import * as React from 'react';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import SkillCard from '../Card/SkillCard';

const GoodAt = () => {
  return (
    <Box as="section" p="2">
      <Box textAlign={'center'} pt="4" pb="8">
        <Heading size="xl" lineHeight="normal" textAlign="center">
          Coach Kvalitások
        </Heading>
      </Box>
      <Box maxW="7xl" mx="auto" px={{ base: 6, md: 8 }}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing="6">
          <SkillCard value="Aktív hallgatás" />
          <SkillCard value="Érzelmi intelligencia" />
          <SkillCard value="Stresszkezelés" />
          <SkillCard value="Nyitott látásmód" />
        </SimpleGrid>
        <SimpleGrid pt="4" columns={{ base: 1, md: 2, lg: 4 }} spacing="6">
          <SkillCard value="Kérdezéstechnika" />
          <SkillCard value="Vezetőtámogatás" />
          <SkillCard value="Együttműködés" />
          <SkillCard value="Önmenedzselés" />
        </SimpleGrid>
        <SimpleGrid pt="4" columns={{ base: 1, md: 2, lg: 4 }} spacing="6">
          <SkillCard value="Asszertív kommunikáció" />
          <SkillCard value="Alkalmazkodóképesség" />
          <SkillCard value="Kreativitás" />
          <SkillCard value="Döntéstámogatás" />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default GoodAt;
