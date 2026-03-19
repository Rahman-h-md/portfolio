import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import SectionHeader from './SectionHeader';
import { Github, ExternalLink, Terminal } from 'lucide-react';
import SectionDecorations from './SectionDecorations';

const Projects = () => {
  const { projects } = portfolioData;

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="projects" className="section-base section-scanline" style={{ overflow: 'hidden', position: 'relative' }}>
      <SectionDecorations particleColor="#ec4899" accentColor="#c084fc" rainCount={5} particleCount={10} />
      <SectionHeader title="What I've Built" subtitle="" accentWord="Built" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2rem',
          width: '100%',
        }}
      >
        {projects.map(project => (
          <motion.div
            key={project.id}
            variants={item}
            className="premium-glass"
            style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', transition: 'all 0.4s ease' }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.5), 0 0 30px rgba(0,212,255,0.08)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Header bar — simulates a code editor chrome */}
            <div style={{
              padding: '1rem 1.5rem',
              background: 'rgba(0, 212, 255, 0.04)',
              borderBottom: '1px solid var(--glass-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#febc2e' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }} />
              </div>
              {/* Link icons — top-right corner */}
              <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center' }}>
                {[{ icon: <Github size={17} />, href: project.github }, { icon: <ExternalLink size={17} />, href: project.link }].map((btn, i) => (
                  btn.href && btn.href !== '#' ? (
                    <a key={i} href={btn.href} target="_blank" rel="noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{ color: 'var(--text-subtle)', transition: 'color 0.2s', lineHeight: 0 }}
                      onMouseEnter={e => { e.currentTarget.style.color = 'var(--neon-blue)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-subtle)'; }}
                    >
                      {btn.icon}
                    </a>
                  ) : (
                    <span key={i} style={{ color: 'rgba(255,255,255,0.15)', lineHeight: 0, cursor: 'not-allowed' }}>
                      {btn.icon}
                    </span>
                  )
                ))}
              </div>
            </div>

            <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '0.25rem' }}>{project.title}</h3>
                  {project.subtitle && (
                    <p style={{ fontSize: '0.9rem', color: 'var(--neon-blue)', margin: 0, opacity: 0.8, lineHeight: 1.4 }}>
                      {project.subtitle}
                    </p>
                  )}
                </div>
                {project.date && (
                  <span style={{
                    fontSize: '0.85rem', fontWeight: 600,
                    color: 'var(--text-subtle)', background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '100px', padding: '0.12rem 0.55rem',
                    whiteSpace: 'nowrap',
                  }}>
                    {project.date}
                  </span>
                )}
              </div>

              <p style={{ lineHeight: 1.7, marginBottom: '1.5rem', flexGrow: 1, marginTop: '0.9rem', fontSize: '1.05rem' }}>{project.description}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    padding: '0.3rem 0.75rem', borderRadius: '6px',
                    background: 'rgba(0,212,255,0.06)',
                    border: '1px solid rgba(0,212,255,0.15)',
                    color: 'var(--neon-blue)',
                    fontSize: '0.95rem',
                    fontFamily: 'monospace',
                    fontWeight: 500,
                    letterSpacing: '0.03em',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
