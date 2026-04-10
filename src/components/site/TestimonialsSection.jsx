import { Box, Container, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { testimonials } from '../../content/siteContent';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export function TestimonialsSection() {
  return (
    <Box bg="slate.950" color="white">
      <Container maxW="7xl" px={{ base: 5, md: 8 }}>
        <Reveal>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, lg: 14 }}
            py={{ base: 16, md: 24 }}
            alignItems="start"
          >
            <SectionHeading
              label="Visszajelzések"
              title="A folyamat akkor működik jól, ha a beszélgetés után is marad mozgástér."
              text="A visszajelzésekben rendszeresen az jelenik meg, hogy a közös munka segített összeszedettebbé, nyugodtabbá és határozottabbá válni."
              titleColor="white"
              textColor="whiteAlpha.800"
            />

            <Stack spacing="5">
              {testimonials.map((item) => (
                <Box
                  key={item.name}
                  p={{ base: 5, md: 6 }}
                  borderRadius="2xl"
                  bg="rgba(255, 255, 255, 0.08)"
                  border="1px solid rgba(255, 255, 255, 0.12)"
                  backdropFilter="blur(8px)"
                >
                  <Text fontSize="lg" lineHeight="1.8" color="whiteAlpha.900">
                    “{item.quote}”
                  </Text>
                  <Text mt="4" fontWeight="semibold" color="brand.200">
                    {item.name}
                  </Text>
                </Box>
              ))}
            </Stack>
          </SimpleGrid>
        </Reveal>
      </Container>
    </Box>
  );
}
