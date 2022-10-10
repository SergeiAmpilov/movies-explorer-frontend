import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

import Navigation from '../Navigation/Navigation';
import promoLogo from '../../images/header-logo.svg';


function Header({ loggedIn }) {

  const location = useLocation();


  const headerClass = loggedIn ? 'header header__auth' : 'header' ;

  return (
    <>
      <header className={`header-main ${location.pathname !== '/' && 'header-main__black'}`}>
        <div className='section-container'>
          <div className={headerClass}>
            <Link to='/'>
              <img src={promoLogo} alt="Логотип меню" className="header__logo"/>
            </Link>
            <Navigation
              loggedInHeader={loggedIn}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;