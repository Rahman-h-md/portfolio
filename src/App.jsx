import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Skills from './components/Skills';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';

function App() {
  const [activeSection, setActiveSection] = React.useState('home');

  // IntersectionObserver to dynamically update active tab as user scrolls
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section that is most visibly intersecting
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -50% 0px', // Trigger when section passes through middle third of screen
        threshold: 0.1
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div style={{ width: '100%', overflowX: 'hidden', position: 'relative' }}>
      <CustomCursor />
      <ScrollProgress />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main style={{ paddingTop: '80px' }}>
        <Hero setActiveSection={setActiveSection} />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
