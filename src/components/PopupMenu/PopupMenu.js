import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 


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
            <NavLink
              to='/'
              className='navigation__link'
              activeClassName='navigation__link_active'>
                Главная
            </NavLink>
          </div>
          <div className='popup__menu-item'>
            <NavLink
              to='/movies'
              className='navigation__link'
              activeClassName='navigation__link_active'>
                Фильмы
            </NavLink>
          </div>
          <div className='popup__menu-item'>
            <NavLink
              to='/saved-movies'
              className='navigation__link'
              activeClassName='navigation__link_active'>
                Сохраненные фильмы
            </NavLink>
          </div>
          <div className='popup__menu-item'>
            <Link
              to='/profile'
              className='navigation__link navigation__link_account navigation__link_account-visible'
              >
                <img
                  src={accLogo}
                  className='navigation__link_account-logo'
                  alt='Логотип пользовательского аккаунта'
                />
                Аккаунт
              </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}


export default PopupMenu;
