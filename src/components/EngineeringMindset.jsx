import React, { useState } from 'react';
import { Lightbulb } from 'lucide-react';
import { portfolio } from '../config/portfolio';

export const EngineeringMindset = () => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="mindset-section" id="mindset">
      <div className="section-container">
        <div className="section-header">
          <div className="section-tag">
            <Lightbulb size={14} />
            <span>02 — ENGINEERING MINDSET</span>
          </div>
          <h2 className="section-title">
            How I <span className="text-gradient">Build</span>
          </h2>
          <p className="section-subtitle">
            A systematic, iterative approach to transforming ideas into reliable, intelligent software systems.
          </p>
        </div>

        <div className="mindset-flow">
          {portfolio.mindsetProcess.map((item, idx) => (
            <React.Fragment key={idx}>
              <div
                className={`mindset-step ${activeStep === idx ? 'step-active' : ''}`}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                tabIndex={0}
                onFocus={() => setActiveStep(idx)}
                onBlur={() => setActiveStep(null)}
                role="button"
                aria-expanded={activeStep === idx}
              >
                <div className="step-number">{item.step}</div>
                <div className="step-title">{item.title}</div>
                <div className={`step-desc ${activeStep === idx ? 'desc-visible' : ''}`}>
                  {item.desc}
                </div>
              </div>
              {idx < portfolio.mindsetProcess.length - 1 && (
                <div className="mindset-connector" aria-hidden="true">↓</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
