import React, { useState, useEffect } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorText(target.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else if (e.target.closest('a, button, [role="button"]')) {
        setCursorText('OPEN');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        className={`custom-cursor-dot ${isHovered ? 'cursor-active' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`custom-cursor-ring ${isHovered ? 'cursor-ring-active' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        {cursorText && <span className="cursor-label">{cursorText}</span>}
      </div>
    </>
  );
};
