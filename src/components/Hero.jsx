import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Code2, Terminal, Braces, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import Hero3D from './Hero3D';


/* Floating tech icon node for the right-column visual */
const TechNode = ({ icon, x, y, delay, size = 48 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    style={{
      position: 'absolute',
      top: y,
      left: x,
      width: size,
      height: size,
      borderRadius: '14px',
      background: 'rgba(10, 22, 40, 0.8)',
      border: '1px solid rgba(0, 212, 255, 0.25)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--neon-blue)',
      boxShadow: '0 0 20px rgba(0, 212, 255, 0.15)',
      backdropFilter: 'blur(10px)',
    }}
  >
    {icon}
  </motion.div>
);

const Hero = ({ setActiveSection }) => {
  const { name, role, tagline, github, linkedin, email } = portfolioData.personal;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0]);
  const [playKey, setPlayKey] = useState(0);

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <>
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '8rem 2rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>


        {/* ── Decorative animated background ── */}
        <Hero3D />

        {/* Subtle grid overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
          linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
        `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none', zIndex: 0,
        }} />


        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }} className="hero-grid">

          {/* ─── LEFT column: text ─── */}
          <motion.div style={{ y: y1, opacity }}>

            {/* Status badge */}
            <motion.div
              custom={0} variants={textVariants} initial="hidden" animate="visible"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0, 212, 255, 0.05)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
                padding: '0.5rem 1.25rem',
                borderRadius: '100px',
                marginBottom: '2rem',
                fontSize: '1rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: 'var(--neon-blue)',
              }}
            >
              <span style={{
                width: '7px', height: '7px', borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 10px #10b981',
                animation: 'pulse 2s ease-in-out infinite',
              }} />
              Computer Science Engineer
            </motion.div>

            {/* Main headline */}
            <div onMouseEnter={() => setPlayKey(prev => prev + 1)} style={{ paddingTop: '10px', cursor: 'default' }}>
              <motion.div
                key={playKey}
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
                style={{
                  fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  marginBottom: '1rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'baseline',
                  gap: '0.25em',
                }}
              >
                {'Hey! I\'m Rahman'.split(' ').map((word, i) => (
                  <span key={i} style={{ display: 'inline-flex' }}>
                    {word.split('').map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1, transition: { duration: 0.01 } }
                        }}
                        style={{
                          color: i === 2 ? 'transparent' : 'var(--text-main)',
                          background: i === 2 ? 'var(--gradient-primary)' : 'none',
                          WebkitBackgroundClip: i === 2 ? 'text' : 'none',
                          WebkitTextFillColor: i === 2 ? 'transparent' : 'var(--text-main)',
                          display: 'inline-block',
                          textShadow: i === 2 ? 'none' : '0 0 15px rgba(255, 255, 255, 0.4)',
                          filter: i === 2 ? 'drop-shadow(0 0 12px rgba(236, 72, 153, 0.6))' : 'none',
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Sub-headline */}
            <motion.p
              custom={2} variants={textVariants} initial="hidden" animate="visible"
              style={{
                fontSize: '1.5rem',
                lineHeight: 1.6,
                color: 'var(--text-muted)',
                maxWidth: '520px',
                marginBottom: '2.5rem',
                fontWeight: 500,
              }}
            >
              Crafting{' '}
              <motion.span
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                style={{
                  background: 'linear-gradient(90deg, #c084fc, #ec4899, #c084fc)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                  fontWeight: 700,
                }}
              >
                Full Stack
              </motion.span>
              <br />
              Digital Solutions
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              custom={3} variants={textVariants} initial="hidden" animate="visible"
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}
            >
              <a href="#projects" className="btn-neon" onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('projects');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
              }}>
                View My Work <ArrowRight size={18} />
              </a>
              <button className="btn-outline" onClick={() => {
                const el = document.getElementById('contact');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
              }}
                style={{ background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', fontSize: '1.15rem' }}>
                <Mail size={18} /> Let's Talk
              </button>
            </motion.div>


          </motion.div>

          {/* ─── RIGHT column: profile photo ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}
            className="hero-visual"
          >
            {/* Outer glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                top: '50%', left: '50%',
                width: '520px', height: '520px',
                marginTop: '-260px', marginLeft: '-260px',
                borderRadius: '50%',
                border: '2px dashed rgba(0, 212, 255, 0.5)',
                boxShadow: '0 0 18px rgba(0,212,255,0.15)',
                pointerEvents: 'none',
              }}
            />
            {/* Third ring — clockwise, teal accent */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                top: '50%', left: '50%',
                width: '570px', height: '570px',
                marginTop: '-285px', marginLeft: '-285px',
                borderRadius: '50%',
                border: '1.5px dashed rgba(16, 185, 129, 0.35)',
                boxShadow: '0 0 12px rgba(16,185,129,0.08)',
                pointerEvents: 'none',
              }}
            />

            {/* Photo frame */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'relative',
                width: '400px',
                height: '500px',
                borderRadius: '28px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 212, 255, 0.25)',
                boxShadow: '0 0 60px rgba(0, 212, 255, 0.12), 0 30px 60px rgba(0,0,0,0.5)',
                background: 'var(--surface-1)',
              }}
            >
              <img
                src={portfolioData.personal.profileImage}
                alt={portfolioData.personal.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                  filter: 'brightness(0.95) contrast(1.05)',
                }}
              />
              {/* Subtle neon bottom gradient for text readability */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                height: '120px',
                background: 'linear-gradient(to top, rgba(2,8,23,0.85) 0%, transparent 100%)',
              }} />
            </motion.div>

            {/* Floating badge — Open to Work */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '30px',
                right: '-10px',
                background: 'rgba(2, 8, 23, 0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0, 212, 255, 0.25)',
                borderRadius: '14px',
                padding: '0.75rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 8px #10b981',
                animation: 'pulse 2s infinite',
                flexShrink: 0,
              }} />
              <div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.2 }}>Status</p>
                <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>Open to Work</p>
              </div>
            </motion.div>

            {/* Floating badge — Role */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              style={{
                position: 'absolute',
                top: '30px',
                left: '-10px',
                background: 'rgba(2, 8, 23, 0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0, 212, 255, 0.25)',
                borderRadius: '14px',
                padding: '0.75rem 1.25rem',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              }}
            >
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.2 }}>Specialization</p>
              <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--neon-blue)', margin: 0 }}>Full Stack Developer</p>
            </motion.div>

            {/* Background glow */}
            <div style={{
              position: 'absolute',
              width: '300px', height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)',
              filter: 'blur(40px)',
              zIndex: -1,
            }} />
          </motion.div>
        </div>

        <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual { display: none !important; }
          .hero-social-sidebar { display: none !important; }
        }
      `}</style>
      </section>

      {/* ── Fixed vertical social sidebar (left edge) ── */}
      <motion.div
        className="hero-social-sidebar"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 1.2, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          left: '1.75rem',
          top: '40%',
          transform: 'translateY(-50%)',
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.85rem',
        }}
      >
        {/* Top line */}
        <div style={{ width: '1px', height: '70px', background: 'linear-gradient(to bottom, transparent, var(--glass-border))' }} />

        {[
          { icon: <Github size={19} />, link: github, label: 'GitHub' },
          { icon: <Linkedin size={19} />, link: linkedin, label: 'LinkedIn' },
          { icon: <Mail size={19} />, link: `mailto:${email}`, label: 'Email' },
        ].map((s, i) => (
          <a
            key={i}
            href={s.link}
            target={s.label !== 'Email' ? '_blank' : undefined}
            rel="noreferrer"
            title={s.label}
            style={{
              color: 'var(--text-muted)',
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(2,8,23,0.6)',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--neon-blue)';
              e.currentTarget.style.color = 'var(--neon-blue)';
              e.currentTarget.style.boxShadow = '0 0 14px var(--glow-blue)';
              e.currentTarget.style.transform = 'translateX(4px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--glass-border)';
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateX(0)';
            }}
          >
            {s.icon}
          </a>
        ))}

        {/* Bottom line */}
        <div style={{ width: '1px', height: '70px', background: 'linear-gradient(to top, transparent, var(--glass-border))' }} />
      </motion.div>
    </>
  );
};

export default Hero;
