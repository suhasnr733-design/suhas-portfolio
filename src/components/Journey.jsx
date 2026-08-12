import React from 'react';
import { GraduationCap, Briefcase, Award, BookOpen, Trophy } from 'lucide-react';
import { portfolio } from '../config/portfolio';

export const Journey = () => {
  return (
    <section className="journey-section" id="journey">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">
            <GraduationCap size={14} />
            <span>04 — JOURNEY</span>
          </div>
          <h2 className="section-title">
            The <span className="text-gradient">Story So Far</span>
          </h2>
          <p className="section-subtitle">
            Education, internship experience, achievements, and certifications — all verified from resume.
          </p>
        </div>

        <div className="journey-layout">
          {/* Education Timeline */}
          <div className="journey-column">
            <h3 className="journey-col-title">
              <GraduationCap size={16} /> Education
            </h3>
            <div className="timeline">
              {portfolio.education.map((edu, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <div className="timeline-period">{edu.period}</div>
                    <h4 className="timeline-title">{edu.institution}</h4>
                    <p className="timeline-role">{edu.degree}</p>
                    <span className="timeline-badge">{edu.score}</span>
                    <p className="timeline-details">{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="journey-column">
            <h3 className="journey-col-title">
              <Briefcase size={16} /> Experience
            </h3>
            <div className="timeline">
              {portfolio.experience.map((exp, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot dot-indigo" />
                  <div className="timeline-content">
                    <div className="timeline-period">{exp.period}</div>
                    <h4 className="timeline-title">{exp.company}</h4>
                    <p className="timeline-role">{exp.role}</p>
                    <p className="timeline-details">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <h3 className="journey-col-title mt-section">
              <Trophy size={16} /> Achievements
            </h3>
            <div className="achievements-list">
              {portfolio.achievements.map((ach, idx) => (
                <div key={idx} className="achievement-card">
                  <Award size={16} className="ach-icon" />
                  <div>
                    <div className="ach-title">{ach.title}</div>
                    <div className="ach-event">{ach.event}</div>
                    <div className="ach-detail">{ach.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="certs-section">
          <h3 className="journey-col-title">
            <BookOpen size={16} /> Courses & Certifications
          </h3>
          <div className="certs-grid">
            {portfolio.certifications.map((cert, idx) => (
              <div key={idx} className="cert-card">
                <div className="cert-inner">
                  <span className="cert-icon">✦</span>
                  <div>
                    <div className="cert-title">{cert.title}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
