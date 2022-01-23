import React from 'react';
import { Button } from '@chakra-ui/react';

import { openPopupWidget } from 'react-calendly';

const Booking = () => {
  const onClick = () =>
    openPopupWidget({
      url: 'https://calendly.com/coaching-dndnew',
      pageSettings: {
        hideEventTypeDetails: true,
        hideLandingPageDetails: true,
      },
    });

  return (
    <Button onClick={onClick} colorScheme="facebook">
      Időpont Foglalás
    </Button>
  );
};

export default Booking;
