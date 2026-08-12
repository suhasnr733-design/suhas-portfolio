import React, { useState, useEffect } from 'react';
import { portfolio } from '../config/portfolio';

export const Preloader = ({ onComplete }) => {
  const [phase, setPhase] = useState('initializing'); // initializing -> welcome -> done
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase('welcome');
          setTimeout(() => {
            setPhase('done');
            setTimeout(onComplete, 400);
          }, 600);
          return 100;
        }
        return prev + 10;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div className={`preloader-overlay ${phase === 'welcome' ? 'phase-welcome' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-brand">
          <span className="preloader-tag">{portfolio.personal.codeTag}</span>
        </div>

        <div className="preloader-text">
          {phase === 'initializing' ? (
            <h2>INITIALIZING PORTFOLIO...</h2>
          ) : (
            <h2 className="welcome-name">WELCOME — {portfolio.personal.name.toUpperCase()}</h2>
          )}
        </div>

        <div className="preloader-bar-wrap">
          <div className="preloader-bar" style={{ width: `${progress}%` }} />
        </div>

        <div className="preloader-footer">
          <span>{progress}%</span>
          <span>SYSTEM READY</span>
        </div>
      </div>
    </div>
  );
};
