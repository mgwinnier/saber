import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// contract: <Reveal delay={0} direction="up|left|right" className?>children</Reveal>
// — the only animation wrapper pages use.

const offsets = {
  up: { y: 24 },
  left: { x: -32 },
  right: { x: 32 },
};

function Reveal({ delay = 0, direction = 'up', className = '', children }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = offsets[direction] || offsets.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
