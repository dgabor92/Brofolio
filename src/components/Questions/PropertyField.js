import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import { useDisclosure } from '@chakra-ui/react';

const PropertyField = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Image
        src={props.src}
        alt={props.alt}
        onClick={onOpen}
        width="max"
        height="250px"
      />
      <Modal isOpen={isOpen} onClose={onClose} autoFocus={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{props.body}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PropertyField;
