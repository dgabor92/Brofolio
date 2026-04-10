import {
  Box,
  Container,
  Divider,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaEnvelope, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { contactLinks } from '../../content/siteContent';
import { ContactLine } from './ContactLine';
import { SectionLabel } from './SectionHeading';
import { Reveal } from './Reveal';

const iconMap = {
  phone: FaPhoneAlt,
  email: FaEnvelope,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
};

export function FooterSection() {
  return (
    <Box as="footer" id="kapcsolat" bg="white" borderTop="1px solid" borderColor="slate.200">
      <Container maxW="7xl" px={{ base: 5, md: 8 }}>
        <Reveal>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, lg: 14 }}
            py={{ base: 14, md: 18 }}
          >
            <Stack spacing="5" maxW="xl">
              <SectionLabel>Kapcsolat</SectionLabel>
              <Heading size="xl" color="slate.950">
                Ha szeretnél beszélgetni, itt talál meg a leggyorsabban.
              </Heading>
              <Text color="slate.600" fontSize={{ base: 'md', md: 'lg' }}>
                Ha úgy érzed, eljött az ideje egy nyugodtabb, fókuszáltabb
                működésnek, írj vagy hívj bátran.
              </Text>
            </Stack>

            <Stack spacing="4" justify="space-between">
              <Box>
                <Text
                  fontSize="sm"
                  textTransform="uppercase"
                  letterSpacing="0.18em"
                  color="slate.500"
                >
                  Elérhetőségek
                </Text>
                <Stack spacing="3" mt="4" align="flex-start">
                  {contactLinks.map((item) => (
                    <ContactLine
                      key={item.href}
                      href={item.href}
                      icon={iconMap[item.icon]}
                      isExternal={item.external}
                    >
                      {item.label}
                    </ContactLine>
                  ))}
                </Stack>
              </Box>

              <Divider borderColor="slate.200" />

              <Text fontSize="sm" color="slate.500">
                © {new Date().getFullYear()} D&D Coaching. Minden jog
                fenntartva.
              </Text>
            </Stack>
          </SimpleGrid>
        </Reveal>
      </Container>
    </Box>
  );
}
