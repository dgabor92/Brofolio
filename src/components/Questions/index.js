import React from 'react';
import { Box, List, Heading } from '@chakra-ui/react';
import ListCard from '../Card/ListCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDumbbell,
  faCrosshairs,
  faBriefcase,
  faHourglassHalf,
  faMedal,
} from '@fortawesome/free-solid-svg-icons';

const Questions = () => {
  return (
    <Box as="section" pt="8">
      <Box bg="blue.700" pt="5" pb="5">
        <Box
          maxW={{ base: 'md', md: '5xl' }}
          mx="auto"
          px={{ base: '4', md: 6 }}
        >
          <Box textAlign={'center'} pt="2" pb="4" color="white">
            <Heading size="xl" lineHeight="normal" textAlign="center">
              Amiben segíteni tudok
            </Heading>
          </Box>
        </Box>
      </Box>
      <Box maxW="2xl" mx="auto" p={{ base: 4, md: 8 }}>
        <List spacing="12">
          <ListCard
            icon={<FontAwesomeIcon icon={faDumbbell} />}
            title="Stresszkezelés"
            subTitle="A stressz különböző ingerek hatására az emberi szervezetben bekövetkező válaszreakció.
                Fontos hangsúlyozni, hogy a fizikai és lelki egészségünk megőrzése szempontjából valamennyi stresszre mindenféleképpen szükségünk van.
                   A probléma akkor keletkezik, amikor a stressz folyamatosan jelen van az életünkben."
          />
          <ListCard
            icon={<FontAwesomeIcon icon={faCrosshairs} />}
            title="Célmeghatározás"
            subTitle="Akár magán akár a szakmai életünkben szeretnénk változtatni, a célok meghatározása, új célok kitűzése segítenek abban, hogy nyomon kövessük, hogyan haladunk az úton.
                  Sokak számára azonban ez mégsem olyan egyszerű. Ahhoz, hogy célt érj, fontos, hogy konkrétan meg tudd fogalmazni, mit is szeretnél.
                  Tudd leírni és körbe határolni!"
          />
          <ListCard
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            title="Munkamánia"
            subTitle="Sokan magától értetődőnek tekintik, hogy a munkamánia „menedzser-betegség”.
                   Mai értelemben azonban a munkamánia olyan függőségi állapot, amelyben a munka drogként funkcionál, mely által a társas,
                    szociális és családi kapcsolatok háttérbe szorulnak.
                   A munkamániások leggyakrabban álmatlansággal, gyakori fejfájással küzdenek, ezek pedig érzelmi kiüresedéshez,
                     illetve akár összeroppanáshoz, depresszióhoz is vezethetnek."
          />
          <ListCard
            icon={<FontAwesomeIcon icon={faHourglassHalf} />}
            title="Időgazdálkodás"
            subTitle="Manapság a munkahelyen és a magánéletben is sokszorta hangzik el – „Nem volt rá időm!”, „Bárcsak több időm lenne!”.
                   A legtöbb ember végeláthatatlan feladatok spiráljában él, és sosem látja meg a fényt az alagút végén.
                   Ennek legfőbb oka, hogy mindent elvállalunk annak érdekében, hogy mások megítélése rólunk pozitív legyen."
          />
          <ListCard
            icon={<FontAwesomeIcon icon={faMedal} />}
            title="Sikeresség"
            subTitle="Manapság egyre többet hangoztatjuk, hogy sikeresek akarunk lenni.
                   A siker olyan kedvező végeredmény, helyzet, állapot, vagy következmény,
                    amely a korábbi elvárásainknak elért céljaként megfelel, melyre tudatosan törekedtünk.
                    Egy biztos: A siker minden ember számára mást és mást jelent."
          />
        </List>
      </Box>
    </Box>
  );
};

export default Questions;
