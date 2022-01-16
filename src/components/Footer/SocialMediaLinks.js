import { ButtonGroup, IconButton } from '@chakra-ui/react';
import * as React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const SocialMediaLinks = (props) => {
  return (
    <ButtonGroup variant="ghost" color="white" {...props}>
      <IconButton
        as="a"
        href="https://www.linkedin.com/in/deutsch-tam%C3%A1s-220939152/"
        aria-label="LinkedIn"
        icon={<FaLinkedin fontSize="30px" />}
      />
    </ButtonGroup>
  );
};

export default SocialMediaLinks;
