import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  const timelineItems = [
    {
      ...experienceData.find((exp) => exp.id === 'exp-2'),
      period: 'Oct 2025 - Mar 2026',
      phase: 'Foundation',
      accent: '#0d9488',
    },
    {
      ...experienceData.find((exp) => exp.id === 'exp-1'),
      period: 'Apr 2026 - Present',
      phase: 'Growth',
      accent: '#7c3aed',
    },
  ].filter(Boolean);

  return (
    <div className="page-view">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="section-title-badge">
            <Briefcase size={14} /> Work & Internships
          </div>
          <h2 className="section-heading">
            Experience & <span className="gradient-text">Internships</span>
          </h2>
        </div>

        {/* Vertical Progress Timeline */}
        <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '18px', bottom: '18px', left: '20px', width: '3px', borderRadius: '999px', background: 'linear-gradient(180deg, rgba(13, 148, 136, 0.22), rgba(124, 58, 237, 0.28))' }} />

          {timelineItems.map((exp, idx) => (
            <div key={exp.id} style={{ position: 'relative', display: 'grid', gridTemplateColumns: '56px 1fr', gap: '0.9rem', marginBottom: idx === timelineItems.length - 1 ? 0 : '1.15rem' }}>
              <div style={{ position: 'relative', zIndex: 1, width: '42px', height: '42px', borderRadius: '50%', background: '#ffffff', border: `2px solid ${exp.accent}`, boxShadow: `0 8px 22px ${exp.accent}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: exp.accent }}>
                {idx === 0 ? <Briefcase size={18} /> : <Sparkles size={18} />}
              </div>

              <div
                className="glass-card-static"
                style={{
                  padding: '1.15rem 1.25rem',
                  borderRadius: '14px',
                  background: `linear-gradient(135deg, #ffffff 0%, ${exp.accent}0D 100%)`,
                  border: `1px solid ${exp.accent}18`,
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.7rem', marginBottom: '0.65rem' }}>
                  <div>
                    <div style={{ color: exp.accent, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800, marginBottom: '0.2rem' }}>
                      {exp.phase}
                    </div>
                    <h3 style={{ fontSize: '1.08rem', color: 'var(--color-text-main)' }}>{exp.role}</h3>
                    <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--pastel-emerald)' }}>
                      {exp.company}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', justifyContent: 'flex-end' }}>
                    <span className="glass-pill" style={{ fontSize: '0.72rem', color: exp.accent, background: `${exp.accent}10`, border: 'none' }}>
                      <Calendar size={12} /> {exp.period}
                    </span>
                    <span className="glass-pill" style={{ fontSize: '0.72rem', background: '#ffffff' }}>
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                </div>

                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginBottom: '0.8rem', lineHeight: 1.5 }}>
                  {exp.description}
                </p>

                <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.45rem', marginBottom: '0.85rem' }}>
                  {exp.highlights.map((item, itemIdx) => (
                    <li key={itemIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', fontSize: '0.78rem', color: 'var(--color-text-main)', lineHeight: 1.45 }}>
                      <CheckCircle2 size={14} color={exp.accent} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                  {exp.skills.map((s) => (
                    <span key={s} className="glass-pill" style={{ fontSize: '0.68rem', padding: '0.16rem 0.5rem', background: 'rgba(255,255,255,0.75)' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
