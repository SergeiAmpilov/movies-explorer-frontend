import React from 'react';

import './Promo.css';
import NavTab from '../NavTab/NavTab';
import Header from '../Header/Header';

import promoLogo from '../../images/logo.svg';


function Promo() {
  return (
      <div className='promo'>
        <Header />
        <div className='promo__description'>
          <div className='promo__text-content'>
            <h1 className='section-maintext promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
            <p className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          </div>          
          <img src={promoLogo} alt="Логотип" className="promo__logo"/>
        </div>
        <NavTab />
      </div>    
  );
}

export default Promo;