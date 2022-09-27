import React from 'react';
// import { Link, NavLink } from 'react-router-dom'; 

import './Navigation.css';
import accLogo from '../../images/acc-icon.svg';
import PopupMenu from '../PopupMenu/PopupMenu';



function Navigation({ loggedIn }) {
  const [isPopupVisible, setIsPopupVisible ] = React.useState(false);

  const handleBurgerOpen = () => setIsPopupVisible(!isPopupVisible);


  return (
    <>
      { loggedIn ? (
        <nav className='navigation'>
          <div className='navigation__group_film'>
            <a 
              href="/movies"
              className='navigation__link navigation__link_movie navigation__link_active'>Фильмы</a>
            <a
              href="/saved-movies"
              className='navigation__link navigation__link_movie'>
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