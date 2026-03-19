import React from 'react';
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

function App() {
  const [activeSection, setActiveSection] = React.useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero setActiveSection={setActiveSection} />;
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'certifications':
        return <Certifications />;
      case 'achievements':
        return <Achievements />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      case 'skills':
        return <Skills />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div style={{ width: '100%', overflowX: 'hidden', position: 'relative' }}>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main style={{ paddingTop: '80px' }}>
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
