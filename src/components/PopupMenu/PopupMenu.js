import React from 'react';

import './PopupMenu.css';
import accLogo from '../../images/acc-icon.svg';


function PopupMenu({ isVisible, handleBurger }) {

  return (
    <div className={`popup ${isVisible ? 'popup_visible' : '' }`}>
      <div className="popup__background">
      </div>
      <div className="popup__container">
        <button onClick={handleBurger}>Закрыть</button>
        <a href="/"
            className='navigation__link navigation__link_movie'>
              Главная
        </a>
        <a href="/movies"
            className='navigation__link navigation__link_movie navigation__link_active'>
              Фильмы
        </a>
        <a href="/saved-movies"
            className='navigation__link navigation__link_movie'>
              Сохраненные фильмы
        </a>
        <a href="/profile"
            className='navigation__link navigation__link_account navigation__link_account-visible '>
              <img src={accLogo} className='navigation__link_account-logo'/>
              Аккаунт
        </a>

      </div>
    </div>
  );
}


export default PopupMenu;
