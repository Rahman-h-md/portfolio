import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, accentWord }) => {
  // If accentWord provided, highlight it in the title with neon blue
  const renderTitle = () => {
    if (!accentWord) return title;
    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span style={{
          background: 'var(--gradient-primary)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>
          {accentWord}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4 }}
        style={{
          color: 'var(--neon-blue)',
          fontSize: '0.95rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800 }}
      >
        {renderTitle()}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          height: '3px',
          width: '50px',
          background: 'var(--gradient-primary)',
          margin: '1rem auto 0',
          borderRadius: '2px',
          transformOrigin: 'center',
          boxShadow: '0 0 10px var(--glow-blue)',
        }}
      />
    </div>
  );
};

export default SectionHeader;
