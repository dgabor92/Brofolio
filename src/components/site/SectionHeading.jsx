import { Heading, Stack, Text } from '@chakra-ui/react';

export function SectionLabel({ children }) {
  return (
    <Text
      textTransform="uppercase"
      letterSpacing="0.22em"
      fontSize="xs"
      fontWeight="semibold"
      color="brand.500"
    >
      {children}
    </Text>
  );
}

export function SectionHeading({
  label,
  title,
  text,
  titleColor = 'slate.900',
  textColor = 'slate.600',
}) {
  return (
    <Stack spacing="4" maxW="3xl">
      <SectionLabel>{label}</SectionLabel>
      <Heading size="2xl" lineHeight="1.05" color={titleColor}>
        {title}
      </Heading>
      <Text fontSize={{ base: 'md', md: 'lg' }} color={textColor}>
        {text}
      </Text>
    </Stack>
  );
}
