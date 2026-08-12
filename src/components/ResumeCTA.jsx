import React from 'react';
import { FileText, Download, Eye } from 'lucide-react';
import { portfolio } from '../config/portfolio';

export const ResumeCTA = () => {
  return (
    <section className="resume-cta-section" id="resume">
      <div className="section-container">
        <div className="resume-cta-card">
          <div className="resume-cta-bg-glow" />

          <div className="resume-cta-content">
            <div className="section-tag" style={{ justifyContent: 'center' }}>
              <FileText size={14} />
              <span>COMPLETE STORY</span>
            </div>

            <h2 className="resume-cta-headline">
              Want the <span className="text-gradient">complete overview?</span>
            </h2>

            <p className="resume-cta-body">
              My resume covers the full picture — skills, CGPA, projects with metrics, internship experience,
              certifications, and achievements. One document. Everything you need.
            </p>

            <div className="resume-cta-actions">
              <a
                href={portfolio.personal.resumePdf}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                data-cursor="OPEN"
                aria-label="View Resume PDF in new tab"
              >
                <Eye size={16} />
                <span>View Resume</span>
              </a>
              <a
                href={portfolio.personal.resumePdf}
                download="Suhas_N_R_Resume.pdf"
                className="btn btn-secondary"
                aria-label="Download PDF Resume"
              >
                <Download size={16} />
                <span>Download PDF</span>
              </a>
            </div>

            <p className="resume-meta-note">
              PDF Resume · LaTeX formatted · {portfolio.personal.batch} · {portfolio.personal.cgpa}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
