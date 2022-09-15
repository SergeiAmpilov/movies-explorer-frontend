import React from 'react';

import './Navigation.css';

function Navigation({ loggedIn }) {
  return (
    <div className='navigation'>
      {/* <nav className='navigation__main'>
        <a className='navigation__main-link' href='#'>Фильмы</a>
        <a className='navigation__main-link' href='#'>Сохраненные фильмы</a>
      </nav> */}
      
      { !loggedIn && (<nav className='navigation__auth'>
        <a className='navigation__auth-link' href='#'>Регистрация</a>
        <a className='navigation__auth-link navigation__green-link' href='#'>Войти</a>
      </nav>) }
    </div>
  );
}

export default Navigation;