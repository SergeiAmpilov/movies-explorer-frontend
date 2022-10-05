import React from 'react';

import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';




function SavedMovies({ favMovieList, handleMovieRemove }) {

  /*
  const cardList = [
    {
      image: {
        url: '/uploads/552242179_1280x720_66bc43b289.jpeg'
      },
      nameRU: '33 слова о дизайне',
      duration: 61,
      id: 1,
    },
    {
      image: { url: '/uploads/552242179_1280x720_66bc43b289.jpeg' },
      nameRU: '33 слова о дизайне 33 слова о дизайне 33 слова о дизайне 33 слова о дизайне',
      duration: 161,
      id: 2,
    },
    {
      image: { url: '/uploads/552242179_1280x720_66bc43b289.jpeg' },
      nameRU: '34 слова о дизайне',
      duration: 21,
      id: 3,
    },
    {
      image: { url: '/uploads/552242179_1280x720_66bc43b289.jpeg' },
      nameRU: '33 слова о дизайне',
      duration: 61,
      id: 4,
    },
    {
      image: { url: '/uploads/552242179_1280x720_66bc43b289.jpeg' },
      nameRU: '33 слова о дизайне',
      duration: 61,
      id: 5,
    },
    {
      image: { url: '/uploads/552242179_1280x720_66bc43b289.jpeg' },
      nameRU: '34 слова о дизайне',
      duration: 61,
      id: 6,
    },
  ];
  */

  const showPreloader = () => { console.log('showPreloader')};
  const hidePreloader = () => { console.log('hidePreloader')};
  const showEmptyQuery = () => { console.log('showEmptyQuery')};
  
  return (
      <main className='movies saved-movies'>
        <SearchForm 
          showPreloader={showPreloader}
          hidePreloader={hidePreloader}
          showEmptyQuery={showEmptyQuery}
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