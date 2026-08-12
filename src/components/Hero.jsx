import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Download, Mail, Sparkles, Terminal } from 'lucide-react';
import { portfolio } from '../config/portfolio';
import { ProfilePhotoFrame } from './ProfilePhotoFrame';
import { NeuralBackground } from './NeuralBackground';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section" id="hero">
      {/* 3D Interactive Neural Particle Background Layer */}
      <NeuralBackground />

      <div className="hero-container">
        {/* Hero Content Left (Desktop) / Main Intro Block */}
        <div className="hero-text-column">
          <div className="hero-badge">
            <span className="badge-dot animate-pulse"></span>
            <Terminal size={13} className="badge-icon" />
            <span>AVAILABLE FOR INNOVATIVE ROLES</span>
          </div>

          <div className="hero-heading-group">
            <span className="hero-greeting">Hello, I'm</span>
            <h1 className="hero-name">
              Suhas N R
              <span className="name-accent-line"></span>
            </h1>
          </div>

          <p className="hero-subtitle">
            <span className="subtitle-highlight">Computer Science Engineer</span>{' '}
            building intelligent software.
          </p>

          <p className="hero-description">
            {portfolio.personal.description}
          </p>

          {/* Action CTAs */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowUpRight size={16} className="btn-arrow" />
            </a>

            <a href={portfolio.personal.resumePdf} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <Download size={16} />
              <span>View Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a
              href={portfolio.personal.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
              <span>GitHub</span>
            </a>
            <a
              href={portfolio.personal.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${portfolio.personal.email}`}
              className="social-link"
              aria-label="Email Contact"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Hero Visual Right (Desktop ~40% Visual Area) / Mobile Top Stack */}
        <div
          className="hero-photo-column"
          style={{
            transform: `translateY(${scrollY * 0.08}px)` // Subtle scroll parallax
          }}
        >
          <div className="photo-ambient-glow" />
          <ProfilePhotoFrame />
        </div>
      </div>

      {/* Hero Stats Ribbon */}
      <div className="hero-stats-ribbon">
        {portfolio.stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
