import React from 'react';
import { ArrowRight, User, MapPin, Mail, ExternalLink } from 'lucide-react';
import { portfolio } from '../config/portfolio';

export const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="about-grid">
          {/* Left editorial headline */}
          <div className="about-left">
            <div className="section-tag">
              <User size={14} />
              <span>01 — ABOUT</span>
            </div>
            <h2 className="about-headline">
              More Than<br />
              a <span className="text-gradient">Resume.</span>
            </h2>
            <div className="about-location-row">
              <MapPin size={14} />
              <span>{portfolio.personal.location}</span>
            </div>
          </div>

          {/* Right content */}
          <div className="about-right">
            <p className="about-statement">
              I'm a <strong>Computer Science Engineering student</strong> at Canara Engineering College
              (CGPA <strong>{portfolio.personal.cgpa.replace(' CGPA', '')}</strong>), deeply fascinated
              by the intersection of AI, privacy technology, and modern web systems.
            </p>

            <p className="about-body">
              My engineering philosophy is simple: <em>build systems that work intelligently, not just functionally</em>.
              From parsing resumes with 95–98% accuracy using Google Gemini AI, to detecting personally
              identifiable information in scanned documents with Tesseract OCR, every project is built
              around solving a genuine problem.
            </p>

            <div className="about-quick-facts">
              <div className="fact-card">
                <span className="fact-value">{portfolio.personal.cgpa}</span>
                <span className="fact-label">Canara Engineering College</span>
              </div>
              <div className="fact-card">
                <span className="fact-value">AI × Full Stack</span>
                <span className="fact-label">Core Engineering Focus</span>
              </div>
              <div className="fact-card">
                <span className="fact-value">Top 10</span>
                <span className="fact-label">CORE UNLEASHED Hackathon</span>
              </div>
              <div className="fact-card">
                <span className="fact-value">50+ DSA</span>
                <span className="fact-label">LeetCode & HackerRank Problems</span>
              </div>
            </div>

            <div className="about-cta-row">
              <a href={`mailto:${portfolio.personal.email}`} className="about-contact-link">
                <Mail size={15} />
                <span>{portfolio.personal.email}</span>
              </a>
              <a
                href={portfolio.personal.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="about-link-pill"
              >
                LinkedIn <ExternalLink size={12} />
              </a>
              <a
                href={portfolio.personal.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="about-link-pill"
              >
                GitHub <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
