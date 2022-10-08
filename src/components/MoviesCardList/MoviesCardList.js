import React from 'react';

import './MoviesCardList.css';

import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import api from '../../utils/api';

import { PAGINATION_CONFIG } from '../../utils/constants.js';


function MoviesCardList({
  isSaved,
  isPreloaderVisible = false,
  movieCardList = [],
  handleMovieAdd,
  handleMovieRemove
 }) {

  const [rowCount, setRowCount] = React.useState(0);
  const [displayMovieList, setDisplayMovieList] = React.useState([]);
  const [showMoreDisabled, setShowMoreDisabled] = React.useState(false);
  const [actualPagination, setActualPagination] = React.useState(PAGINATION_CONFIG['1280']);

  const renderCardListByRows = () => {
    return movieCardList.slice(0, actualPagination.cardsInRow * rowCount)
            .map( card => <MoviesCard 
              image={isSaved ? card.image : `${api.getSiteUrl()}${card.image.url}`}
              key={card.id}
              title={card.nameRU}
              duration={card.duration}
              isSaved={isSaved}
              movieId={card.id} /* это id в стороннем сервисе */
              nameRU={card.nameRU}
              nameEN={card.nameEN}
              thumbnail={isSaved ? card.thumbnail : `${api.getSiteUrl()}${card.image.url}`}
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
  }

  const getActualPagination = () => {
    const clientWidth = document.documentElement.clientWidth;

    if (clientWidth >= PAGINATION_CONFIG['1280'].pixelWidth) {
      return PAGINATION_CONFIG['1280'];
    } else if (clientWidth <= PAGINATION_CONFIG['600'].pixelWidth) {
      return PAGINATION_CONFIG['600'];
    }

    return PAGINATION_CONFIG['768'];
  }

  const handlerResize = () => {
    setActualPagination(getActualPagination()); 
  }



  const handleClickMore = () => {
    if (movieCardList.length <= actualPagination.cardsInRow * rowCount) {
      return ;
    }

    setRowCount(rowCount + actualPagination.step);
  }

  /* при первом открытии определим, можем ли мы вывести хотя бы одну строку */
  React.useEffect(() => {
    setActualPagination(getActualPagination()); 
    setRowCount(actualPagination.rows);
    setDisplayMovieList(renderCardListByRows());

    window.addEventListener('resize', handlerResize);

    return () => {
      window.removeEventListener('resize', handlerResize);
    }
  }, []);

  /* при изменении отображаемого числа строк перерассчитываем список отображаемых фильмов */
  React.useEffect(() => {
    setDisplayMovieList(renderCardListByRows());
  }, [rowCount, movieCardList]);

  // отключение кнопки Еще
  React.useEffect(() => {
    setShowMoreDisabled(movieCardList.length <= displayMovieList.length);
  }, [movieCardList, displayMovieList]);

  return isPreloaderVisible
    ? (
    <section className='cards-section'>
      <Preloader />
    </section>)
    : (
    <section className='cards-section'>
      <ul className="card-list"> {/* вот здесь еще нужно докуинуть класс, который соответствует ширине экрана и гриду */}
          { displayMovieList }
      </ul>
      { !isSaved &&
      (<div className='cards-section__navigation'>
        { !showMoreDisabled && <button
          type='button'
          className={`cards-section__button ${showMoreDisabled ? 'cards-section__button_disabled' : ''}`}
          onClick={handleClickMore}
          >Ещё</button> }
      </div>)}      
    </section>
  );
}

export default MoviesCardList;
