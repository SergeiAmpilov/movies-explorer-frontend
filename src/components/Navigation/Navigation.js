import React from 'react';
// import { Link, NavLink } from 'react-router-dom'; 

import './Navigation.css';
import accLogo from '../../images/acc-icon.svg';


function Navigation({ loggedIn, handleBurger }) {
  return (
    <>
      { loggedIn ? (
        <nav className='navigation'>
          <div className='navigation__group_film'>
            <a 
              href="/movies"
              className='navigation__link navigation__link_movie navigation__link_active'>Фильмы</a>
            {/* <NavLink
              to="/movies"
              className='navigation__link navigation__link_movie'
              activeClassName="navigation__link_active">
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className='navigation__link navigation__link_movie'
              activeClassName="navigation__link_active">
              Сохраненные фильмы
            </NavLink> */}
            <a
              href="/saved-movies"
              className='navigation__link navigation__link_movie'>
                Сохраненные фильмы
            </a>
          </div>
          
          <div>
            {/* <Link
              to="/profile"
              className='navigation__link navigation__link_account'>
              <img src={accLogo} className='navigation__link_account-logo'/>
              Аккаунт
            </Link> */}
            <a
              href="/profile"
              className='navigation__link navigation__link_account'>
                <img src={accLogo} className='navigation__link_account-logo'/>
                Аккаунт
            </a>
          </div>
          <button type='button' className='navigation__burger-button' onClick={handleBurger}></button>
        </nav>
      ) :      
      (
        <nav className='navigation__auth'>
          <a className='navigation__link navigation__link_auth' href='/signup'>Регистрация</a>
          <a className='navigation__link navigation__link_auth navigation__green-link' href='/signin'>Войти</a>
        </nav>
      )}
    </>
  );
}

export default Navigation;