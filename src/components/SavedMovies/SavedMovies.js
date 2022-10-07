import React from 'react';

import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';




function SavedMovies({ favMovieList, handleMovieRemove }) {

  const showPreloader = () => { console.log('showPreloader')};
  const hidePreloader = () => { console.log('hidePreloader')};
  const showEmptyQuery = () => { console.log('showEmptyQuery')};
  
  return (
      <main className='movies saved-movies'>
        <SearchForm 
          showPreloader={showPreloader}
          hidePreloader={hidePreloader}
          showEmptyQuery={showEmptyQuery}
          favMovieList={favMovieList}
          isSavedMovies={true}
        />
        <MoviesCardList
          isSaved={true}
          movieCardList={favMovieList}
          handleMovieRemove={handleMovieRemove}
        />
      </main>
  );
}

export default SavedMovies;