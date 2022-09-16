import React from 'react';

import './Navigation.css';
import accLogo from '../../images/acc-icon.svg';


function Navigation({ loggedIn }) {
  return (
    
    <>
      { loggedIn && (
        <nav className='navigation'>
          <div classname='navigation__group_film'>
            <a className='navigation__link navigation__link_movie' href='#'>Фильмы</a>
            <a className='navigation__link navigation__link_movie' href='#'>Сохраненные фильмы</a>
          </div>
          
          <div className='navigation__group_account'>
            <img src={accLogo} />
            <a className='navigation__link navigation__link_account' href='#'>Аккаунт</a>
          </div>
        </nav>
      )}
      
      { !loggedIn && (
        <nav className='navigation__auth'>
          <a className='navigation__link navigation__link_auth' href='#'>Регистрация</a>
          <a className='navigation__link navigation__link_auth navigation__green-link' href='#'>Войти</a>
        </nav>
      )}
    </>
  );
}

export default Navigation;