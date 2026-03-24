import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const AudioWaveIcon = ({ isPlaying }) => {
  const bars = [
    { base: 4, peak: 10 },
    { base: 6, peak: 16 },
    { base: 8, peak: 20 },
    { base: 6, peak: 16 },
    { base: 4, peak: 10 },
  ];

  return (
    <div style={{ display: 'flex', gap: '3px', alignItems: 'center', justifyContent: 'center', height: '24px' }}>
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          animate={{ height: isPlaying ? [bar.base, bar.peak, bar.base] : bar.base }}
          transition={{
            duration: 0.8,
            repeat: isPlaying ? Infinity : 0,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
          style={{ width: '3px', backgroundColor: 'currentColor', borderRadius: '2px' }}
        />
      ))}
    </div>
  );
};

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(() => {
    if (typeof window !== 'undefined') {
      const a = new Audio(`${import.meta.env.BASE_URL}lofi.mp3`);
      a.loop = true;
      a.preload = 'auto';
      return a;
    }
    return null;
  });

  const toggleMusic = () => {
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // Force load on mobile devices right before playing if suspended
      if (audio.readyState === 0) audio.load();
      audio.play().then(() => setIsPlaying(true)).catch(e => {
        console.error('Audio playback failed:', e);
        alert('Playback blocked by browser: ' + e.message);
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Resume', href: '#resume', id: 'resume' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Achievements', href: '#achievements', id: 'achievements' },
    { name: 'Experience', href: '#experience', id: 'experience' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    setIsOpen(false);

    // Smooth scroll directly to the section on the page
    const element = document.getElementById(id);
    if (element) {
      const yStr = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: yStr, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Background Music handled dynamically via Audio object */}

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: scrolled ? '1rem' : '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 100,
          width: 'max-content', 
          maxWidth: '96vw', // Prevents it from ever overflowing the viewport width
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0.5rem 1rem', // Reduced padding
          borderRadius: scrolled ? '100px' : '18px',
          background: scrolled ? 'rgba(2, 8, 23, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          border: scrolled ? '1px solid rgba(0, 212, 255, 0.12)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.6)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: '1.2rem',
          color: 'var(--text-main)',
          letterSpacing: '-0.02em',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          cursor: 'pointer',
          textDecoration: 'none',
          marginRight: '1rem' // Reduced space before links to save width
        }}>
          <span style={{ color: 'var(--neon-blue)' }}>&lt;</span>
          {portfolioData.personal.name.split(' ')[0]}
          <span style={{ color: 'var(--neon-blue)' }}>/&gt;</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ul className="desk-nav" style={{
            display: 'flex', gap: '0.15rem', listStyle: 'none', margin: 0, padding: 0
          }}>
            {navLinks.map(link => {
              const active = activeSection === link.id;
              return (
                <li key={link.name} style={{ position: 'relative' }}>
                  {active && (
                    <motion.div
                      layoutId="nav-pill"
                      style={{
                        position: 'absolute', inset: 0,
                        background: 'rgba(0, 212, 255, 0.08)',
                        border: '1px solid rgba(0, 212, 255, 0.15)',
                        borderRadius: '100px', zIndex: 0,
                      }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.id)} style={{
                    display: 'block', padding: '0.35rem 0.5rem', // Reduced link padding
                    color: active ? 'var(--neon-blue)' : 'var(--text-muted)',
                    fontSize: '0.8rem', fontWeight: active ? 600 : 400,
                    position: 'relative', zIndex: 1, transition: 'color 0.2s', whiteSpace: 'nowrap', textDecoration: 'none', cursor: 'pointer'
                  }}
                  onMouseEnter={e => { if (!active) e.target.style.color = 'var(--text-main)'; }}
                  onMouseLeave={e => { if (!active) e.target.style.color = 'var(--text-muted)'; }}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            onClick={toggleMusic}
            aria-label="Toggle Music"
            title="Play/Pause Background Music"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(0, 212, 255, 0.08)',
              border: '1px solid rgba(0, 212, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--neon-blue)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0
            }}
          >
            <AudioWaveIcon isPlaying={isPlaying} />
          </button>

          {/* Mobile burger */}
          <button className="mob-btn" onClick={() => setIsOpen(!isOpen)} style={{
            background: 'transparent', padding: '0.4rem', border: 'none',
            display: 'none', color: 'var(--text-main)', cursor: 'pointer',
          }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99,
              background: 'rgba(2, 8, 23, 0.97)', backdropFilter: 'blur(20px)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.id)}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }} transition={{ delay: i * 0.08 }}
                style={{
                  fontSize: '2.5rem', fontFamily: 'var(--font-heading)', fontWeight: 700,
                  color: activeSection === link.id ? 'var(--neon-blue)' : 'var(--text-muted)',
                  letterSpacing: '-0.02em', textDecoration: 'none', cursor: 'pointer'
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desk-nav { display: flex !important; }
          .mob-btn  { display: none  !important; }
        }
        @media (max-width: 767px) {
          .desk-nav { display: none  !important; }
          .mob-btn  { display: flex  !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
