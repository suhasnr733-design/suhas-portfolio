import React, { useState, useEffect } from 'react';
import { Code2, Terminal, Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolio } from '../config/portfolio';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a href="#hero" className="navbar-brand">
          <div className="brand-icon-box">
            <Code2 size={18} />
          </div>
          <span className="brand-text">
            Suhas <span className="brand-highlight">N R</span>
          </span>
          <span className="brand-badge">{portfolio.personal.codeTag}</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="navbar-links">
          <a href="#hero">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-btn-contact">
            <span>Contact</span>
            <ArrowUpRight size={14} />
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a href="#hero" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};
