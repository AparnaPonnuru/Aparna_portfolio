import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, UserCheck, Trophy, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { personalInfo, educationData, achievementsData } from '../data/portfolioData';

export default function About() {
  const [activeSubTab, setActiveSubTab] = useState('education');

  return (
    <div className="page-view">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="section-title-badge">
            <UserCheck size={14} /> Background & Education
          </div>
          <h2 className="section-heading">
            About Me & <span className="gradient-text">Qualifications</span>
          </h2>
        </div>

        {/* Unique Split Layout: Left Sticky Sidebar + Right Compact Tab View */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          
          {/* Left Quick Profile Card */}
          <div className="glass-card" style={{ padding: '1.4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--pastel-emerald-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pastel-emerald)' }}>
                <BookOpen size={18} />
              </div>
              <h3 style={{ fontSize: '1.15rem' }}>Profile Summary</h3>
            </div>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {personalInfo.objective}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-glass)', fontSize: '0.82rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-dim)' }}>Location:</span>
                <span style={{ fontWeight: 600 }}>{personalInfo.location}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-dim)' }}>Degree:</span>
                <span style={{ fontWeight: 600 }}>B.Tech CSE</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--color-text-dim)' }}>CGPA:</span>
                <span style={{ fontWeight: 700, color: 'var(--pastel-emerald)' }}>8.95 / 10</span>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Education & Award View */}
          <div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <button
                onClick={() => setActiveSubTab('education')}
                className="glass-pill"
                style={{
                  padding: '0.4rem 1rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: activeSubTab === 'education' ? 'var(--gradient-primary)' : 'rgba(148, 163, 184, 0.08)',
                  color: activeSubTab === 'education' ? '#ffffff' : 'var(--color-text-muted)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <GraduationCap size={14} /> Academic Journey
              </button>

              <button
                onClick={() => setActiveSubTab('awards')}
                className="glass-pill"
                style={{
                  padding: '0.4rem 1rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  background: activeSubTab === 'awards' ? 'var(--gradient-primary)' : 'rgba(148, 163, 184, 0.08)',
                  color: activeSubTab === 'awards' ? '#ffffff' : 'var(--color-text-muted)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <Trophy size={14} /> EPICS Achievement
              </button>
            </div>

            {/* Education Sub-Tab */}
            {activeSubTab === 'education' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {educationData.map((edu, idx) => (
                  <div key={idx} className="glass-card" style={{ padding: '1.15rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-main)' }}>
                        {edu.degree}
                      </span>
                      <span className="glass-pill" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--pastel-emerald)', background: 'var(--pastel-emerald-bg)', border: 'none' }}>
                        {edu.scoreLabel}: {edu.score}
                      </span>
                    </div>

                    <div style={{ color: 'var(--color-text-muted)', fontSize: '0.84rem', fontWeight: 600 }}>
                      {edu.field} • {edu.institution} ({edu.location})
                    </div>

                    <p style={{ color: 'var(--color-text-dim)', fontSize: '0.8rem', lineHeight: 1.5 }}>
                      {edu.description}
                    </p>

                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-dim)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.25rem' }}>
                      <Calendar size={12} /> {edu.period}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Awards Sub-Tab */}
            {activeSubTab === 'awards' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {achievementsData.map((ach, idx) => (
                  <div key={idx} className="glass-card" style={{ padding: '1.25rem', borderLeft: '4px solid var(--pastel-amber)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                      <Trophy size={20} color="var(--pastel-amber)" />
                      <h4 style={{ fontSize: '1.05rem' }}>{ach.title}</h4>
                    </div>

                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.84rem', lineHeight: 1.6, marginBottom: '0.85rem' }}>
                      {ach.description}
                    </p>

                    <span className="glass-pill" style={{ color: 'var(--pastel-amber)', background: 'var(--pastel-amber-bg)', border: 'none', fontSize: '0.75rem' }}>
                      <Award size={13} /> Only Project Selected from University
                    </span>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
