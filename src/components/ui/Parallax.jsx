import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

// contract: <Parallax range={24} className?>children</Parallax>
// Translates children vertically from -range to +range px as the element crosses
// the viewport. The PARENT is responsible for overflow-hidden, and children should
// be slightly oversized (e.g. scale-110) so the drifting edges never show.

function Parallax({ range = 24, className = '', children }) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);

  if (reduceMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

export default Parallax;
