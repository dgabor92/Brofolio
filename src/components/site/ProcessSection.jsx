import { Container, HStack, Box, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { steps } from '../../content/siteContent';
import { SectionHeading } from './SectionHeading';
import { SoftCard } from './SoftCard';
import { Reveal } from './Reveal';

export function ProcessSection() {
  return (
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
              <SoftCard key={step}>
                <HStack align="start" spacing="4" p="4">
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
              </SoftCard>
            ))}
          </Stack>
        </SimpleGrid>
      </Reveal>
    </Container>
  );
}
