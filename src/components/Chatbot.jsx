import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, User, Key, Rocket, GraduationCap, Mail as MailIcon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const initialBotMessage = {
  sender: 'bot',
  text: "Hello! I'm Aparna's AI Portfolio Assistant. Ask me anything about her skills, projects, CGPA, internship, or contact info!",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([initialBotMessage]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('groq-api-key') || '');
  const [showKeyInput, setShowKeyInput] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleCloseChat = () => {
    setIsOpen(false);
    setMessages([initialBotMessage]);
    setInput('');
    setIsTyping(false);
  };

  const handleSaveApiKey = (key) => {
    setApiKey(key);
    localStorage.setItem('groq-api-key', key);
    setShowKeyInput(false);
  };

  const getKnowledgeResponse = (userText) => {
    const text = userText.toLowerCase();

    if (text.includes('education') || text.includes('cgpa') || text.includes('university') || text.includes('college') || text.includes('study') || text.includes('degree')) {
      return `Aparna's Academic Background:\n\n- B.Tech (CSE): Malla Reddy University (2021-2025) | CGPA: 8.95 / 10\n- Intermediate (Class XII): Sri Chaitanya Junior College (94%)\n- High School (Class X): Little Flower High School (GPA: 9.3)`;
    }

    if (text.includes('project') || text.includes('banana') || text.includes('watering') || text.includes('aurax') || text.includes('pulseflow') || text.includes('crypto')) {
      return `Aparna's Featured Projects:\n\n1. Nutrition Deficiency Detection in Banana Leaves - Deep Learning & Raspberry Pi IoT system deployed on Firebase (Selected for EPICS Program).\n2. Smart Irrigation System - IoT soil moisture sensors & Arduino real-time irrigation app.\n3. AuraX Dashboard - AI real-time telemetry suite with React 18 & Recharts.\n4. PulseFlow Board - Agile task management board built with TypeScript & Zustand.\n5. CryptoSphere Tracker - Live cryptocurrency price ticker & watchlist app.`;
    }

    if (text.includes('intern') || text.includes('experience') || text.includes('work') || text.includes('edutechex') || text.includes('apex')) {
      return `Aparna's Work & Internships:\n\n- Software Developer Intern @ EduTechEX Global (Oct 2025 - Present): Assisting in application development, deployment, maintenance, troubleshooting, and system performance monitoring.\n- Frontend Developer Intern @ Apex Digital Solutions (May 2024 - Aug 2024): Built responsive React components and improved page load times by 35%.`;
    }

    if (text.includes('skill') || text.includes('tech') || text.includes('java') || text.includes('react') || text.includes('language') || text.includes('stack')) {
      return `Aparna's Technical Stack:\n\n- Languages: Java, SQL, JavaScript (ES6+), TypeScript, Python\n- Web Tech: HTML5, CSS3, React.js, Next.js, Node.js, Express, MongoDB, Tailwind CSS, Redux/Zustand\n- Core CS: OS, Computer Networks, DBMS, Data Structures & OOP\n- Cloud & Tools: AWS (S3, IAM), Firebase, Git, Vite, Postman, Docker Basics`;
    }

    if (text.includes('contact') || text.includes('email') || text.includes('phone') || text.includes('number') || text.includes('reach') || text.includes('linkedin') || text.includes('github') || text.includes('location')) {
      return `How to Contact Aparna:\n\n- Email: ${personalInfo.email}\n- Phone: +91 ${personalInfo.phone}\n- Location: ${personalInfo.location}\n- LinkedIn: linkedin.com/in/aparna-ponnuru-2998b022a\n- GitHub: github.com/AparnaPonnuru`;
    }

    if (text.includes('certification') || text.includes('certificate') || text.includes('nptel') || text.includes('coursera') || text.includes('cambridge')) {
      return `Certifications & Achievements:\n\n1. NPTEL Certification in Programming in Java\n2. Coursera Certification in Java & Web Development\n3. Cambridge English Empower Level B2 Certification\n4. EPICS Program Winner: Only project selected from university for agricultural IoT innovation.`;
    }

    if (text.includes('hi') || text.includes('hello') || text.includes('hey') || text.includes('who are you')) {
      return `Hello! I can tell you all about Aparna's technical background, projects, B.Tech CGPA (8.95), internships, and skills. What would you like to know?`;
    }

    return `Aparna Ponnuru is a Computer Science Graduate (8.95 CGPA) and Software Developer Intern. She specializes in Java, React.js, Node.js, IoT & Raspberry Pi, and AWS/Firebase.\n\nYou can ask me about her Projects, Education, Skills, Internship, or Contact Info!`;
  };

  const handleSend = async (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMessage = { sender: 'user', text: query };
    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    if (apiKey) {
      try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: 'llama3-8b-8192',
            messages: [
              {
                role: 'system',
                content: `You are the AI Assistant for Aparna Ponnuru's portfolio. Aparna is a Computer Science Graduate from Malla Reddy University with an 8.95 CGPA, currently a Software Developer Intern at EduTechEX Global. Her skills include Java, React.js, Node.js, SQL, MongoDB, AWS, and IoT. Her email is aparnaponnuru09@gmail.com and phone is +91 9701161517. Answer concisely and warmly. Do not use emojis.`,
              },
              { role: 'user', content: query },
            ],
            max_tokens: 250,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const aiReply = data.choices[0]?.message?.content || getKnowledgeResponse(query);
          setIsTyping(false);
          setMessages((prev) => [...prev, { sender: 'bot', text: aiReply }]);
          return;
        }
      } catch (err) {
        console.warn('Groq API fallback to internal knowledge engine:', err);
      }
    }

    setTimeout(() => {
      setIsTyping(false);
      const botReply = getKnowledgeResponse(query);
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 450);
  };

  return (
    <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 1000 }}>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="btn-primary"
          style={{
            padding: '0.8rem 1.25rem',
            borderRadius: 'var(--radius-full)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            boxShadow: '0 8px 30px rgba(5, 150, 105, 0.4)',
            animation: 'bounceSubtle 3s ease-in-out infinite',
            cursor: 'pointer',
          }}
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Bot size={20} color="#fff" />
            <span style={{ position: 'absolute', top: -2, right: -2, width: '7px', height: '7px', borderRadius: '50%', background: '#10b981' }} />
          </div>
          <span style={{ fontSize: '0.88rem', fontWeight: 700 }}>Ask My Portfolio</span>
        </button>
      )}

      {isOpen && (
        <div
          className="glass-card-static"
          style={{
            width: '360px',
            height: '500px',
            maxHeight: '82vh',
            maxWidth: '90vw',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
            border: '1px solid var(--border-glass-bright)',
            animation: 'slideUpModal 0.25s ease-out',
            background: 'var(--bg-card)',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '0.85rem 1.1rem',
              background: 'var(--bg-nav)',
              borderBottom: '1px solid var(--border-glass)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={18} color="#fff" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-text-main)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  Aparna's AI Assistant <Sparkles size={13} color="var(--pastel-emerald)" />
                </div>
                <div style={{ fontSize: '0.72rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} /> Online & Ready
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <button
                onClick={() => setShowKeyInput(!showKeyInput)}
                className="btn-icon"
                style={{ width: '28px', height: '28px' }}
                title="Optional Groq API Key Config"
              >
                <Key size={13} />
              </button>
              <button
                onClick={handleCloseChat}
                className="btn-icon"
                style={{ width: '28px', height: '28px' }}
                title="Close and Reset Chat"
              >
                <X size={15} />
              </button>
            </div>
          </div>

          {/* API Key Input */}
          {showKeyInput && (
            <div style={{ padding: '0.75rem 1rem', background: 'var(--bg-nav)', borderBottom: '1px solid var(--border-glass)', fontSize: '0.78rem' }}>
              <div style={{ marginBottom: '0.4rem', color: 'var(--color-text-muted)' }}>Groq API Key (Optional LLM Integration):</div>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <input
                  type="password"
                  placeholder="gsk_..."
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="glass-input"
                  style={{ padding: '0.35rem 0.6rem', fontSize: '0.78rem' }}
                />
                <button onClick={() => handleSaveApiKey(apiKey)} className="btn-primary" style={{ padding: '0.35rem 0.75rem', fontSize: '0.75rem' }}>
                  Save
                </button>
              </div>
            </div>
          )}

          {/* Messages */}
          <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '85%',
                    padding: '0.7rem 0.95rem',
                    borderRadius: msg.sender === 'user' ? '14px 14px 2px 14px' : '14px 14px 14px 2px',
                    background: msg.sender === 'user' ? 'var(--gradient-primary)' : 'rgba(148, 163, 184, 0.1)',
                    border: msg.sender === 'user' ? 'none' : '1px solid var(--border-glass)',
                    color: msg.sender === 'user' ? '#ffffff' : 'var(--color-text-main)',
                    fontSize: '0.85rem',
                    lineHeight: 1.55,
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', gap: '4px', padding: '0.5rem', color: 'var(--color-text-dim)', fontSize: '0.8rem' }}>
                <span>AI is typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Buttons (SVG icons instead of emojis) */}
          <div style={{ padding: '0.4rem 0.85rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem', background: 'rgba(0,0,0,0.03)' }}>
            <button onClick={() => handleSend("What projects has Aparna built?")} className="glass-pill" style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem', cursor: 'pointer', border: 'none' }}>
              <Rocket size={11} /> Projects
            </button>
            <button onClick={() => handleSend("What is her CGPA & Education?")} className="glass-pill" style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem', cursor: 'pointer', border: 'none' }}>
              <GraduationCap size={11} /> CGPA & Education
            </button>
            <button onClick={() => handleSend("How can I contact Aparna?")} className="glass-pill" style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem', cursor: 'pointer', border: 'none' }}>
              <MailIcon size={11} /> Contact Info
            </button>
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            style={{
              padding: '0.75rem 0.85rem',
              borderTop: '1px solid var(--border-glass)',
              display: 'flex',
              gap: '0.5rem',
              background: 'var(--bg-nav)',
            }}
          >
            <input
              type="text"
              placeholder="Ask anything about Aparna..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="glass-input"
              style={{ padding: '0.5rem 0.85rem', fontSize: '0.84rem' }}
            />
            <button type="submit" className="btn-primary" style={{ width: '36px', height: '36px', padding: 0, borderRadius: '50%' }}>
              <Send size={15} />
            </button>
          </form>
        </div>
      )}

      <style>{`
        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes slideUpModal {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
