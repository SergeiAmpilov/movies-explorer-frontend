import React from 'react';

import './Navigation.css';

function Navigation() {
  return (
    <div className='navigation'>
      {/* <nav className='navigation__main'>
        <a className='navigation__main-link' href='#'>Фильмы</a>
        <a className='navigation__main-link' href='#'>Сохраненные фильмы</a>
      </nav> */}
      <nav className='navigation__auth'>
        <a className='navigation__auth-link' href='#'>Регистрация</a>
        <a className='navigation__auth-link navigation__green-link' href='#'>Войти</a>
        <a className='navigation__auth-link navigation__account-link' href='#'>Аккаунт</a>
      </nav>
    </div>
  );
}

export default Navigation;