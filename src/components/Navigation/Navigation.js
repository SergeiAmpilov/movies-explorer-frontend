import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 

import './Navigation.css';
import accLogo from '../../images/acc-icon.svg';
import PopupMenu from '../PopupMenu/PopupMenu';



function Navigation({ loggedInHeader }) {
  const [isPopupVisible, setIsPopupVisible ] = React.useState(false);

  const handleBurgerOpen = () => setIsPopupVisible(!isPopupVisible);
  const activeClassNameMovies = window.location.pathname ==='/movies' ? 'navigation__link_active' : '';
  const activeClassNameSavedMovies = window.location.pathname ==='/saved-movies' ? 'navigation__link_active' : '';


  return (
    <>
      { loggedInHeader ? (
        <nav className='navigation'>
          <div className='navigation__group_film'>
            <a 
              href="/movies"
              className={`navigation__link navigation__link_movie ${activeClassNameMovies}`}>
                Фильмы
            </a>
            <a
              href="/saved-movies"
              className={`navigation__link navigation__link_movie ${activeClassNameSavedMovies}`}>
                Сохраненные фильмы
            </a>
          </div>          
          <div>
            <a
              href="/profile"
              className='navigation__link navigation__link_account'>
                <img
                  src={accLogo}
                  className='navigation__link_account-logo'
                  alt='Логотип пользовательского аккаунта'
                />
                Аккаунт
            </a>
          </div>
          <button type='button' className='navigation__burger-button' onClick={handleBurgerOpen}></button>
        </nav>
      ) :      
      (
        <nav className='navigation__auth'>
          <a className='navigation__link navigation__link_auth' href='/signup'>Регистрация</a>
          <a className='navigation__link navigation__link_auth navigation__green-link' href='/signin'>Войти</a>
        </nav>
      )}
      <PopupMenu
        isVisible={isPopupVisible}
        handleBurger={handleBurgerOpen}
      />

    </>
  );
}

export default Navigation;