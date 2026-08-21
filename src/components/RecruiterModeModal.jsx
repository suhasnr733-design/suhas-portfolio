import React, { useState } from 'react';
import { X, Download, ExternalLink, Briefcase, GraduationCap, Award, CheckCircle2, Mail, Check } from 'lucide-react';
import { portfolio } from '../config/portfolio';
import { GithubIcon, LinkedinIcon } from './Icons';

export const RecruiterModeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleEmailClick = (e) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(portfolio.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3500);
    }
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(portfolio.personal.email)}&su=${encodeURIComponent('Interview / Opportunity Inquiry - Suhas N R')}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="recruiter-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="recruiter-modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="recruiter-header">
          <div className="recruiter-title-wrap">
            <span className="recruiter-badge">⚡ RECRUITER 30-SEC EXECUTIVE SUMMARY</span>
            <h2>{portfolio.personal.name}</h2>
            <p className="recruiter-subhead">{portfolio.personal.headline}</p>
          </div>
          <button className="recruiter-close-btn" onClick={onClose} aria-label="Close Recruiter Mode">
            <X size={20} />
          </button>
        </div>

        <div className="recruiter-body">
          {/* Quick Metrics */}
          <div className="recruiter-metrics-grid">
            <div className="r-metric">
              <span className="rm-val">{portfolio.personal.cgpa}</span>
              <span className="rm-lbl">Canara Engineering College</span>
            </div>
            <div className="r-metric">
              <span className="rm-val">3 AI Projects</span>
              <span className="rm-lbl">Gemini, Whisper, OCR</span>
            </div>
            <div className="r-metric">
              <span className="rm-val">Top 10</span>
              <span className="rm-lbl">CORE UNLEASHED Hackathon</span>
            </div>
          </div>

          {/* Education & Internship */}
          <div className="recruiter-section">
            <h3><GraduationCap size={16} /> Education & Experience</h3>
            <div className="recruiter-list">
              <div className="recruiter-item">
                <strong>{portfolio.education[0].institution}</strong> — {portfolio.education[0].degree}
                <div className="item-sub">{portfolio.education[0].score} | {portfolio.education[0].period}</div>
              </div>
              <div className="recruiter-item">
                <strong>InAmigos Foundation</strong> — AI Web Development Intern
                <div className="item-sub">Contributed to AI-integrated web application development.</div>
              </div>
            </div>
          </div>

          {/* Core Projects */}
          <div className="recruiter-section">
            <h3><Briefcase size={16} /> Key Engineered Projects</h3>
            <div className="recruiter-projects-list">
              {portfolio.projects.map((proj) => (
                <div key={proj.id} className="recruiter-proj-item">
                  <div className="rp-title">{proj.title} <span className="rp-tech">({proj.technologies.join(', ')})</span></div>
                  <p className="rp-desc">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Breakdown */}
          <div className="recruiter-section">
            <h3><CheckCircle2 size={16} /> Core Technical Stack</h3>
            <div className="recruiter-skills-tags">
              {[
                ...portfolio.skills.languages,
                ...portfolio.skills.backend,
                ...portfolio.skills.frontend,
                ...portfolio.skills.aiMl,
                ...portfolio.skills.databases
              ].map((s, idx) => (
                <span key={idx} className="r-skill-pill">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="recruiter-footer">
          <a href={portfolio.personal.resumePdf} target="_blank" rel="noreferrer" className="btn btn-primary">
            <Download size={16} />
            <span>Download PDF Resume</span>
          </a>
          <button
            type="button"
            onClick={handleEmailClick}
            className="btn btn-secondary"
            title={`Click to open Gmail composer and copy ${portfolio.personal.email}`}
          >
            {copied ? <Check size={16} color="var(--cyan)" /> : <Mail size={16} />}
            <span>{copied ? 'Email Copied!' : 'Email Direct'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
