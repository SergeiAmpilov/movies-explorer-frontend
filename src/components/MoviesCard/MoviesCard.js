import React from 'react';

import './MoviesCard.css';

function MoviesCard({img, title, duration, isSaved}) {

  let buttonClass;
  const isFavourite = true;
  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;
  const durationText = (hours ? `${hours}ч` : '') + `${minutes}м`;

  if (isSaved) {
    buttonClass = 'card__favourite-button_isSaved';
  } else {
    buttonClass = isFavourite ? 'card__favourite-button_isfav' : 'card__favourite-button_notfav';    
  }

  return(
    <li className='card'>
      <img src={img} className='card__img' alt={`Фильм ${title}`}/>
      <div className='card__container'>
        <div className='card__title-group'>
          <p className='card__title'>{title}</p>
          <button type='button' className={`card__favourite-button ${buttonClass}`}></button>
        </div>      
        <p className='card__duration'>{durationText}</p>
      </div>
    </li>
  );
}

export default MoviesCard;