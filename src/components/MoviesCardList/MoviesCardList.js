import React from 'react';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

import api from '../../utils/api';



function MoviesCardList({
  isSaved,
  isPreloaderVisible = false,
  movieCardList = [],
  handleMovieAdd,
  handleMovieRemove
 }) {


  const cardsElements = movieCardList.map( card => <MoviesCard 
    image={card.image}
    key={card.id}
    title={card.nameRU}
    duration={card.duration}
    isSaved={isSaved}
    movieId={card.id} /* это id в стороннем сервисе */
    nameRU={card.nameRU}
    nameEN={card.nameEN}
    thumbnail={card.thumbnail}
    trailerLink={card.trailerLink}
    description={card.description}
    year={card.year}
    director={card.director}
    country={card.country}
    handleMovieAdd={handleMovieAdd}
    handleMovieRemove={handleMovieRemove}
    isFavourite={ card._id } /* признак того, что данная карточка уже находится в списке сохраненных */
    _id={ card._id } /* id карточки в базе данных сервиса, либо false если это не фаворит */
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
