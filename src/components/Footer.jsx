import React from 'react';
import { Code2, ArrowUpRight } from 'lucide-react';
import { portfolio } from '../config/portfolio';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo-wrap">
              <Code2 size={20} />
              <span className="brand-title">{portfolio.personal.name}</span>
            </div>
            <p className="footer-tagline">
              {portfolio.personal.role} · AI & Full-Stack Systems · {portfolio.personal.batch}
            </p>
            <div className="footer-socials">
              <a
                href={portfolio.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={portfolio.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Footer Navigation">
            <div className="footer-nav-col">
              <span className="footer-nav-heading">Navigate</span>
              <a href="#hero">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#journey">Journey</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-nav-col">
              <span className="footer-nav-heading">Links</span>
              <a
                href={portfolio.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={11} />
              </a>
              <a
                href={portfolio.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={11} />
              </a>
              <a href={`mailto:${portfolio.personal.email}`}>Email</a>
              <a href={portfolio.personal.resumePdf} target="_blank" rel="noreferrer">
                Resume PDF <ArrowUpRight size={11} />
              </a>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {portfolio.personal.name}. All rights reserved.
          </p>
          <p className="footer-tech-stack">
            <span>Built with React + Vite</span>
            <span className="separator">·</span>
            <code className="code-tag">{portfolio.personal.codeTag}</code>
          </p>
        </div>
      </div>
    </footer>
  );
};
