import React from 'react';

import './PopupMenu.css';
import accLogo from '../../images/acc-icon.svg';


function PopupMenu({ isVisible, handleBurger }) {

  return (
    <div className={`popup ${isVisible ? 'popup_visible' : '' }`}>
      <div className="popup__background">
      </div>
      <div className="popup__container">
        <button
          className='popup__close-button'
          onClick={handleBurger}>
        </button>
        <nav className='popup__navigation'>
          <div className='popup__menu-item'>
            <a href="/"
                className='navigation__link'>
                  Главная
            </a>
          </div>
          <div className='popup__menu-item'>
            <a href="/movies"
                className='navigation__link navigation__link_active'>
                  Фильмы
            </a>
          </div>
          <div className='popup__menu-item'>
            <a href="/saved-movies"
                className='navigation__link'>
                  Сохраненные фильмы
            </a>
          </div>
          <div className='popup__menu-item'>
            <a href="/profile"
                className='navigation__link navigation__link_account navigation__link_account-visible '>
                  <img
                    src={accLogo}
                    className='navigation__link_account-logo'
                    alt='Логотип пользовательского аккаунта'
                  />
                  Аккаунт
            </a>
          </div>






        </nav>

      </div>
    </div>
  );
}


export default PopupMenu;
