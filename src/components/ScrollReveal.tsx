import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

const ScrollReveal = ({
  children,
  className,
  delay = 0,
  distance = 48,
  duration = 0.8,
  once = true,
  amount = 0.2,
}: ScrollRevealProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        delay,
        duration: reduceMotion ? 0.2 : duration,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
