import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import SectionDecorations from './SectionDecorations';

const Contact = () => {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', msg: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', msg: '' });
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ state: 'success', msg: data.msg });
        setFormData({ name: '', email: '', message: '' }); // reset form
      } else {
        setStatus({ state: 'error', msg: data.msg || 'Something went wrong.' });
      }
    } catch (err) {
      console.error(err);
      setStatus({ state: 'error', msg: 'Unable to connect to server. Is the backend running?' });
    }
  };

  const contactLinks = [
    {
      icon: <Mail size={16} />,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`
    },
    {
      icon: <Phone size={16} />,
      label: 'Phone',
      value: '+91-9835385670',
      href: 'tel:+919835385670'
    },
    {
      icon: <Linkedin size={16} />,
      label: 'LinkedIn',
      value: personal.linkedin.replace('https://www.', ''),
      href: personal.linkedin
    },
    {
      icon: <Github size={16} />,
      label: 'GitHub',
      value: personal.github.replace('https://', ''),
      href: personal.github
    }
  ];

  return (
    <section id="contact" className="section-scanline" style={{
      minHeight: '100vh',
      padding: '4rem 1rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'var(--bg-main)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <SectionDecorations particleColor="#c084fc" accentColor="#f472b6" rainCount={4} particleCount={10} />
      <div style={{ maxWidth: '1000px', width: '100%' }}>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '3rem',
            fontWeight: 800,
            color: 'var(--neon-blue)',
            marginBottom: '0.5rem',
            display: 'inline-block',
            position: 'relative'
          }}>
            Get In <span style={{ color: 'var(--neon-purple)' }}>Touch</span>
            <div style={{
              position: 'absolute', bottom: '-5px', left: '10%', width: '80%', height: '3px',
              background: 'linear-gradient(90deg, var(--neon-blue) 0%, var(--neon-purple) 100%)',
              borderRadius: '2px'
            }} />
          </h2>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1.1rem',
            maxWidth: '600px',
            margin: '2.5rem auto 0',
            lineHeight: 1.6,
          }}>
            Have a question or want to work together? Fill out the form below or reach out
            directly through my contact information.
          </p>
        </motion.div>

        {/* Two Column Grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem', marginBottom: '1.5rem'
        }}>

          {/* LEFT: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              background: 'rgba(2, 8, 23, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '2rem'
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              <div>
                <label style={{ display: 'block', fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  style={{
                    width: '100%', padding: '0.9rem 1rem', borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.08)',
                    color: 'var(--text-main)', fontSize: '1.05rem', outline: 'none', transition: 'border 0.3s'
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--neon-blue)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  style={{
                    width: '100%', padding: '0.9rem 1rem', borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.08)',
                    color: 'var(--text-main)', fontSize: '1.05rem', outline: 'none', transition: 'border 0.3s'
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--neon-blue)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message..."
                  rows={5}
                  style={{
                    width: '100%', padding: '0.9rem 1rem', borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255,255,255,0.08)',
                    color: 'var(--text-main)', fontSize: '1.05rem', outline: 'none', resize: 'vertical',
                    transition: 'border 0.3s'
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--neon-blue)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              <button
                type="submit"
                disabled={status.state === 'loading'}
                style={{
                  width: '100%', padding: '1rem', borderRadius: '6px', marginTop: '0.5rem',
                  background: 'linear-gradient(45deg, rgba(88,86,214,1) 0%, rgba(0,212,255,1) 100%)',
                  color: '#fff', fontSize: '1.1rem', fontWeight: 700, border: 'none', cursor: status.state === 'loading' ? 'not-allowed' : 'pointer',
                  transition: 'opacity 0.3s ease', fontFamily: 'inherit',
                  opacity: status.state === 'loading' ? 0.7 : 1
                }}
                onMouseEnter={e => { if(status.state !== 'loading') e.currentTarget.style.opacity = 0.9 }}
                onMouseLeave={e => { if(status.state !== 'loading') e.currentTarget.style.opacity = 1 }}
              >
                {status.state === 'loading' ? 'Sending...' : 'Send Message'}
              </button>

              {status.msg && (
                <div style={{
                  padding: '1rem', borderRadius: '6px', textAlign: 'center', marginTop: '0.5rem', fontSize: '0.95rem',
                  background: status.state === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(244, 63, 94, 0.1)',
                  color: status.state === 'success' ? '#10b981' : '#f43f5e',
                  border: `1px solid ${status.state === 'success' ? '#10b981' : '#f43f5e'}`
                }}>
                  {status.msg}
                </div>
              )}

            </form>
          </motion.div>

          {/* RIGHT: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              background: 'rgba(2, 8, 23, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '12px',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--neon-blue)', marginBottom: '1.5rem' }}>
              Contact Information
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flexGrow: 1 }}>
              {contactLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    textDecoration: 'none', transition: 'transform 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateX(5px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
                >
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '6px',
                    background: 'rgba(88, 86, 214, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--neon-purple)', flexShrink: 0
                  }}>
                    {link.icon}
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>{link.label}</p>
                    <p style={{
                      fontSize: '1rem', color: 'var(--neon-blue)', fontWeight: 500,
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
                    }}>
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Follow Me Block */}
            <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Follow Me</p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" style={socialCircleStyle}>L</a>
                <a href={personal.github} target="_blank" rel="noreferrer" style={socialCircleStyle}>G</a>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            background: 'rgba(2, 8, 23, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '8px',
            padding: '1.25rem',
            textAlign: 'center'
          }}
        >
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', margin: 0 }}>
            Looking forward to hearing from you!
          </p>
        </motion.div>

      </div>
    </section>
  );
};

// Helper style for the circular social links in 'Follow Me'
const socialCircleStyle = {
  width: '32px', height: '32px', borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center',
  color: 'var(--text-main)', fontSize: '1rem', fontWeight: 600, textDecoration: 'none',
  transition: 'all 0.3s ease'
};

export default Contact;
