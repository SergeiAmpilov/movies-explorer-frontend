import React from 'react';

import './Movies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';



function Movies() {
  return (
    <section className='movies'>
        <Header loggedIn={true} />
        <SearchForm />
        <Preloader />
        <MoviesCardList isSaved={false} />
        <Footer />
    </section>
      
    

  );
}

export default Movies;
