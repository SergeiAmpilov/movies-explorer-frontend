import React from 'react';

import './Popup.css';



function Popup({ text, isOpen, onClose }) {
  return (
    <section className={`popup-alert ${isOpen ? 'popup-alert_opened' : ''}`} onClick={onClose}>
      <div className="popup-alert__container" onClick={e => {
        e.stopPropagation();
      }}>
        <p className="popup-alert__text">{text}</p>
        <button className="popup-alert__close" type="button" onClick={onClose} />
      </div>
  </section>
  );
}

export default Popup;