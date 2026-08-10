import React, { useState } from 'react';
import { FolderGit2, Star, Eye, ArrowRight, Cpu } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="page-view">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="section-title-badge">
            <FolderGit2 size={14} /> Portfolio Projects
          </div>
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects & Apps</span>
          </h2>
        </div>

        {/* Compact Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative',
                borderRadius: '12px',
              }}
            >
              {/* Featured Pill */}
              {project.featured && (
                <div
                  style={{
                    position: 'absolute',
                    top: '0.6rem',
                    right: '0.6rem',
                    zIndex: 2,
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                    background: 'var(--pastel-emerald-bg)',
                    border: '1px solid rgba(5, 150, 105, 0.3)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'var(--pastel-emerald)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}
                >
                  <Star size={11} fill="var(--pastel-emerald)" /> Featured
                </div>
              )}

              {/* Clean Image Container - Zero White Shadow / Fade Overlay */}
              <div style={{ width: '100%', height: '135px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Content Body */}
              <div style={{ padding: '0.9rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ marginBottom: '0.4rem' }}>
                    <span className="glass-pill" style={{ fontSize: '0.72rem', color: 'var(--pastel-emerald)', fontWeight: 600 }}>
                      <Cpu size={12} /> {project.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '0.98rem', marginBottom: '0.3rem', color: 'var(--color-text-main)' }}>
                    {project.title}
                  </h3>
                  
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', lineHeight: 1.45, marginBottom: '0.7rem' }}>
                    {project.subtitle}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.28rem', marginBottom: '0.7rem' }}>
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="glass-pill" style={{ fontSize: '0.66rem', padding: '0.12rem 0.45rem' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ paddingTop: '0.65rem', borderTop: '1px solid var(--border-glass)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="btn-primary"
                      style={{ padding: '0.4rem 0.85rem', fontSize: '0.74rem' }}
                    >
                      View Details <Eye size={13} />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon"
                      title="GitHub Source"
                      style={{ width: '30px', height: '30px' }}
                    >
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}
