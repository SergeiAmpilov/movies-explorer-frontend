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

  const step = 4; /* количество карточек в строке */

  const [rowCount, setRowCount] = React.useState(2);
  const [displayMovieList, setDisplayMovieList] = React.useState([]);
  const [showMoreDisabled, setShowMoreDisabled] = React.useState(false);

  const renderCardListByRows = () => {
    return movieCardList.slice(0, step * rowCount)
            .map( card => <MoviesCard 
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
  }



  const handleClickMore = () => {
    if (movieCardList.length <= step * rowCount) {
      return ;
    }

    setRowCount(rowCount + 1);
  }

  /* при первом открытии определим, можем ли мы вывести хотя бы одну строку */
  React.useEffect(() => {
    setRowCount(2);
    setDisplayMovieList(renderCardListByRows());
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
      <ul className="card-list">
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
