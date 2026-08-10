import React, { useEffect } from 'react';
import { X, ExternalLink, Check, Sparkles, Layers } from 'lucide-react';
import { GithubIcon as Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card-static project-modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '620px',
          maxHeight: '84vh',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          borderRadius: '16px',
          padding: '1.2rem',
          position: 'relative',
          background: '#ffffff',
          border: '1px solid var(--border-glass-bright)',
          boxShadow: 'var(--shadow-subtle)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="btn-icon"
          style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10, width: '32px', height: '32px' }}
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        {/* Clean Project Header Image - Zero White Fade Overlay */}
        <div
          style={{
            width: '100%',
            height: '165px',
            borderRadius: '12px',
            overflow: 'hidden',
            marginBottom: '1rem',
            position: 'relative',
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', bottom: '0.75rem', left: '1rem' }}>
            <span className="glass-pill" style={{ background: 'var(--gradient-primary)', color: '#fff', border: 'none', fontSize: '0.75rem' }}>
              {project.category}
            </span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 style={{ fontSize: '1.18rem', marginBottom: '0.25rem', color: 'var(--color-text-main)' }}>{project.title}</h3>
        <p style={{ color: 'var(--pastel-emerald)', fontSize: '0.84rem', marginBottom: '0.9rem', fontWeight: 600 }}>
          {project.subtitle}
        </p>

        {/* Description */}
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.55, fontSize: '0.82rem', marginBottom: '1rem' }}>
          {project.description}
        </p>

        {/* Core Features & Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-dim)', marginBottom: '0.55rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sparkles size={14} color="var(--pastel-emerald)" /> Core Architecture & Highlights
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.45rem' }}>
              {project.highlights.map((h, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem', background: 'rgba(255, 255, 255, 0.9)', border: '1px solid rgba(15, 23, 42, 0.05)', padding: '0.5rem 0.7rem', borderRadius: '8px' }}>
                  <Check size={14} color="var(--pastel-emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.76rem', color: 'var(--color-text-main)' }}>{h}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div style={{ marginBottom: '1.15rem' }}>
          <h4 style={{ fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-dim)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Layers size={14} color="var(--pastel-purple)" /> Technologies Used
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.tags.map((t) => (
              <span key={t} className="glass-pill" style={{ fontSize: '0.7rem', background: 'var(--pastel-emerald-bg)', color: 'var(--pastel-emerald)', border: 'none' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', paddingTop: '0.85rem', borderTop: '1px solid var(--border-glass)' }}>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.55rem 1.15rem', fontSize: '0.84rem' }}>
            GitHub Repository <Github size={14} />
          </a>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.55rem 1.15rem', fontSize: '0.84rem' }}>
            Live Preview <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
