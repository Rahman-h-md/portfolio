import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'Home',           href: '#home',           id: 'home' },
    { name: 'About',          href: '#about',          id: 'about' },
    { name: 'Resume',         href: '#resume',         id: 'resume' },
    { name: 'Skills',         href: '#skills',         id: 'skills' },
    { name: 'Projects',       href: '#projects',       id: 'projects' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Achievements',   href: '#achievements',   id: 'achievements' },
    { name: 'Experience',     href: '#experience',     id: 'experience' },
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
          width: 'max-content', // Only take up as much space as needed
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0.75rem 1.5rem',
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
          fontSize: '1.25rem',
          color: 'var(--text-main)',
          letterSpacing: '-0.02em',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          cursor: 'pointer',
          textDecoration: 'none',
          marginRight: '2rem' // Space before links
        }}>
          <span style={{ color: 'var(--neon-blue)' }}>&lt;</span>
          {portfolioData.personal.name.split(' ')[0]}
          <span style={{ color: 'var(--neon-blue)' }}>/&gt;</span>
        </a>

        <ul className="desk-nav" style={{
          display: 'flex', gap: '0.25rem', listStyle: 'none', margin: 0, padding: 0
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
                  display: 'block', padding: '0.4rem 0.6rem',
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



        {/* Mobile burger */}
        <button className="mob-btn" onClick={() => setIsOpen(!isOpen)} style={{
          background: 'transparent', padding: '0.5rem', border: 'none',
          display: 'none', color: 'var(--text-main)', cursor: 'pointer',
        }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
