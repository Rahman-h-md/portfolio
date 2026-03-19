import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import SectionDecorations from './SectionDecorations';

/* ─── Skill groups with percentages ─── */
const CATEGORIES = [
  { key: 'All', label: 'All', color: '#c084fc' },
  { key: 'Frontend', label: 'Frontend', color: '#c084fc' },
  { key: 'Backend', label: 'Backend', color: '#ec4899' },
  { key: 'Database', label: 'Database', color: '#fbbf24' },
  { key: 'Tools', label: 'Tools', color: '#38bdf8' },
  { key: 'Languages', label: 'Languages', color: '#f472b6' },
];

const SKILL_GROUPS = [
  {
    category: 'Frontend', color: '#c084fc',
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'React.js', level: 82 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 88 },
      { name: 'Tailwind CSS', level: 78 },
    ],
  },
  {
    category: 'Backend', color: '#ec4899',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 72 },
    ],
  },
  {
    category: 'Database', color: '#fbbf24',
    skills: [
      { name: 'MongoDB', level: 70 },
      { name: 'MySQL', level: 65 },
      { name: 'PostgreSQL', level: 60 },
    ],
  },
  {
    category: 'Tools', color: '#38bdf8',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'GitHub', level: 82 },
    ],
  },
  {
    category: 'Languages', color: '#f472b6',
    skills: [
      { name: 'C', level: 70 },
      { name: 'C++', level: 68 },
      { name: 'Java', level: 65 },
      { name: 'Python', level: 72 },
    ],
  },
];

/* Merge icon from portfolioData */
const buildSkillsMap = (rawSkills) => {
  const map = {};
  rawSkills.forEach(s => { map[s.name] = s.icon; });
  return map;
};

/* ─── Fan-animated skill card (category view) ─── */
const SkillCard = ({ name, icon, color, level, index, total }) => {
  /* Compute a fan-arc entry: cards fly in from the center bottom in a spread */
  const mid = (total - 1) / 2;
  const spread = Math.min(40, total * 10); // total arc in degrees
  const startAngle = total > 1 ? -spread / 2 + (index / (total - 1)) * spread : 0;
  const rad = (startAngle * Math.PI) / 180;
  const flyDist = 140; // px burst distance

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: Math.sin(rad) * flyDist,
        y: Math.abs(Math.cos(rad)) * flyDist * 0.7 + 30,
        rotate: startAngle * 1.4,
        scale: 0.55,
      }}
      animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6, y: 40, transition: { duration: 0.18 } }}
      transition={{
        type: 'spring',
        stiffness: 220,
        damping: 20,
        delay: index * 0.06,
      }}
      whileHover={{
        y: -12,
        scale: 1.08,
        boxShadow: `0 28px 60px rgba(0,0,0,0.6), 0 0 32px ${color}55`,
        borderColor: `${color}80`,
        transition: { duration: 0.22 },
      }}
      style={{
        background: 'linear-gradient(145deg, rgba(14,26,50,0.97), rgba(4,10,26,0.94))',
        border: `1px solid ${color}35`,
        borderRadius: '18px',
        padding: '1.7rem 1.3rem 1.4rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
        cursor: 'default',
        width: '128px',
        backdropFilter: 'blur(14px)',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: `0 8px 28px rgba(0,0,0,0.45), inset 0 1px 0 ${color}18`,
      }}
    >
      {/* Top shimmer line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '2px',
        background: `linear-gradient(90deg, transparent, ${color}90, transparent)`,
      }} />
      {/* Inner soft glow bloom */}
      <div style={{
        position: 'absolute', top: '-30%', left: '50%', transform: 'translateX(-50%)',
        width: '80px', height: '80px', borderRadius: '50%',
        background: `radial-gradient(circle, ${color}20 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      <img
        src={icon}
        alt={name}
        width={46}
        height={46}
        style={{
          objectFit: 'contain',
          filter: (name === 'GitHub' || name === 'Express.js') ? 'invert(1) brightness(0.75)' : 'none',
          position: 'relative', zIndex: 1,
        }}
        onError={e => { e.target.style.display = 'none'; }}
      />
      <span style={{
        fontSize: '0.9rem',
        fontWeight: 700,
        color: 'var(--text-muted)',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        position: 'relative', zIndex: 1,
      }}>
        {name}
      </span>
      {/* Level badge */}
      <span style={{
        fontSize: '0.85rem',
        fontWeight: 700,
        color: color,
        background: `${color}18`,
        border: `1px solid ${color}30`,
        borderRadius: '100px',
        padding: '0.15rem 0.6rem',
        letterSpacing: '0.04em',
        position: 'relative', zIndex: 1,
      }}>
        {level}%
      </span>
    </motion.div>
  );
};

/* ─── Progress bar row (All view) ─── */
const SkillBar = ({ name, icon, level, color, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay }}
    style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.1rem' }}
  >
    <img
      src={icon}
      alt={name}
      width={28}
      height={28}
      style={{
        objectFit: 'contain',
        flexShrink: 0,
        filter: (name === 'GitHub' || name === 'Express.js') ? 'invert(1) brightness(0.75)' : 'none',
      }}
      onError={e => { e.target.style.display = 'none'; }}
    />
    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
        <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>{name}</span>
        <span style={{ fontSize: '0.95rem', fontWeight: 700, color }}>{level}%</span>
      </div>
      <div style={{
        height: '6px', borderRadius: '100px',
        background: 'rgba(255,255,255,0.07)',
        overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 0.8, delay: delay + 0.1, ease: 'easeOut' }}
          style={{
            height: '100%',
            borderRadius: '100px',
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: `0 0 8px ${color}80`,
          }}
        />
      </div>
    </div>
  </motion.div>
);

/* ─── Main Skills section ─── */
const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const rawSkills = portfolioData.skills;
  const iconMap = buildSkillsMap(rawSkills);

  /* Enrich SKILL_GROUPS with icons */
  const groups = SKILL_GROUPS.map(g => ({
    ...g,
    skills: g.skills.map(s => ({ ...s, icon: iconMap[s.name] || '' })),
  }));

  /* All skills flat list */
  const allSkills = groups.flatMap(g => g.skills.map(s => ({ ...s, color: g.color })));

  /* Active group (for category views) */
  const activeGroup = groups.find(g => g.category === activeCategory);

  const activeCategoryMeta = CATEGORIES.find(c => c.key === activeCategory);
  const activeColor = activeCategoryMeta?.color || '#c084fc';

  return (
    <section id="skills" className="section-scanline" style={{ minHeight: '100vh', padding: '6rem 2rem', background: 'var(--bg-main)', overflow: 'hidden', position: 'relative' }}>
      <SectionDecorations particleColor="#c084fc" accentColor="#ec4899" rainCount={5} particleCount={12} />
      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>

        {/* ─── Heading ─── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{
            fontFamily: 'var(--font-heading)', fontSize: '3.5rem', fontWeight: 800,
            color: 'var(--text-main)', marginBottom: '1rem',
          }}>
            My <span style={{ color: 'var(--neon-blue)', textShadow: '0 0 20px rgba(0,212,255,0.4)' }}>Skills</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'var(--gradient-primary)', margin: '0 auto', borderRadius: '4px' }} />
          <p style={{ marginTop: '1rem', color: 'var(--text-subtle)', fontSize: '1.1rem' }}>
            Technologies I work with, organised by category
          </p>
        </motion.div>

        {/* ─── Category filter tabs ─── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.6rem',
            marginBottom: '3rem',
          }}
        >
          {CATEGORIES.map(cat => {
            const isActive = activeCategory === cat.key;
            return (
              <motion.button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  padding: '0.5rem 1.4rem',
                  borderRadius: '100px',
                  border: `1px solid ${isActive ? cat.color : 'rgba(255,255,255,0.12)'}`,
                  background: isActive
                    ? `linear-gradient(135deg, ${cat.color}25, ${cat.color}10)`
                    : 'rgba(255,255,255,0.04)',
                  color: isActive ? cat.color : 'var(--text-subtle)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '1rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? `0 0 18px ${cat.color}30` : 'none',
                  backdropFilter: 'blur(8px)',
                }}
              >
                {cat.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* ─── Content panel ─── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="premium-glass"
          style={{ padding: '2.5rem 2.5rem 3rem', minHeight: '380px' }}
        >
          <AnimatePresence mode="wait">
            {activeCategory === 'All' ? (
              /* ─── ALL: two-column progress bars ─── */
              <motion.div
                key="all"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p style={{
                  textAlign: 'center', fontSize: '1rem',
                  color: 'var(--text-subtle)', marginBottom: '2.2rem',
                }}>
                  ✦ All skills at a glance — with proficiency levels
                </p>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '0 3rem',
                }}>
                  {allSkills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      level={skill.level}
                      color={skill.color}
                      delay={i * 0.045}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              /* ─── CATEGORY: skill cards in a row ─── */
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category heading */}
                <div style={{ textAlign: 'center', marginBottom: '2.2rem' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '0.35rem 1.3rem',
                    borderRadius: '100px',
                    border: `1px solid ${activeColor}40`,
                    background: `${activeColor}12`,
                    color: activeColor,
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}>
                    {activeCategory}
                  </span>
                  <p style={{ color: 'var(--text-subtle)', fontSize: '0.95rem', margin: 0 }}>
                    {activeGroup?.skills.length} skill{activeGroup?.skills.length !== 1 ? 's' : ''}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.4rem',
                  justifyContent: 'center',
                  paddingTop: '0.5rem',
                }}>
                  {activeGroup?.skills.map((skill, i) => (
                    <SkillCard
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      color={activeColor}
                      level={skill.level}
                      index={i}
                      total={activeGroup.skills.length}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
