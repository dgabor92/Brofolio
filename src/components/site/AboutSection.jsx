import { Container, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export function AboutSection() {
  return (
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
              Akkor is hasznos lehet, ha teljesítményt akarsz növelni, ha egy
              döntés előtt állsz, vagy ha egyszerűen csak szeretnél kiszállni
              a túlterheltségből és tisztábban gondolkodni.
            </Text>
            <Text>
              A közös munka célja nálam mindig az, hogy a beszélgetés végére ne
              csak több legyen az információd, hanem több legyen a mozgástered
              is.
            </Text>
          </Stack>
        </SimpleGrid>
      </Reveal>
    </Container>
  );
}
