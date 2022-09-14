import React from 'react';
import './Header.css';

import Navigation from '../Navigation/Navigation';
import promoLogo from '../../images/header-logo.svg';


function Header() {
  return (
    <header className='header'>
      <img src={promoLogo} alt="Логотип меню" className="header__logo"/>     
      <Navigation />
    </header>
  );
}

export default Header;