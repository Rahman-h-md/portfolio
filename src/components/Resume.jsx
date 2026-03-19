import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('Education');
  
  const tabs = ['Education', 'Skills', 'Projects', 'Extracurricular', 'Certificates'];

  const personal = portfolioData.personal;

  const renderContent = () => {
    switch (activeTab) {
      case 'Education':
        return (
          <div className="resume-content-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {portfolioData.education?.map(item => (
              <ResumeCard key={item.id} data={item} />
            ))}
          </div>
        );
      case 'Skills':
        return (
          <div className="resume-skills-grid" style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1.5rem'
          }}>
            {portfolioData.skills?.map(skill => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: 'rgba(2, 8, 23, 0.6)', border: '1px solid rgba(0, 212, 255, 0.15)',
                  borderRadius: '12px', padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column',
                  alignItems: 'center', gap: '0.75rem', backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ y: -5, borderColor: 'var(--neon-blue)', boxShadow: '0 5px 15px rgba(0,212,255,0.15)' }}
              >
                <img src={skill.icon} alt={skill.name} style={{ width: '40px', height: '40px' }} />
                <span style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text-main)', textAlign: 'center' }}>
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        );
      case 'Projects':
        return (
          <div className="resume-content-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {portfolioData.projects?.map(project => (
              <ResumeCard key={project.id} data={{
                category: "PROJECT",
                title: project.title,
                organization: project.tech.join(" · "),
                date: "2023 - 2024",
                highlights: [project.description]
              }} />
            ))}
          </div>
        );
      case 'Extracurricular':
        return (
          <div className="resume-content-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {portfolioData.extracurricular?.map(item => (
              <ResumeCard key={item.id} data={item} />
            ))}
          </div>
        );
      case 'Certificates':
        return (
          <div className="resume-content-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {portfolioData.certifications?.map(cert => (
              <ResumeCard key={cert.id} data={{
                category: "CERTIFICATION",
                title: cert.title,
                organization: cert.issuer,
                date: cert.date,
                highlights: []
              }} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="resume" style={{
      minHeight: '100vh', padding: '4rem 2rem 2rem', position: 'relative',
      background: 'var(--bg-main)'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '1.5rem' }}
        >
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800,
            color: 'var(--text-main)', marginBottom: '0.8rem'
          }}>
            My <span style={{ color: 'var(--neon-purple)', textShadow: '0 0 20px rgba(168,85,247,0.4)' }}>Resume</span>
          </h2>
          <div style={{ width: '50px', height: '3px', background: 'var(--gradient-primary)', margin: '0 auto', borderRadius: '4px' }} />
        </motion.div>

        {/* Contact Info Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.8rem',
            marginBottom: '2rem'
          }}
        >
          <ContactPill icon={<Mail size={16} />} text={personal.email} />
          <ContactPill icon={<Phone size={16} />} text="+91-8278478622" />
          <ContactPill icon={<Linkedin size={16} />} text="LinkedIn" link={personal.linkedin} />
          <ContactPill icon={<Github size={16} />} text="GitHub" link={personal.github} />
        </motion.div>

        {/* Tabs + Download button row */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          flexWrap: 'wrap', gap: '0.3rem',
          marginBottom: '2rem'
        }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.4rem 1rem', borderRadius: '6px', cursor: 'pointer',
                fontFamily: 'inherit', fontSize: '1rem', fontWeight: activeTab === tab ? 600 : 400,
                background: activeTab === tab ? 'var(--neon-blue)' : 'transparent',
                color: activeTab === tab ? '#000' : 'var(--text-muted)',
                border: 'none', transition: 'all 0.3s ease',
                boxShadow: activeTab === tab ? '0 0 20px rgba(0,212,255,0.4)' : 'none'
              }}
              onMouseEnter={e => { if (activeTab !== tab) e.currentTarget.style.color = 'var(--text-main)'; }}
              onMouseLeave={e => { if (activeTab !== tab) e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              {tab}
            </button>
          ))}

          {/* Divider */}
          <span style={{ width: '1px', height: '22px', background: 'rgba(255,255,255,0.12)', margin: '0 0.3rem' }} />

          {/* Download Resume button */}
          <a
            href={personal.resumeUrl}
            target="_blank" rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.4rem 1rem', borderRadius: '6px',
              background: 'linear-gradient(135deg, rgba(88,86,214,0.9) 0%, rgba(0,212,255,0.9) 100%)',
              color: '#fff', fontSize: '1rem', fontWeight: 600,
              textDecoration: 'none', transition: 'all 0.25s ease',
              boxShadow: '0 0 18px rgba(0,212,255,0.25)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(0,212,255,0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 0 18px rgba(0,212,255,0.25)';
            }}
          >
            <FileText size={15} />
            Download CV
          </a>
        </div>

        {/* Tab Content Area */}
        <div style={{ minHeight: '300px', marginBottom: '2rem' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>


      </div>
    </section>
  );
};

// Sub-components

const ContactPill = ({ icon, text, link }) => {
  const content = (
    <>
      <span style={{ color: 'var(--text-muted)' }}>{icon}</span>
      <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-main)' }}>{text}</span>
    </>
  );

  const style = {
    display: 'flex', alignItems: 'center', gap: '0.3rem',
    padding: '0.3rem 0.6rem', borderRadius: '100px',
    background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.1)',
    textDecoration: 'none', transition: 'all 0.2s ease', cursor: link ? 'pointer' : 'default'
  };

  const hoverProps = link ? {
    onMouseEnter: e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; },
    onMouseLeave: e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }
  } : {};

  if (link) {
    return <a href={link} target="_blank" rel="noreferrer" style={style} {...hoverProps}>{content}</a>;
  }
  return <div style={style}>{content}</div>;
};

const ResumeCard = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      style={{
        background: 'rgba(2, 8, 23, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '8px',
        padding: '1.2rem',
        position: 'relative',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
        e.currentTarget.style.background = 'rgba(2, 8, 23, 0.7)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        e.currentTarget.style.background = 'rgba(2, 8, 23, 0.4)';
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.8rem' }}>
        <div>
          <p style={{
            fontSize: '0.85rem', fontWeight: 700, color: 'var(--neon-blue)',
            textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem'
          }}>
            {data.category}
          </p>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '0.2rem' }}>
            {data.title}
          </h3>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
            {data.organization}
          </p>
        </div>
        <div style={{
          fontSize: '0.9rem', color: 'var(--neon-purple)', fontWeight: 600,
          background: 'rgba(168, 85, 247, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '100px'
        }}>
          {data.date}
        </div>
      </div>

      {data.highlights && data.highlights.length > 0 && (
        <ul style={{
          listStyleType: 'disc', paddingLeft: '1.2rem', color: 'var(--text-muted)',
          display: 'flex', flexDirection: 'column', gap: '0.3rem', fontSize: '1rem',
          lineHeight: 1.4
        }}>
          {data.highlights.map((item, idx) => (
            <li key={idx} style={{ paddingLeft: '0.5rem' }}>{item}</li>
          ))}
        </ul>
      )}

      {data.tech && (
        <div style={{ marginTop: '0.8rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-main)' }}>Tech: </strong>
            {data.tech}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default Resume;
