import React from 'react';
import { ArrowRight, Mail, MapPin, Phone, Award } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { personalInfo, heroStats } from '../data/portfolioData';
import profileImage from '../assets/image.png';

export default function Hero({ setActiveTab }) {
  return (
    <div className="page-view" style={{ paddingTop: '5.5rem', paddingBottom: '1rem', flex: 1, display: 'flex', alignItems: 'center' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Column: Intro, Bio & Action Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <div>
              {/* Top Subtitle with proper spacing from header */}
              <div style={{ fontSize: '0.92rem', color: '#0284c7', fontWeight: 600, marginBottom: '0.75rem', letterSpacing: '0.02em', marginTop: '0.4rem' }}>
                Welcome to my site
              </div>

              {/* Main Headline */}
              <h1
                style={{
                  fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                  lineHeight: 1.15,
                  fontWeight: 800,
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.03em',
                }}
              >
                Hi, I'm <span className="gradient-text">Aparna</span>, a <br />
                <span style={{ color: 'var(--pastel-amber)' }}>Software Developer.</span>
              </h1>

              {/* Sub-headline & Bio */}
              <p
                style={{
                  fontSize: '0.92rem',
                  color: 'var(--color-text-muted)',
                  maxWidth: '500px',
                  marginBottom: '1.25rem',
                  lineHeight: 1.6,
                }}
              >
                I am a focused and talented B.Tech CSE graduate (8.95 CGPA) passionate about building intelligent web applications, IoT solutions, and delivering positive user experiences.
              </p>

              {/* Contact Pills Row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem' }}>
                <span className="glass-pill">
                  <MapPin size={12} color="var(--pastel-emerald)" /> {personalInfo.location}
                </span>
                <span className="glass-pill">
                  <Phone size={12} color="var(--pastel-amber)" /> +91 {personalInfo.phone}
                </span>
                <span className="glass-pill">
                  <Mail size={12} color="var(--pastel-purple)" /> {personalInfo.email}
                </span>
              </div>

              {/* Action Buttons: "Say Hello!" and "See My Project" */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                <button onClick={() => setActiveTab('contact')} className="btn-primary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.88rem' }}>
                  Say Hello!
                </button>

                <button
                  onClick={() => setActiveTab('projects')}
                  className="btn-secondary"
                  style={{
                    padding: '0.65rem 1.35rem',
                    fontSize: '0.88rem',
                    borderColor: '#0284c7',
                    color: '#0284c7',
                    fontWeight: 600,
                  }}
                >
                  See My Project
                </button>

                <div style={{ display: 'flex', gap: '0.4rem', marginLeft: '0.25rem' }}>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-icon" title="GitHub" style={{ width: '34px', height: '34px' }}>
                    <Github size={15} />
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon" title="LinkedIn" style={{ width: '34px', height: '34px' }}>
                    <Linkedin size={15} />
                  </a>
                </div>
              </div>
            </div>

            {/* Stats Bar Perfectly Aligned with Bottom of Right Photo Card */}
            <div
              className="glass-card-static"
              style={{
                padding: '0.85rem 1.25rem',
                borderRadius: '14px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.5rem',
                textAlign: 'center',
                maxWidth: '480px',
              }}
            >
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800 }} className="gradient-text">8.95</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>B.Tech CGPA</div>
              </div>
              <div style={{ borderLeft: '1px solid var(--border-glass)', borderRight: '1px solid var(--border-glass)' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800 }} className="gradient-text">5 Real</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>IoT & Web Projects</div>
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800 }} className="gradient-text">3 Global</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>Certifications</div>
              </div>
            </div>

          </div>

          {/* Right Column: Profile Frame Container */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            
            {/* Background Pastel Shape Accent */}
            <div
              style={{
                position: 'absolute',
                top: '-10px',
                left: '20px',
                width: '100%',
                maxWidth: '290px',
                height: '350px',
                borderRadius: '120px 0px 120px 120px',
                background: 'rgba(56, 189, 248, 0.25)',
                zIndex: 0,
              }}
            />

            {/* Profile Picture Frame */}
            <div
              style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '290px',
                height: '340px',
                borderRadius: '120px 0px 120px 120px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                border: '2px solid rgba(255, 255, 255, 0.8)',
              }}
            >
              <img
                src={profileImage}
                alt="Aparna Ponnuru Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                }}
              />

              {/* Floating Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0.75rem',
                  left: '0.75rem',
                  right: '0.75rem',
                  padding: '0.4rem 0.75rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(12px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  color: '#0f172a',
                  fontWeight: 700,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                <span>Software Developer</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </div>
  );
}
