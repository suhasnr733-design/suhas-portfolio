import React, { useEffect } from 'react';
import { X, UserCheck, ShieldCheck } from 'lucide-react';

export const PhotoModal = ({ isOpen, imageSrc, name, title, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="photo-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${name} Profile Preview`}
    >
      <div className="photo-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* ESC - CLOSE indicator badge */}
        <div className="modal-esc-badge" onClick={onClose} title="Close Preview">
          <span className="esc-key">ESC</span> — CLOSE
          <X size={14} className="close-icon" />
        </div>

        {/* Modal Image Frame */}
        <div className="photo-modal-card">
          <div className="modal-image-wrapper">
            <img
              src={imageSrc}
              alt={name}
              className="modal-portrait-img"
            />
            <div className="modal-gradient-overlay" />
          </div>

          <div className="modal-info-footer">
            <div className="modal-user-identity">
              <span className="modal-name">{name}</span>
              <span className="modal-title">{title}</span>
            </div>
            <div className="modal-badge-verified">
              <ShieldCheck size={16} /> VERIFIED IDENTITY
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
