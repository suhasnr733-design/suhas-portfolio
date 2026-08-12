import React from 'react';
import { Heart, Terminal, Code2 } from 'lucide-react';
import { portfolio } from '../config/portfolio';

export const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo-wrap">
              <Code2 size={20} />
              <span className="brand-title">Suhas N R Acharya</span>
            </div>
            <p className="footer-tagline">
              Computer Science Engineer • AI & Full Stack Systems Architecture
            </p>
          </div>

          <div className="footer-links">
            <a href="#hero">Back to Top</a>
            <a href="#projects">Projects</a>
            <a href={portfolio.personal.resumeUrl}>Resume</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Suhas N R Acharya. All rights reserved.</p>
          <p className="footer-tech-stack">
            <span>Built with React + Vite</span>
            <span className="separator">•</span>
            <span className="code-tag">{portfolio.personal.codeTag}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
