import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import SectionDecorations from './SectionDecorations';

const About = () => {
  const { aboutPage } = portfolioData.personal;

  return (
    <section id="about" className="section-scanline" style={{
      minHeight: '100vh', padding: '6rem 2rem 4rem', position: 'relative',
      background: 'var(--bg-main)', overflow: 'hidden',
    }}>
      <SectionDecorations particleColor="#c084fc" accentColor="#ec4899" rainCount={4} particleCount={10} />
      <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
        
        {/* Title */}
        <motion.div
           initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
           style={{ textAlign: 'center', marginBottom: '3rem' }}
         >
           <h2 style={{
             fontFamily: 'var(--font-heading)', fontSize: '3rem', fontWeight: 800,
             color: 'var(--text-main)', marginBottom: '0.5rem', display: 'inline-block', position: 'relative'
           }}>
             About <span style={{ color: 'var(--neon-purple)' }}>Me</span>
             <div style={{
               position: 'absolute', bottom: '-5px', left: '15%', width: '70%', height: '3px',
               background: 'linear-gradient(90deg, var(--neon-blue) 0%, var(--neon-purple) 100%)',
               borderRadius: '2px'
             }} />
           </h2>
         </motion.div>

        {/* CSS Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          alignItems: 'start'
        }}>
          
          {/* LEFT COLUMN: Quick Facts & Hobbies */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Quick Facts Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                background: 'rgba(10, 15, 30, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '1.5rem'
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                Quick Facts
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {aboutPage.quickFacts.map((fact, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '32px', height: '32px', borderRadius: '8px',
                      background: 'rgba(88, 86, 214, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1rem'
                    }}>
                      {fact.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>{fact.label}</p>
                      <p style={{ fontSize: '1rem', color: 'var(--text-main)', fontWeight: 500 }}>{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* When I'm Not Coding Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                background: 'rgba(10, 15, 30, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '1.5rem'
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '1.5rem' }}>
                When I'm Not Coding
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {aboutPage.hobbies.map((hobby, idx) => (
                  <div key={idx} style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    background: 'rgba(255, 255, 255, 0.03)', padding: '0.8rem 1rem', borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.02)'
                  }}>
                    <span style={{ fontSize: '1.5rem' }}>{hobby.icon}</span>
                    <span style={{ fontSize: '1rem', color: 'var(--text-main)' }}>{hobby.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Journey & Approach */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* My Journey Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                background: 'rgba(10, 15, 30, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '1.8rem'
              }}
            >
              <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--neon-blue)', marginBottom: '1.25rem' }}>
                My Journey
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {aboutPage.myJourney.map((para, idx) => {
                  /* Dynamically highlight the name from portfolio data */
                  const isFirst = idx === 0;
                  const parts = isFirst ? para.split(portfolioData.personal.name) : [para];
                  
                  return (
                    <p key={idx} style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                      {isFirst && parts.length > 1 ? (
                        <>
                          {parts[0]}
                          <span style={{ color: 'var(--neon-purple)', fontWeight: 600 }}>{portfolioData.personal.name}</span>
                          {parts[1]}
                        </>
                      ) : (
                        para
                      )}
                    </p>
                  );
                })}
              </div>
            </motion.div>

            {/* My Approach Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                background: 'rgba(10, 15, 30, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '1.8rem'
              }}
            >
              <h3 style={{ fontSize: '1.35rem', fontWeight: 600, color: 'var(--neon-blue)', marginBottom: '1.25rem' }}>
                My Approach
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                {aboutPage.myApproach}
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
