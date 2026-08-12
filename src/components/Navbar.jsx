import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, Download, ArrowUpRight, FileText } from 'lucide-react';
import { portfolio } from '../config/portfolio';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Navbar = ({ onRecruiterMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#journey', label: 'Journey' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`} role="banner">
      <div className="navbar-container">
        {/* Brand */}
        <a href="#hero" className="navbar-brand" aria-label="Home">
          <div className="brand-icon-box">
            <Code2 size={18} />
          </div>
          <span className="brand-text">
            Suhas <span className="brand-highlight">N R</span>
          </span>
          <span className="brand-badge">{portfolio.personal.codeTag}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="navbar-actions">
          <button
            className="recruiter-mode-btn"
            onClick={onRecruiterMode}
            aria-label="Open Recruiter Mode — 30 second summary"
            title="Recruiter Mode"
          >
            <FileText size={14} />
            <span>Recruiter Mode</span>
          </button>

          <a
            href={portfolio.personal.resumePdf}
            target="_blank"
            rel="noreferrer"
            className="nav-btn-resume"
            aria-label="View Resume PDF"
          >
            <Download size={14} />
            <span>Resume</span>
          </a>

          <a
            href={portfolio.personal.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="nav-icon-link"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>

          <a
            href={portfolio.personal.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="nav-icon-link"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav className="mobile-drawer" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="mobile-drawer-actions">
            <button
              className="btn btn-secondary"
              onClick={() => { onRecruiterMode(); setMobileMenuOpen(false); }}
            >
              <FileText size={14} />
              Recruiter Mode
            </button>
            <a
              href={portfolio.personal.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download size={14} />
              Resume PDF
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
