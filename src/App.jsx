import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('aparna-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('aparna-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return <Hero setActiveTab={setActiveTab} />;
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Background ambient lighting */}
      <div className="ambient-bg" />
      <div className="bg-grid-pattern" />

      {/* Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main View */}
      <main style={{ flex: 1 }}>
        {renderActiveView()}
      </main>

      {/* Footer rendered ONLY on non-home pages as requested */}
      {activeTab !== 'home' && <Footer setActiveTab={setActiveTab} />}

      {/* Floating AI Portfolio Assistant Chatbot */}
      <Chatbot />
    </div>
  );
}
