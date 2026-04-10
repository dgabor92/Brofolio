import { Box, Icon, Link, Text } from '@chakra-ui/react';

export function ContactLine({ href, icon, children, isExternal = false }) {
  return (
    <Link
      href={href}
      isExternal={isExternal}
      display="flex"
      alignItems="center"
      gap="3"
      w="full"
      minH="44px"
      fontSize={{ base: 'sm', sm: 'lg' }}
      lineHeight="1.4"
      wordBreak="break-word"
      color="slate.700"
    >
      <Box flexShrink={0} display="grid" placeItems="center" boxSize="6">
        <Icon as={icon} />
      </Box>
      <Text as="span">{children}</Text>
    </Link>
  );
}
