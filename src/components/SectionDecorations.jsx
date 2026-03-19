import React from 'react';
import { motion } from 'framer-motion';

/**
 * Drop this inside any section to get:
 * - Floating rising particles
 * - Vertical data-rain streaks
 * - Corner bracket accents
 */
const SectionDecorations = ({ particleColor = '#c084fc', accentColor = '#ec4899', rainCount = 5, particleCount = 12 }) => {
  return (
    <>

      {/* Vertical data-rain streaks */}
      {Array.from({ length: rainCount }).map((_, i) => (
        <motion.div
          key={`rain-${i}`}
          className="data-rain"
          style={{
            left: `${8 + i * (84 / rainCount)}%`,
            height: `${25 + (i % 3) * 15}%`,
            animationDuration: `${3 + i * 0.7}s`,
            animationDelay: `${i * 0.6}s`,
            background: `linear-gradient(to bottom, transparent, ${i % 2 === 0 ? particleColor : accentColor}, transparent)`,
          }}
        />
      ))}

      {/* Subtle corner bracket accents (top-left & bottom-right of section) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', top: '2rem', left: '2rem',
          width: '24px', height: '24px',
          borderTop: `2px solid rgba(0,212,255,0.3)`,
          borderLeft: `2px solid rgba(0,212,255,0.3)`,
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: '2rem', right: '2rem',
          width: '24px', height: '24px',
          borderBottom: `2px solid rgba(168,85,247,0.3)`,
          borderRight: `2px solid rgba(168,85,247,0.3)`,
          pointerEvents: 'none',
        }}
      />
    </>
  );
};

export default SectionDecorations;
