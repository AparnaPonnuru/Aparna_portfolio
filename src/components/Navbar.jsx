import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, Hexagon } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 950,
        height: '62px',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-nav)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-glass)',
        transition: 'var(--theme-transition)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo: Icon + "Aparna Ponnuru" */}
        <button
          onClick={() => handleTabClick('home')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '8px',
            background: 'var(--gradient-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(5, 150, 105, 0.3)',
          }}>
            <Hexagon size={16} color="#ffffff" strokeWidth={2.5} />
          </div>
          <span style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--color-text-main)', letterSpacing: '-0.02em' }}>
            Aparna Ponnuru
          </span>
        </button>

        {/* Desktop Nav Items */}
        <nav style={{ display: 'none', gap: '1.25rem', alignItems: 'center' }} className="desktop-nav">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isActive ? 'var(--color-text-main)' : 'var(--color-text-muted)',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.86rem',
                  cursor: 'pointer',
                  padding: '0.3rem 0.6rem',
                  position: 'relative',
                  transition: 'color 0.2s ease',
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '0.6rem',
                      right: '0.6rem',
                      height: '2px',
                      borderRadius: '2px',
                      background: 'var(--gradient-primary)',
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action & Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={toggleTheme}
            className="btn-icon"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
            style={{ width: '36px', height: '36px' }}
          >
            {theme === 'dark' ? <Sun size={18} color="#facc15" /> : <Moon size={18} color="#7c3aed" />}
          </button>

          <div style={{ display: 'none' }} className="desktop-cta">
            <button
              onClick={() => handleTabClick('contact')}
              className="btn-primary"
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.84rem' }}
            >
              Let's Connect <ArrowUpRight size={14} />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-icon mobile-burger"
            aria-label="Toggle Navigation Menu"
            style={{ width: '36px', height: '36px' }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'var(--bg-card)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-glass-bright)',
            padding: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem',
            boxShadow: '0 15px 30px rgba(0,0,0,0.3)',
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              style={{
                textAlign: 'left',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                background: activeTab === item.id ? 'rgba(124, 58, 237, 0.15)' : 'transparent',
                color: activeTab === item.id ? 'var(--accent-purple)' : 'var(--color-text-main)',
                fontWeight: activeTab === item.id ? 700 : 500,
                fontSize: '0.95rem',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (min-width: 850px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: flex !important; }
          .mobile-burger { display: none !important; }
        }
      `}</style>
    </header>
  );
}
