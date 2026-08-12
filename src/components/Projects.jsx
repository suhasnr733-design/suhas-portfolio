import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { portfolio } from '../config/portfolio';
import { GithubIcon } from './Icons';

export const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="section-title">
            Engineered Systems & <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of intelligent applications, developer tools, and high-performance algorithms built by Suhas N R Acharya.
          </p>
        </div>

        <div className="projects-grid">
          {portfolio.projects.map((proj) => (
            <div key={proj.id} className="project-card">
              <div className="project-header">
                <span className="project-category">{proj.category}</span>
                <div className="project-links">
                  <a href={proj.github} className="icon-btn" aria-label="GitHub Repository">
                    <GithubIcon size={16} />
                  </a>
                  <a href={proj.link} className="icon-btn" aria-label="Live Demo">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.description}</p>

              <div className="project-tags">
                {proj.tags.map((tag, idx) => (
                  <span key={idx} className="tag-pill">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
