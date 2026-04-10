import { chakra, usePrefersReducedMotion } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = chakra(motion.div);

export function Reveal({ children, delay = 0 }) {
  const reduceMotion = usePrefersReducedMotion();

  if (reduceMotion) {
    return children;
  }

  return (
    <MotionBox
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionBox>
  );
}
