import React from 'react';
import './Header.css';

import Navigation from '../Navigation/Navigation';
import promoLogo from '../../images/header-logo.svg';


function Header({ loggedInHeader }) {


  const headerClass = loggedInHeader ? 'header header__auth' : 'header' ;

  return (
    <>
      <header className={`header-main ${loggedInHeader && 'header-main__black'}`}>
        <div className='section-container'>
          <div className={headerClass}>          
            <a href='/'>
              <img src={promoLogo} alt="Логотип меню" className="header__logo"/>
            </a>
            <Navigation
              loggedInHeader={loggedInHeader}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;