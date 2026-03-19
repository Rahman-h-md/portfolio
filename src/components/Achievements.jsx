import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import SectionHeader from './SectionHeader';
import SectionDecorations from './SectionDecorations';

const Achievements = () => {
  const { achievements } = portfolioData;

  // Fallback icon map based on achievement icon string
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'star': return <Star size={24} strokeWidth={1.5} />;
      case 'award': return <Award size={24} strokeWidth={1.5} />;
      case 'trophy': 
      default: return <Trophy size={24} strokeWidth={1.5} />;
    }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="achievements" className="section-base section-scanline" style={{ paddingBottom: '6rem', overflow: 'hidden', position: 'relative' }}>
      <SectionDecorations particleColor="#fbbf24" accentColor="#ec4899" rainCount={4} particleCount={8} />
      <SectionHeader title="Milestones" subtitle="" accentWord="Milestones" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {achievements?.length > 0 ? (
          achievements.map((ach) => (
            <motion.div
              key={ach.id}
              variants={item}
              className="premium-glass"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.4s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(251, 191, 36, 0.3)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4), 0 0 30px rgba(251, 191, 36, 0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Subtle top glow line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: 'linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.6), transparent)',
              }} />

              {/* Icon & Date Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  padding: '12px',
                  borderRadius: '12px',
                  background: 'rgba(251, 191, 36, 0.08)',
                  border: '1px solid rgba(251, 191, 36, 0.2)',
                  color: '#fbbf24', // Amber glow color
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {getIcon(ach.icon)}
                </div>
                {ach.date && (
                  <span style={{
                    fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-subtle)',
                    background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                    padding: '0.2rem 0.6rem', borderRadius: '100px',
                  }}>
                    {ach.date}
                  </span>
                )}
              </div>

              {/* Content */}
              <div style={{ flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.4rem', lineHeight: 1.3 }}>
                  {ach.title}
                </h3>
                {ach.organization && (
                  <p style={{ fontSize: '1rem', color: '#fbbf24', fontWeight: 600, marginBottom: '0.75rem' }}>
                    {ach.organization}
                  </p>
                )}
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {ach.description}
                </p>
              </div>

              {/* Optional Link */}
              {ach.link && (
                <div style={{ marginTop: '0.5rem' }}>
                  <a href={ach.link} target="_blank" rel="noreferrer" style={{
                    display: 'inline-flex', alignItems: 'center', gap: '4px',
                    fontSize: '0.95rem', fontWeight: 600, color: '#fbbf24', textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#fcd34d'}
                  onMouseLeave={e => e.currentTarget.style.color = '#fbbf24'}
                  >
                    View Details <ChevronRight size={14} />
                  </a>
                </div>
              )}
            </motion.div>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
            <p>More achievements coming soon.</p>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Achievements;
