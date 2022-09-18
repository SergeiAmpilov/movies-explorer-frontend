import React from 'react';

import './SavedMovies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';




function SavedMovies({img, title, duration}) {
  return (
    <section className='movies saved-movies'>
        <Header loggedIn={true} />
        <SearchForm />
        <MoviesCardList isSaved={true} />
        <Footer />
    </section>
  );
}

export default SavedMovies;