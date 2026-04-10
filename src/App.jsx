import { Box } from '@chakra-ui/react';
import { HeroSection } from './components/site/HeroSection';
import { AboutSection } from './components/site/AboutSection';
import { OfferingsSection } from './components/site/OfferingsSection';
import { TestimonialsSection } from './components/site/TestimonialsSection';
import { ProcessSection } from './components/site/ProcessSection';
import { FooterSection } from './components/site/FooterSection';

function App() {
  return (
    <Box minH="100vh" bg="surface.50" color="slate.900">
      <HeroSection />
      <Box as="main">
        <AboutSection />
        <OfferingsSection />
        <TestimonialsSection />
        <ProcessSection />
      </Box>
      <FooterSection />
    </Box>
  );
}

export default App;
