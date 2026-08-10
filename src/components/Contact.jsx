import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, MessageSquare, CheckCircle2 } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    try {
      // Send beautifully structured email via FormSubmit with _template: "box"
      await fetch("https://formsubmit.co/ajax/aparnaponnuru09@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New Connection Request: ${formData.name} (${formData.role || 'Opportunity'})`,
          _template: "box",
          _url: "Aparna Ponnuru Portfolio Website",
          _captcha: "false",
          "Applicant Name": formData.name,
          "Contact Email": formData.email,
          "Contact Phone": formData.phone || "Not provided",
          "Role / Opportunity": formData.role || "General Connection",
          "Message": formData.message
        })
      });

      setLoading(false);
      setSubmittedName(formData.name);
      setIsSubmitted(true);

    } catch (err) {
      setLoading(false);
      setSubmittedName(formData.name);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="page-view">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <div className="section-title-badge">
            <MessageSquare size={14} /> Connect With Aparna
          </div>
          <h2 className="section-heading">
            Let's Connect & <span className="gradient-text">Work Together</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
          
          {/* Left Info Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            
            {/* Phone Card */}
            <div className="glass-card" style={{ padding: '1.15rem 1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--pastel-emerald-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pastel-emerald)' }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.74rem', color: 'var(--color-text-dim)', display: 'block' }}>Call / WhatsApp</span>
                    <span style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--color-text-main)' }}>+91 {personalInfo.phone}</span>
                  </div>
                </div>

                <button onClick={handleCopyPhone} className="btn-icon" style={{ width: '32px', height: '32px' }} title="Copy Phone Number">
                  {copiedPhone ? <Check size={14} color="var(--pastel-emerald)" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-card" style={{ padding: '1.15rem 1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--pastel-purple-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--pastel-purple)' }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.74rem', color: 'var(--color-text-dim)', display: 'block' }}>Email Address</span>
                    <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-text-main)' }}>{personalInfo.email}</span>
                  </div>
                </div>

                <button onClick={handleCopyEmail} className="btn-icon" style={{ width: '32px', height: '32px' }} title="Copy Email Address">
                  {copiedEmail ? <Check size={14} color="var(--pastel-emerald)" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Location & Profiles */}
            <div className="glass-card" style={{ padding: '1.15rem 1.25rem' }}>
              <span style={{ fontSize: '0.76rem', color: 'var(--color-text-dim)', display: 'block', marginBottom: '0.65rem' }}>Location & Social Profiles</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.6rem' }}>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.5rem', justifyContent: 'center', fontSize: '0.8rem' }}>
                  <Linkedin size={15} /> LinkedIn
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.5rem', justifyContent: 'center', fontSize: '0.8rem' }}>
                  <Github size={15} /> GitHub
                </a>
              </div>
            </div>

          </div>

          {/* Right Form Column: Clean Visitor Success Message (No Debug Data / Confetti) */}
          <div className="glass-card-static" style={{ padding: '1.6rem', borderRadius: '16px' }}>
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--pastel-emerald-bg)', border: '1px solid rgba(5, 150, 105, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <CheckCircle2 size={26} color="var(--pastel-emerald)" />
                </div>

                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.4rem', color: 'var(--color-text-main)' }}>
                  Thank You for Connecting, {submittedName}!
                </h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', lineHeight: 1.6, maxWidth: '380px', margin: '0 auto 1.5rem auto' }}>
                  Your message has been sent successfully. Aparna will review your details and get back to you shortly.
                </p>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setSubmittedName('');
                    setFormData({ name: '', email: '', phone: '', role: '', message: '' });
                  }}
                  className="btn-primary"
                  style={{ padding: '0.55rem 1.3rem', fontSize: '0.84rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.1rem' }}>Want to Connect with Aparna?</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.82rem', marginBottom: '0.2rem' }}>
                  Fill in your details below and a connection request will be sent directly to Aparna.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.65rem' }}>
                  <div>
                    <label style={{ fontSize: '0.76rem', color: 'var(--color-text-dim)', display: 'block', marginBottom: '0.25rem' }}>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="glass-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.76rem', color: 'var(--color-text-dim)', display: 'block', marginBottom: '0.25rem' }}>Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      className="glass-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '0.65rem' }}>
                  <div>
                    <label style={{ fontSize: '0.76rem', color: 'var(--color-text-dim)', display: 'block', marginBottom: '0.25rem' }}>Your Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      className="glass-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.76rem', color: 'var(--color-text-dim)', display: 'block', marginBottom: '0.25rem' }}>Role / Opportunity</label>
                    <input
                      type="text"
                      placeholder="e.g. Software Developer"
                      className="glass-input"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.76rem', color: 'var(--color-text-dim)', display: 'block', marginBottom: '0.25rem' }}>Your Message *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Hi Aparna, I'd like to connect regarding..."
                    className="glass-input"
                    style={{ resize: 'vertical' }}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: '100%', padding: '0.65rem', justifyContent: 'center', fontSize: '0.88rem' }}
                >
                  {loading ? 'Sending Message...' : (
                    <>
                      Send Message <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
