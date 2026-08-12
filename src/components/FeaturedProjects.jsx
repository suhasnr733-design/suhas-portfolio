import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronUp, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { portfolio } from '../config/portfolio';
import { GithubIcon } from './Icons';

const ProjectArchLayer = ({ layer, tech }) => (
  <div className="arch-layer">
    <div className="arch-layer-label">{layer}</div>
    <div className="arch-layer-tech">{tech}</div>
    <div className="arch-arrow" aria-hidden="true">↓</div>
  </div>
);

const ProjectCard = ({ proj, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`project-showcase-card ${index % 2 === 1 ? 'card-reversed' : ''}`}>
      {/* Visual panel */}
      <div
        className="proj-visual-panel"
        data-cursor="VIEW"
        aria-hidden="true"
      >
        <div className="proj-visual-bg">
          <div className="proj-visual-grid" />
          {/* Abstract tech visualization based on stack */}
          <div className="proj-visual-nodes">
            {proj.technologies.slice(0, 4).map((tech, i) => (
              <div
                key={i}
                className="vis-node"
                style={{
                  top: `${20 + i * 20}%`,
                  left: `${15 + (i % 2) * 50}%`,
                  animationDelay: `${i * 0.4}s`
                }}
              >
                {tech}
              </div>
            ))}
            <div className="vis-glow" />
          </div>
          <div className="proj-index-number">{String(index + 1).padStart(2, '0')}</div>
        </div>
      </div>

      {/* Content panel */}
      <div className="proj-content-panel">
        <div className="proj-category-tag">{proj.category}</div>
        <h3 className="proj-title">{proj.title}</h3>
        <p className="proj-subtitle">{proj.subtitle}</p>
        <p className="proj-description">{proj.description}</p>

        {/* Accuracy metrics from resume */}
        <div className="proj-metrics">
          {proj.metrics.map((m, i) => (
            <div key={i} className="proj-metric">
              <span className="metric-value">{m.value}</span>
              <span className="metric-label">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="proj-tech-stack">
          {proj.technologies.map((tech, i) => (
            <span key={i} className="proj-tech-pill">{tech}</span>
          ))}
        </div>

        {/* Expandable: Architecture + Bullets */}
        <button
          className="proj-expand-btn"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          {expanded ? 'Hide Architecture' : 'View Architecture'}
        </button>

        {expanded && (
          <div className="proj-expanded-section">
            <div className="arch-title">System Architecture</div>
            <div className="proj-architecture">
              {proj.architecture.map((layer, i) => (
                <div key={i} className="arch-layer">
                  <div className="arch-layer-label">{layer.layer}</div>
                  <div className="arch-layer-tech">{layer.tech}</div>
                  {i < proj.architecture.length - 1 && (
                    <div className="arch-arrow">↓</div>
                  )}
                </div>
              ))}
            </div>

            <ul className="proj-bullets">
              {proj.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        )}

        {/* CTAs */}
        <div className="proj-cta-row">
          <a
            href={proj.github}
            target="_blank"
            rel="noreferrer"
            className="proj-cta-btn btn-outline"
            aria-label={`View ${proj.title} on GitHub`}
            data-cursor="↗"
          >
            <GithubIcon size={15} />
            <span>GitHub</span>
          </a>
          {proj.liveDemo && proj.liveDemo !== '#' && (
            <a
              href={proj.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="proj-cta-btn btn-primary-sm"
              aria-label={`View ${proj.title} live demo`}
              data-cursor="↗"
            >
              <span>Live Demo</span>
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export const FeaturedProjects = () => {
  return (
    <section className="featured-projects-section" id="projects">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">
            <FolderGit2 size={14} />
            <span>03 — FEATURED PROJECTS</span>
          </div>
          <h2 className="section-title">
            Problems Worth <span className="text-gradient">Building For</span>
          </h2>
          <p className="section-subtitle">
            Each project solves a real problem using AI, intelligent data processing, and full-stack engineering.
            Every accuracy figure and metric shown is from internal testing as stated in my resume.
          </p>
        </div>

        <div className="projects-showcase-list">
          {portfolio.projects.map((proj, idx) => (
            <ProjectCard key={proj.id} proj={proj} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
