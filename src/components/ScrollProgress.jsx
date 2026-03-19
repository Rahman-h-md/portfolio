import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'var(--gradient-primary)',
        transformOrigin: '0%',
        scaleX,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(139, 92, 246, 0.3)'
      }}
    />
  );
};

export default ScrollProgress;
