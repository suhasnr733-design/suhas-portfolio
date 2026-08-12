import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2 } from 'lucide-react';
import { portfolio } from '../config/portfolio';

export const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Suhas N R Developer Terminal [Version 1.0.0]' },
    { type: 'output', text: 'Type "help" or "whoami" to explore resume data.' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = inputVal.trim().toLowerCase();
    setInputVal('');

    const newHistory = [...history, { type: 'input', text: `$ ${inputVal}` }];

    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    let response = '';

    switch (cmd) {
      case 'help':
        response = `Available commands:
  whoami       - Display candidate identity
  about        - View engineering profile
  skills       - List core technical stack
  projects     - View featured projects & metrics
  education    - View degree & CGPA details
  contact      - Display email & social links
  sudo hire me - Special developer action
  clear        - Clear terminal console`;
        break;

      case 'whoami':
        response = `${portfolio.personal.name} | ${portfolio.personal.headline}
Status: ${portfolio.personal.batch} @ Canara Engineering College (${portfolio.personal.cgpa})`;
        break;

      case 'about':
        response = portfolio.personal.about;
        break;

      case 'skills':
        response = `Languages : ${portfolio.skills.languages.join(', ')}
Backend   : ${portfolio.skills.backend.join(', ')}
Frontend  : ${portfolio.skills.frontend.join(', ')}
Databases : ${portfolio.skills.databases.join(', ')}
AI / ML   : ${portfolio.skills.aiMl.join(', ')}
Tools     : ${portfolio.skills.tools.join(', ')}`;
        break;

      case 'projects':
        response = portfolio.projects.map(p => `• ${p.title} (${p.technologies.join(', ')})\n  "${p.description}"`).join('\n\n');
        break;

      case 'education':
        response = portfolio.education.map(e => `• ${e.institution} - ${e.degree}\n  ${e.score} | ${e.period}`).join('\n');
        break;

      case 'contact':
        response = `Email    : ${portfolio.personal.email}
Phone    : ${portfolio.personal.phone}
LinkedIn : ${portfolio.personal.linkedinUrl}
GitHub   : ${portfolio.personal.githubUrl}`;
        break;

      case 'sudo hire me':
        response = `🚀 Permission granted!
Let's build intelligent software together.
Direct Email: ${portfolio.personal.email}`;
        break;

      default:
        response = `Command not recognized: "${cmd}". Type "help" for a list of available commands.`;
        break;
    }

    newHistory.push({ type: 'output', text: response });
    setHistory(newHistory);
  };

  return (
    <section className="terminal-section" id="terminal">
      <div className="section-container">
        <div className="terminal-window">
          {/* Header */}
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="terminal-title">
              <TerminalIcon size={13} />
              <span>developer@suhas-nr:~ (zsh)</span>
            </div>
            <div className="terminal-actions">
              <span className="action-pill">Interactive CLI</span>
            </div>
          </div>

          {/* Body */}
          <div className="terminal-body">
            {history.map((item, idx) => (
              <div key={idx} className={`terminal-line line-${item.type}`}>
                <pre>{item.text}</pre>
              </div>
            ))}
            <div className="terminal-input-line">
              <span className="prompt-symbol">$</span>
              <input
                type="text"
                className="terminal-input"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleCommand}
                placeholder="type 'help'..."
                aria-label="Terminal input"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
      </div>
    </section>
  );
};
