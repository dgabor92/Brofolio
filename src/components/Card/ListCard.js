import React from 'react';
import {
  Stack,
  Flex,
  Circle,
  Text,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';

const ListCard = (props) => {
  return (
    <Stack as="li" direction="row" spacing="4">
      <Flex direction="column" alignItems="center" aria-hidden="true">
        <Circle
          bg={useColorModeValue('blue.700', 'rgb(26,54,93)')}
          size="16"
          borderWidth="4px"
          borderColor={useColorModeValue(
            'rgb(197,169,101)',
            'rgb(197,169,101)'
          )}
          color={useColorModeValue('rgb(197,169,101)', 'rgb(197,169,30)')}
        >
          {props.icon}
        </Circle>
      </Flex>
      <Stack spacing="4" pt="1" flex="1">
        <Flex direction="column">
          <Heading fontSize="md">{props.title}</Heading>
          <Text
            fontSize="sm"
            color={useColorModeValue('white', 'blue.900')}
            textAlign="justify"
          >
            {props.subTitle}
          </Text>
        </Flex>
        <Flex>{props.children}</Flex>
      </Stack>
    </Stack>
  );
};

export default ListCard;
