import { useDisclosure, useBreakpointValue } from '@chakra-ui/react';
import * as React from 'react';

export const useMobileMenuState = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, lg: false });
  const isTablet = useBreakpointValue({ base: true, md: true, lg: false });

  React.useEffect(() => {
    if (isMobile === false) {
      onClose();
    }
  }, [isMobile, onClose]);

  React.useEffect(() => {
    if (isTablet === false) {
      onClose();
    }
  }, [isTablet, onClose]);

  return { isOpen, onClose, onOpen };
};
