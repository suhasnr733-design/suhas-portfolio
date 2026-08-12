import React, { useState, useEffect, useRef } from 'react';
import { Camera, Sparkles, Code, Terminal, AlertCircle } from 'lucide-react';
import { portfolio } from '../config/portfolio';
import { PhotoModal } from './PhotoModal';

export const ProfilePhotoFrame = () => {
  const [imageSrc, setImageSrc] = useState(portfolio.personal.profileImage);
  const [variantIndex, setVariantIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isImageError, setIsImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoadedAnim, setIsLoadedAnim] = useState(false);

  // 3D Tilt State
  const [tilt, setTilt] = useState({ x: 0, y: 0, glowX: 50, glowY: 50 });
  const frameRef = useRef(null);

  // Page Load Entrance Animation sequence (800ms-1200ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoadedAnim(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle Image Fallbacks (/profile.jpg -> /profile.png -> /profile.webp -> Placeholder)
  const handleImageError = () => {
    const nextIndex = variantIndex + 1;
    const variants = portfolio.personal.profileImageVariants || ['/profile.jpg', '/profile.png', '/profile.webp'];

    if (nextIndex < variants.length) {
      setVariantIndex(nextIndex);
      setImageSrc(variants[nextIndex]);
    } else {
      setIsImageError(true);
      setIsImageLoaded(true);
    }
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
    setIsImageError(false);
  };

  // Mouse 3D Tilt & Parallax Handler (Capped at 5° - 8° Max Tilt)
  const handleMouseMove = (e) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-6 to +6 degrees max)
    const rotateY = ((x - centerX) / centerX) * 6.5;
    const rotateX = -((y - centerY) / centerY) * 6.5;

    // Mouse glow spot inside card (0-100%)
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glowX, glowY });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0, glowX: 50, glowY: 50 });
  };

  return (
    <>
      <div
        className={`profile-photo-wrapper ${isLoadedAnim ? 'anim-loaded' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => !isImageError && setIsModalOpen(true)}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && !isImageError) {
            e.preventDefault();
            setIsModalOpen(true);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label="View Suhas N R Acharya's Fullscreen Profile Photo"
      >
        {/* Animated Particles background settling around frame */}
        <div className="settling-particles-container" aria-hidden="true">
          <span className="p-dot p1"></span>
          <span className="p-dot p2"></span>
          <span className="p-dot p3"></span>
          <span className="p-dot p4"></span>
        </div>

        {/* 3D Perspective Card Container */}
        <div
          ref={frameRef}
          className="portrait-card-frame"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
            transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
          }}
        >
          {/* Dynamic Follow-Cursor Radial Glow Spot */}
          <div
            className="cursor-glow-layer"
            style={{
              background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(56, 189, 248, 0.25) 0%, rgba(99, 102, 241, 0.08) 45%, transparent 70%)`
            }}
          />

          {/* Thin Animated SVG Border */}
          <svg className="svg-border-frame" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect
              x="1"
              y="1"
              width="98"
              height="98"
              rx="9"
              ry="9"
              className="animated-border-rect"
            />
          </svg>

          {/* Decorative Technical Edge Labels */}
          <div className="tech-label tech-label-top-left" style={{ transform: `translateZ(20px)` }}>
            <Code size={11} className="label-icon" />
            <span>{portfolio.personal.codeTag}</span>
          </div>

          <div className="tech-label tech-label-top-right" style={{ transform: `translateZ(20px)` }}>
            <Terminal size={11} className="label-icon" />
            <span>{portfolio.personal.batch}</span>
          </div>

          <div className="tech-label tech-label-bottom" style={{ transform: `translateZ(25px)` }}>
            <Sparkles size={11} className="label-icon" />
            <span>{portfolio.personal.tagline}</span>
          </div>

          {/* Interactive Floating Hover Badges */}
          <div className={`floating-badge badge-top-left ${isHovered ? 'badge-visible' : ''}`}>
            <span className="badge-pulse" />
            CS ENGINEER
          </div>

          <div className={`floating-badge badge-bottom-right ${isHovered ? 'badge-visible' : ''}`}>
            <span className="badge-spark" />
            AI × FULL STACK
          </div>

          {/* Image Container with Parallax Effect */}
          <div
            className="portrait-image-inner"
            style={{
              transform: `translateZ(15px) scale(${isHovered ? 1.05 : 1})`,
              transition: 'transform 0.4s ease-out'
            }}
          >
            {!isImageError ? (
              <img
                src={imageSrc}
                alt={portfolio.personal.name}
                className={`portrait-img ${isImageLoaded ? 'img-sharp' : 'img-blurred'}`}
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            ) : (
              /* Fallback Placeholder when image is missing */
              <div className="portrait-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-icon-wrap">
                    <Camera size={38} className="camera-icon" />
                  </div>
                  <h3 className="placeholder-title">ADD PROFILE PHOTO</h3>
                  <div className="placeholder-dev-note">
                    <AlertCircle size={13} className="note-alert" />
                    <span>
                      Place your photo at:<br />
                      <code>public/profile.jpg</code>
                    </span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Glass Overlay Shader */}
            <div className="portrait-glass-shader" />
          </div>

          {/* Subtle Corner Markers */}
          <div className="corner-bracket top-l"></div>
          <div className="corner-bracket top-r"></div>
          <div className="corner-bracket bot-l"></div>
          <div className="corner-bracket bot-r"></div>
        </div>
      </div>

      {/* Fullscreen Photo Modal */}
      {!isImageError && (
        <PhotoModal
          isOpen={isModalOpen}
          imageSrc={imageSrc}
          name={portfolio.personal.name}
          title={portfolio.personal.title}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};
