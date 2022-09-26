import React from 'react';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';



function MoviesCardList({ isSaved, isPreloaderVisible = false, movieCardList = [] }) {

  const cardList = [
    {
      img: 'https://images.unsplash.com/photo-1662499840292-0805bbc95005?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      title: '33 слова о дизайне',
      duration: 61,
      _id: 1,
    },
    {
      img: 'https://images.unsplash.com/photo-1662499840292-0805bbc95005?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      title: '33 слова о дизайне 33 слова о дизайне 33 слова о дизайне 33 слова о дизайне',
      duration: 161,
      _id: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1663431262170-b94c02b712cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      title: '34 слова о дизайне',
      duration: 21,
      _id: 3,
    },
    {
      img: 'https://images.unsplash.com/photo-1662499840292-0805bbc95005?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      title: '33 слова о дизайне',
      duration: 61,
      _id: 4,
    },
    {
      img: 'https://images.unsplash.com/photo-1662499840292-0805bbc95005?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      title: '33 слова о дизайне',
      duration: 61,
      _id: 5,
    },
    {
      img: 'https://images.unsplash.com/photo-1663431262170-b94c02b712cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      title: '34 слова о дизайне',
      duration: 61,
      _id: 6,
    },

  ];

  const cardsElements = cardList.map( card => <MoviesCard 
    img={card.img}
    key={card._id}
    title={card.title}
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
