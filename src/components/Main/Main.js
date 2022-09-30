import React from 'react';

import './Main.css';

import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';




function Main({ handleDebug }) {

  return (
    <>
      <Header
        loggedIn={false}
      />
      <button
        onClick={ (evt) => {evt.preventDefault(); handleDebug(); }}
        type='button'>Debug</button>
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;