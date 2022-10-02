import React from 'react';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

import api from '../../utils/api';



function MoviesCardList({
  isSaved,
  isPreloaderVisible = false,
  movieCardList = [],
  handleMovieAdd }) {

  const cardsElements = movieCardList.map( card => <MoviesCard 
    image={`${api.getSiteUrl()}${card.image.url}`}
    key={card.id}
    title={card.nameRU}
    duration={card.duration}
    isSaved={isSaved}
    movieId={card.id} /* это id в стороннем сервисе */
    nameRU={card.nameRU}
    nameEN={card.nameEN}
    thumbnail={card.image.formats.thumbnail.url}
    trailerLink={card.trailerLink}
    description={card.description}
    year={card.year}
    director={card.director}
    country={card.country}
    handleMovieAdd={handleMovieAdd}
  /> );

  return isPreloaderVisible
    ? (
    <section className='cards-section'>
      <Preloader />
    </section>)
    : (
    <section className='cards-section'>
      <ul className="card-list">
          { cardsElements }
      </ul>
      { !isSaved &&
      (<div className='cards-section__navigation'>
        <button type='button' className='cards-section__button'>Ещё</button>
      </div>)}      
    </section>
  );
}

export default MoviesCardList;
