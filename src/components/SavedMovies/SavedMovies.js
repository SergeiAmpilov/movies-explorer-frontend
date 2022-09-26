import React from 'react';

import './SavedMovies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';




function SavedMovies({ handleBurger }) {

  const showPreloader = () => { console.log('showPreloader')};
  const hidePreloader = () => { console.log('hidePreloader')};
  const showEmptyQuery = () => { console.log('showEmptyQuery')};
  return (
    <section className='movies saved-movies'>
        <Header loggedIn={true} handleBurger={handleBurger} />
        <SearchForm 
          showPreloader={showPreloader}
          hidePreloader={hidePreloader}
          showEmptyQuery={showEmptyQuery}
        />
        <MoviesCardList isSaved={true} />
        <Footer />
    </section>
  );
}

export default SavedMovies;