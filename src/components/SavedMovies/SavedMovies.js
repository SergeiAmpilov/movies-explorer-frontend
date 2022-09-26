import React from 'react';

import './SavedMovies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';




function SavedMovies({ handleBurger }) {
  return (
    <section className='movies saved-movies'>
        <Header loggedIn={true} handleBurger={handleBurger} />
        <SearchForm />
        <MoviesCardList isSaved={true} />
        <Footer />
    </section>
  );
}

export default SavedMovies;