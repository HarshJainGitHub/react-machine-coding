import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  // Close on Escape Key
  // useEffect(() => {
  //   const handleEsc = (e) => {
  //     if (e.key === 'Escape') onClose();
  //   };
  //   window.addEventListener('keydown', handleEsc);
  //   return () => window.removeEventListener('keydown', handleEsc);
  // }, [onClose]);

  // // Prevent background scrolling
  // useEffect(() => {
  //     document.body.style.overflow = 'hidden'; 
  //     return () => document.body.style.overflow = 'unset';
  // }, []);

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      {/* stopPropagation prevents clicking the modal content from closing it */}
      <div 
        className="modal-container" 
        role="dialog" 
        aria-modal="true"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="modal-header">
          <h2>{title}</h2>
          <button onClick={onClose} className="close-btn">&times;</button>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('portal-root') // This div must exist in your index.html
  );
};

export default Modal;