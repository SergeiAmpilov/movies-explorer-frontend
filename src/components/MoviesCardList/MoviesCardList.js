import React from 'react';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

import api from '../../utils/api';



function MoviesCardList({ isSaved, isPreloaderVisible = false, movieCardList = [] }) {

  const cardsElements = movieCardList.map( card => <MoviesCard 
    img={`${api.getSiteUrl()}${card.image.url}`}
    key={card.id}
    title={card.nameRU}
    duration={card.duration}
    isSaved={isSaved}
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
