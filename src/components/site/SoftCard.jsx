import { Box } from '@chakra-ui/react';

export function SoftCard({ children, ...props }) {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.92)"
      border="1px solid rgba(15, 23, 42, 0.08)"
      borderRadius="2xl"
      boxShadow="0 10px 30px rgba(15, 23, 42, 0.04)"
      overflow="hidden"
      w="full"
      h="fit-content"
      alignSelf="start"
      {...props}
    >
      {children}
    </Box>
  );
}
