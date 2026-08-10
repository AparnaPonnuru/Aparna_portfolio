import React from 'react';
import { Cpu, Code2, Layout, Wrench, Cloud, MessageSquare, Award, CheckCircle2, TrendingUp, BarChart3, Zap } from 'lucide-react';
import { skillsGrouped, certificationsData } from '../data/portfolioData';

/* Soft color accents without heavy panels. */
const categoryStyles = [
  { tint: 'rgba(5, 150, 105, 0.07)', accent: '#059669', border: 'rgba(5, 150, 105, 0.12)' },
  { tint: 'rgba(124, 58, 237, 0.06)', accent: '#7c3aed', border: 'rgba(124, 58, 237, 0.12)' },
  { tint: 'rgba(192, 38, 211, 0.055)', accent: '#c026d3', border: 'rgba(192, 38, 211, 0.12)' },
  { tint: 'rgba(234, 88, 12, 0.055)', accent: '#ea580c', border: 'rgba(234, 88, 12, 0.12)' },
  { tint: 'rgba(37, 99, 235, 0.055)', accent: '#2563eb', border: 'rgba(37, 99, 235, 0.12)' },
  { tint: 'rgba(220, 38, 38, 0.045)', accent: '#dc2626', border: 'rgba(220, 38, 38, 0.1)' },
];

const certStyles = [
  { tint: 'rgba(5, 150, 105, 0.06)', accent: '#059669', border: 'rgba(5, 150, 105, 0.12)' },
  { tint: 'rgba(37, 99, 235, 0.055)', accent: '#2563eb', border: 'rgba(37, 99, 235, 0.12)' },
  { tint: 'rgba(192, 38, 211, 0.055)', accent: '#c026d3', border: 'rgba(192, 38, 211, 0.12)' },
];

export default function Skills() {
  const iconMap = {
    Code2: Code2,
    Layout: Layout,
    Wrench: Wrench,
    Cpu: Cpu,
    Cloud: Cloud,
    MessageSquare: MessageSquare
  };

  return (
    <div className="page-view">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="section-title-badge">
            <BarChart3 size={14} /> Skills & Qualifications
          </div>
          <h2 className="section-heading">
            Technical <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="section-description" style={{ margin: '0.25rem auto 0' }}>
            A breakdown of core competencies across development, cloud, and communication.
          </p>
        </div>

        {/* Analytics-Style Skill Category Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {skillsGrouped.map((grp, idx) => {
            const IconComp = iconMap[grp.icon] || Cpu;
            const style = categoryStyles[idx % categoryStyles.length];
            return (
              <div
                key={idx}
                style={{
                  background: `linear-gradient(135deg, #ffffff 0%, ${style.tint} 100%)`,
                  border: `1px solid ${style.border}`,
                  borderRadius: '12px',
                  padding: '1.15rem',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="skill-card-hover"
              >
                {/* Decorative corner accent */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: `${style.accent}08`,
                  pointerEvents: 'none',
                }} />

                {/* Header Row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '9px', background: `${style.accent}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: style.accent }}>
                      <IconComp size={18} />
                    </div>
                    <h3 style={{ fontSize: '1.05rem', color: '#1e293b' }}>{grp.category}</h3>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', fontWeight: 700, color: style.accent }}>
                    <TrendingUp size={13} />
                    {grp.items.length} skills
                  </div>
                </div>

                {/* Skill Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {grp.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        padding: '0.3rem 0.7rem',
                        borderRadius: '9999px',
                        fontSize: '0.78rem',
                        background: 'rgba(255,255,255,0.78)',
                        border: `1px solid ${style.border}`,
                        color: '#334155',
                        fontWeight: 500,
                        backdropFilter: 'blur(4px)',
                      }}
                    >
                      <CheckCircle2 size={12} color={style.accent} /> {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications & Credentials */}
        <h3 style={{ fontSize: '1.3rem', textAlign: 'center', marginBottom: '1.25rem' }}>
          Certifications <span className="gradient-text">& Credentials</span>
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.15rem' }}>
          {certificationsData.map((cert, idx) => {
            const cs = certStyles[idx % certStyles.length];
            return (
              <div
                key={idx}
                style={{
                  background: `linear-gradient(135deg, #ffffff 0%, ${cs.tint} 100%)`,
                  border: `1px solid ${cs.border}`,
                  borderRadius: '12px',
                  padding: '1rem',
                  transition: 'transform 0.2s ease',
                }}
                className="skill-card-hover"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: `${cs.accent}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: cs.accent }}>
                    <Award size={16} />
                  </div>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    background: `${cs.accent}10`,
                    color: cs.accent,
                    fontWeight: 700,
                    fontSize: '0.72rem',
                  }}>
                    <Zap size={11} /> {cert.badge}
                  </span>
                </div>

                <h4 style={{ fontSize: '0.98rem', marginBottom: '0.25rem', color: '#1e293b' }}>
                  {cert.title}
                </h4>
                <div style={{ color: '#64748b', fontSize: '0.78rem' }}>
                  Issuer: {cert.issuer} ({cert.type})
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .skill-card-hover:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </div>
  );
}
