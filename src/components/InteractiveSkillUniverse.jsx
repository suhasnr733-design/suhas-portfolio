import React, { useState } from 'react';
import { Cpu, Code, Database, Terminal, Layers, Sparkles } from 'lucide-react';
import { portfolio } from '../config/portfolio';

export const InteractiveSkillUniverse = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'aiMl', label: 'AI / ML & NLP' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Dev Tools' }
  ];

  return (
    <section className="skills-universe-section" id="skills">
      <div className="section-container">
        <div className="section-header center-text">
          <div className="section-tag">
            <Cpu size={14} />
            <span>INTERACTIVE TECH STACK</span>
          </div>
          <h2 className="section-title">
            My Technology <span className="text-gradient">Universe</span>
          </h2>
          <p className="section-subtitle">
            Orbiting core competencies extracted directly from engineering experience and verified project implementations.
          </p>
        </div>

        {/* Orbiting Visual Cosmos Container */}
        <div className="orbit-cosmos-container">
          <div className="orbit-center-node">
            <div className="center-avatar-pulse" />
            <span className="center-name">SUHAS N R</span>
            <span className="center-role">CSE 2027</span>
          </div>

          {/* Orbiting Nodes */}
          {portfolio.skillUniverse.map((item, idx) => {
            const angle = (idx / portfolio.skillUniverse.length) * 2 * Math.PI;
            const x = Math.cos(angle) * item.orbitRadius;
            const y = Math.sin(angle) * item.orbitRadius;

            return (
              <div
                key={idx}
                className={`orbit-node ${hoveredSkill === item.name ? 'node-highlight' : ''}`}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  borderColor: item.color
                }}
                onMouseEnter={() => setHoveredSkill(item.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <span className="node-dot" style={{ backgroundColor: item.color }} />
                <span className="node-text">{item.name}</span>
              </div>
            );
          })}

          <div className="orbit-ring ring-1" />
          <div className="orbit-ring ring-2" />
          <div className="orbit-ring ring-3" />
        </div>

        {/* Categorized Skills Cards Grid */}
        <div className="skills-categorized-grid">
          <div className="skill-cat-card">
            <div className="cat-icon-header">
              <Code size={18} />
              <h3>Languages</h3>
            </div>
            <div className="cat-tags">
              {portfolio.skills.languages.map((s, i) => (
                <span key={i} className="skill-pill">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-cat-card">
            <div className="cat-icon-header">
              <Sparkles size={18} />
              <h3>AI / ML & NLP</h3>
            </div>
            <div className="cat-tags">
              {portfolio.skills.aiMl.map((s, i) => (
                <span key={i} className="skill-pill pill-ai">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-cat-card">
            <div className="cat-icon-header">
              <Terminal size={18} />
              <h3>Backend Engineering</h3>
            </div>
            <div className="cat-tags">
              {portfolio.skills.backend.map((s, i) => (
                <span key={i} className="skill-pill">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-cat-card">
            <div className="cat-icon-header">
              <Layers size={18} />
              <h3>Frontend Frameworks</h3>
            </div>
            <div className="cat-tags">
              {portfolio.skills.frontend.map((s, i) => (
                <span key={i} className="skill-pill">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-cat-card">
            <div className="cat-icon-header">
              <Database size={18} />
              <h3>Databases</h3>
            </div>
            <div className="cat-tags">
              {portfolio.skills.databases.map((s, i) => (
                <span key={i} className="skill-pill">{s}</span>
              ))}
            </div>
          </div>

          <div className="skill-cat-card">
            <div className="cat-icon-header">
              <Cpu size={18} />
              <h3>Developer Tools</h3>
            </div>
            <div className="cat-tags">
              {portfolio.skills.tools.map((s, i) => (
                <span key={i} className="skill-pill">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
