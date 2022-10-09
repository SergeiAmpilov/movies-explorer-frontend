import React from 'react';

import './MoviesCard.css';

function MoviesCard({
  image,
  title,
  duration,
  isSaved, /* признак того, что это страница с сохраненными ильмами */
  movieId,
  nameRU,
  nameEN,
  thumbnail,
  trailerLink,
  description,
  year,
  director,
  country,
  handleMovieAdd,
  handleMovieRemove,
  isFavourite,
  _id /* id фильма в нашей базе данных если он фаворит */
  }) {

  const [isCardFavourite, setIsCardFavourite] = React.useState(isFavourite);
  // const [idDb, setIdDb] = React.useState(_id);

  let buttonClass;
  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;
  const durationText = (hours ? `${hours}ч` : '') + `${minutes}м`;

  if (isSaved) {
    buttonClass = 'card__favourite-button_isSaved';
  } else {
    buttonClass = isCardFavourite ? 'card__favourite-button_isfav' : 'card__favourite-button_notfav';    
  }



  const handleButtonToggle = () => {



    if (isCardFavourite) {
      handleMovieRemove(_id);
    } else {
      handleMovieAdd({
        nameRU,
        nameEN,
        movieId,
        thumbnail,
        trailerLink,
        image,
        description,
        year,
        duration,
        director,
        country,
      })
    }
    setIsCardFavourite(!isCardFavourite);
  }

  return (isSaved && isCardFavourite) || !isSaved ? (
    <li className='card'>
      <a href={trailerLink} target='_blank' rel="noreferrer">
        <img src={image} className='card__img' alt={`Фильм ${title}`}/>
      </a>
      <div className='card__container'>
        <div className='card__title-group'>
          <p className='card__title'>{title}</p>
          <button
            type='button'
            className={`card__favourite-button ${buttonClass}`}
            onClick={() => {
              handleButtonToggle();
            }}
          />
        </div>      
        <p className='card__duration'>{durationText}</p>
      </div>
    </li>) : (<></>) ;
}

export default MoviesCard;