import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import SectionHeader from './SectionHeader';
import { Briefcase } from 'lucide-react';
import SectionDecorations from './SectionDecorations';

const Experience = () => {
  const { experience } = portfolioData;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end center'] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="section-base section-scanline" style={{ overflow: 'hidden', position: 'relative' }}>
      <SectionDecorations particleColor="#fb7185" accentColor="#c084fc" rainCount={4} particleCount={8} />
      <SectionHeader title="Professional Journey" subtitle="" accentWord="Journey" />

      <div ref={containerRef} style={{ maxWidth: '800px', margin: '0 auto', width: '100%', position: 'relative' }}>

        {/* Animated timeline line */}
        <div style={{ position: 'absolute', left: '18px', top: 0, bottom: 0, width: '2px', background: 'var(--surface-2)' }}>
          <motion.div style={{ position: 'absolute', top: 0, left: 0, right: 0, background: 'var(--gradient-primary)', height: lineHeight, boxShadow: '0 0 10px var(--glow-blue)' }} />
        </div>

        {experience.map((exp, i) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            style={{ position: 'relative', paddingLeft: '4rem', marginBottom: '3rem' }}
          >
            {/* Dot */}
            <motion.div
              whileInView={{ scale: [0, 1.5, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
              style={{
                position: 'absolute', left: '10px', top: '24px',
                width: '16px', height: '16px',
                borderRadius: '50%',
                background: 'var(--root-bg)',
                border: '2px solid var(--neon-blue)',
                boxShadow: '0 0 12px var(--glow-blue)',
                zIndex: 1,
              }}
            />

            <div
              className="premium-glass"
              style={{ padding: '2rem', textAlign: 'left', transition: 'all 0.3s ease' }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateX(8px)';
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.25)';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(0,212,255,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>{exp.role}</h3>
                  <p style={{ color: 'var(--neon-blue)', fontWeight: 600, fontSize: '1.15rem' }}>{exp.company}</p>
                </div>
                <span style={{
                  padding: '0.4rem 1rem', borderRadius: '100px',
                  background: 'rgba(0,212,255,0.07)',
                  border: '1px solid rgba(0,212,255,0.2)',
                  color: 'var(--neon-blue)', fontSize: '1rem', fontWeight: 600,
                }}>
                  {exp.duration}
                </span>
              </div>
              {exp.highlights ? (
                <ul style={{
                  listStyleType: 'disc', paddingLeft: '1.2rem', color: 'var(--text-muted)',
                  display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '1.1rem',
                  lineHeight: 1.6
                }}>
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} style={{ paddingLeft: '0.4rem' }}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p style={{ lineHeight: 1.7, color: 'var(--text-muted)' }}>{exp.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
