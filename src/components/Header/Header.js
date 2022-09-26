import React from 'react';
import './Header.css';

import Navigation from '../Navigation/Navigation';
import promoLogo from '../../images/header-logo.svg';


function Header({ loggedIn, handleBurger }) {
  const headerClass = loggedIn ? 'header header__auth' : 'header' ;
  return (
    <header className={headerClass}>
      <a href='/'>
        <img src={promoLogo} alt="Логотип меню" className="header__logo"/>
      </a>
      <Navigation
        loggedIn={loggedIn}
        handleBurger={handleBurger}
      />
    </header>
  );
}

export default Header;