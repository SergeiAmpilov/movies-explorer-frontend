import React from 'react';
import './Header.css';

import Navigation from '../Navigation/Navigation';
import promoLogo from '../../images/header-logo.svg';


function Header({ loggedIn }) {
  const headerClass = loggedIn ? 'header header__auth' : 'header' ;
  return (
    <header className={headerClass}>
      <img src={promoLogo} alt="Логотип меню" className="header__logo"/>     
      <Navigation
        loggedIn={loggedIn}
      />
    </header>
  );
}

export default Header;