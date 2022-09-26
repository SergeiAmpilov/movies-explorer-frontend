import React from 'react';

import './PopupMenu.css';


function PopupMenu({ isVisible }) {

  return (
    <div className={`popup ${isVisible ? 'popup_visible' : '' }`}>
      <div className="popup__background">
      </div>
      <div className="popup__container">


      </div>
    </div>
  );
}


export default PopupMenu;
