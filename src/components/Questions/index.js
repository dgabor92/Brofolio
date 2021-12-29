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
                  body={`A stressz különböző ingerek hatására az emberi szervezetben bekövetkező válaszreakció.
                  Fontos hangsúlyozni, hogy a fizikai és lelki egészségünk megőrzése szempontjából valamennyi stresszre mindenféleképpen szükségünk van.
                  A probléma akkor keletkezik, amikor a stressz folyamatosan jelen van az életünkben.
                  A test a folyamatos stressz hatására egy idő után 'lemerül'.
                  Ekkor a test kilendül nyugalmi egyensúlyából, fokozottan reagál a külső ingerekre és folyamatosan az egyensúly helyreállítására törekszik.
                  A stresszkezelésnek számos formája van és bár „tuti recept” nincs, léteznek olyan módszerek, amelyek az emberek többségénél hatékonyak.
                   Számodra mi a legnagyobb stresszforrás az életedben?`}
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
                  alt="Célmeghatározás"
                  header="Célmeghatározás"
                  body="Akár magán akár a szakmai életünkben szeretnénk változtatni, a célok meghatározása, új célok kitűzése segítenek abban, hogy nyomon kövessük, hogyan haladunk az úton.
                  Sokak számára azonban ez mégsem olyan egyszerű. Ahhoz, hogy célt érj, fontos, hogy konkrétan meg tudd fogalmazni, mit is szeretnél.
                  Tudd leírni és körbe határolni!
                  Miképpen fogod mérni? Fontos neked a cél elérése?
                  Ad valami pluszt az életedhez?
                  Milyen megoldással lennél elégedett a folyamat végén? 
                  Neked mi a célod? Meg tudod már fogalmazni?"
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
                  body="Sokak életében volt olyan élethelyzet, amely következtében megfogalmazódott bennük a váltás gondolata.
                  A váltás legfőbb oka nem a teljesítményünkkel függ össze.
                  Sokkal inkább a vállalati (cégbezárás, átszervezés, üzletág megszűnés), vagy egyéni karrier célok változásával.
                  Ezen felül sajnos akadnak olyan esetek is amikor a cég kénytelen megválni munkavállalóitól.
                  Ilyenkor is fontos szem előtt tartani, hogy a lehetőségek a munkaerő piacon továbbra is jelen vannak. 
                  Te milyen élethelyzetben vagy?"
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
                  body="Sokan magától értetődőnek tekintik, hogy a munkamánia „menedzser-betegség”.
                  Mai értelemben azonban a munkamánia olyan függőségi állapot, amelyben a munka drogként funkcionál, mely által a társas,
                   szociális és családi kapcsolatok háttérbe szorulnak.
                  A munkamániások leggyakrabban álmatlansággal, gyakori fejfájással küzdenek, ezek pedig érzelmi kiüresedéshez,
                    illetve akár összeroppanáshoz, depresszióhoz is vezethetnek.
                  Fontos számodra a kiegyensúlyozottság? Jó érzéssel tölt el, ha egy feladatot befejeztél?"
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
                  body="Manapság a munkahelyen és a magánéletben is sokszorta hangzik el – „Nem volt rá időm!”, „Bárcsak több időm lenne!”.
                  A legtöbb ember végeláthatatlan feladatok spiráljában él, és sosem látja meg a fényt az alagút végén. 
                  Ennek legfőbb oka, hogy mindent elvállalunk annak érdekében, hogy mások megítélése rólunk pozitív legyen. 
                  Ez viszont azt is eredményezi, hogy számos teendő emiatt háttérbe szorul, mert amennyiben valamire igent mondasz, mire mondasz nemet? 
                  Te mire mondasz igent?"
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
                  body="A mindennapi életben vagy munkánk során is alkalmazzuk ezt a tevékenységet.
                  Ezt két részre bontjuk: eseti (problémamegoldás, azonnali feladat), vagy folyamatos (napi döntések meghozatala).
                  Ilyenkor a legfontosabb, hogy meghatározzuk, melyek azok a fontos feladatok és melyek sürgősek?
                  Ezek kiválasztása és priorizálása meglehetősen összetett és időt igénylő tevékenység, azonban,
                  az alkalmazásának hiánya az elvégzendő feladatok tornyosulását eredményezheti. 
                  Számodra melyek a fontos és melyek a sürgős feladatok?"
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
                  body="Manapság egyre többet hangoztatjuk, hogy sikeresek akarunk lenni.
                  A siker olyan kedvező végeredmény, helyzet, állapot, vagy következmény,
                   amely a korábbi elvárásainknak elért céljaként megfelel, melyre tudatosan törekedtünk.
                   Egy biztos: A siker minden ember számára mást és mást jelent. 
                   De vajon honnan tudjuk, hogy sikeresek vagyunk? 
                  Számodra mit jelent a siker?"
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
                  body="Sokszor emlegetjük, hogy - „két ember között a legnagyobb távolság a félreértés”. 
                  A kommunikáció mai értelemben, információ csere, közlés, mely lehet egyirányú vagy kétirányú.
                   Azonban gyakorta találjuk magunkat olyan helyzetben amikor „elbeszélünk egymás mellett”, 
                   vagy nem értjük meg a másik mondanivalóját. Ilyenkor a legfontosabb, 
                   hogy odafigyeljünk és tisztázzuk mi is a célja a kommunikációnak. 
                   Elmondanád, de nem tudod hogyan?
                  Neked mi a mondanivalód?"
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
