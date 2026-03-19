import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import SectionHeader from './SectionHeader';
import { Award, ExternalLink, ZoomIn, X } from 'lucide-react';
import SectionDecorations from './SectionDecorations';

/* Issuer → accent colour */
const ISSUER_COLORS = {
  'Infosys Springboard':           '#00c6c6',
  'Google':                        '#4285F4',
  'FutureLearn':                   '#de0a85',
  'Lovely Professional University':'#f59e0b',
};

const isImageFile = f => /\.(png|jpg|jpeg|webp)$/i.test(f);
const isPdfFile  = f => /\.pdf$/i.test(f);

/* ─── Full-screen lightbox ─── */
const Lightbox = ({ cert, color, onClose }) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.88)',
        backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        onClick={e => e.stopPropagation()}
        style={{
          background: 'rgba(10,20,40,0.97)',
          border: `1px solid ${color}40`,
          borderRadius: '20px',
          overflow: 'hidden',
          maxWidth: '860px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: `0 40px 100px rgba(0,0,0,0.7), 0 0 60px ${color}20`,
        }}
      >
        {/* Lightbox header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '1rem 1.5rem', borderBottom: `1px solid ${color}20`,
        }}>
          <div>
            <p style={{ fontSize: '1rem', fontWeight: 700, color, margin: 0 }}>{cert.issuer}</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-subtle)', margin: 0 }}>{cert.title}</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <a href={cert.file} target="_blank" rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem',
                fontSize: '0.9rem', fontWeight: 600, color,
                padding: '0.3rem 0.8rem', borderRadius: '100px',
                border: `1px solid ${color}40`, background: `${color}12`,
                textDecoration: 'none' }}>
              <ExternalLink size={12} /> Open
            </a>
            <button onClick={onClose}
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '50%', width: '32px', height: '32px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'var(--text-muted)' }}>
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Preview */}
        <div style={{ flex: 1, overflow: 'auto', background: '#0a0f1e' }}>
          {isImageFile(cert.file) ? (
            <img src={cert.file} alt={cert.title}
              style={{ width: '100%', display: 'block', objectFit: 'contain' }} />
          ) : (
            <iframe src={cert.file} title={cert.title}
              style={{ width: '100%', height: '75vh', border: 'none', display: 'block' }} />
          )}
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

/* ─── Single cert card ─── */
const CertCard = ({ cert, index }) => {
  const [open, setOpen] = useState(false);
  const color = ISSUER_COLORS[cert.issuer] || '#10b981';

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.07 }}
        className="premium-glass"
        style={{
          display: 'flex', flexDirection: 'column',
          overflow: 'hidden', transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onClick={() => setOpen(true)}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = `${color}50`;
          e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.4), 0 0 28px ${color}18`;
          e.currentTarget.style.transform = 'translateY(-4px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--glass-border)';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {/* ── Preview panel ── */}
        <div style={{
          position: 'relative', overflow: 'hidden',
          height: '180px', background: '#060d1c',
          borderBottom: `1px solid ${color}20`,
        }}>
          {/* Top shimmer */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px', zIndex: 2,
            background: `linear-gradient(90deg, transparent, ${color}90, transparent)`,
          }} />

          {isImageFile(cert.file) ? (
            <img src={cert.file} alt={cert.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top',
                opacity: 0.92, transition: 'transform 0.4s ease' }} />
          ) : isPdfFile(cert.file) ? (
            /* PDF: render first page in a scaled-down iframe */
            <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
              <iframe
                src={`${cert.file}#toolbar=0&view=FitH&page=1`}
                title={cert.title}
                scrolling="no"
                style={{
                  width: '170%', height: '170%',
                  border: 'none',
                  transform: 'scale(0.59)',
                  transformOrigin: 'top left',
                  pointerEvents: 'none',
                }}
              />
              {/* Overlay to block iframe interaction & prevent scroll */}
              <div style={{ position: 'absolute', inset: 0 }} />
            </div>
          ) : (
            <div style={{ width: '100%', height: '100%', display: 'flex',
              alignItems: 'center', justifyContent: 'center' }}>
              <Award size={48} color={color} strokeWidth={1} style={{ opacity: 0.3 }} />
            </div>
          )}

          {/* Zoom hint overlay */}
          <div style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            background: `${color}10`,
            opacity: 0, transition: 'opacity 0.25s',
          }}
            className="cert-zoom-hint"
            onMouseEnter={e => { e.currentTarget.style.opacity = 1; }}
            onMouseLeave={e => { e.currentTarget.style.opacity = 0; }}
          >
            <ZoomIn size={28} color={color} style={{ filter: `drop-shadow(0 0 8px ${color})` }} />
          </div>
        </div>

        {/* ── Info panel ── */}
        <div style={{ padding: '1.1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 600, lineHeight: 1.4,
            color: 'var(--text-main)', margin: 0 }}>
            {cert.title}
          </h4>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
            <span style={{
              fontSize: '0.85rem', fontWeight: 700, color,
              background: `${color}15`, border: `1px solid ${color}30`,
              borderRadius: '100px', padding: '0.15rem 0.6rem',
              letterSpacing: '0.03em', whiteSpace: 'nowrap',
            }}>
              {cert.issuer}
            </span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-subtle)', whiteSpace: 'nowrap' }}>
              {cert.date}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Lightbox */}
      {open && <Lightbox cert={cert} color={color} onClose={() => setOpen(false)} />}
    </>
  );
};

/* ─── Main section ─── */
const Certifications = () => {
  const { certifications, personal } = portfolioData;

  return (
    <section id="certifications" className="section-base" style={{ minHeight: 'auto', paddingBottom: '6rem' }}>
      <SectionHeader title="Credentials" subtitle="Certifications" accentWord="Credentials" />

      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>

        {/* Cert cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {certifications.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} />
          ))}
        </div>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.95rem',
          color: 'var(--text-subtle)', opacity: 0.7 }}>
          Click any card to preview the certificate
        </p>
      </div>
    </section>
  );
};

export default Certifications;
