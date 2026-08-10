import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ setActiveTab }) {
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-glass)',
        background: 'var(--bg-nav)',
        padding: '0.85rem 0',
        transition: 'var(--theme-transition)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Left Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--color-text-main)' }}>
              Aparna Ponnuru
            </span>
            <span style={{ fontSize: '0.78rem', color: 'var(--color-text-dim)' }}>
              © {new Date().getFullYear()}
            </span>
          </div>

          {/* Center Page Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <button onClick={() => handleTabClick('home')} style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', fontSize: '0.82rem' }}>
              Home
            </button>
            <button onClick={() => handleTabClick('about')} style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', fontSize: '0.82rem' }}>
              About & Education
            </button>
            <button onClick={() => handleTabClick('experience')} style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', fontSize: '0.82rem' }}>
              Experience
            </button>
            <button onClick={() => handleTabClick('projects')} style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', fontSize: '0.82rem' }}>
              Projects
            </button>
            <button onClick={() => handleTabClick('skills')} style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', fontSize: '0.82rem' }}>
              Skills & Certifications
            </button>
            <button onClick={() => handleTabClick('contact')} style={{ background: 'none', border: 'none', color: 'var(--color-text-muted)', cursor: 'pointer', fontSize: '0.82rem' }}>
              Contact
            </button>
          </div>

          {/* Right Socials */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-icon" title="GitHub" style={{ width: '30px', height: '30px' }}>
              <Github size={13} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon" title="LinkedIn" style={{ width: '30px', height: '30px' }}>
              <Linkedin size={13} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
