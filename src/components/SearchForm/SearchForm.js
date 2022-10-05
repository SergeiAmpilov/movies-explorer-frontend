import React from 'react';

import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import breakIcon from '../../images/vertical-break-icon.svg';
import api from '../../utils/api';

import { getFavMovie } from '../../utils/functions.js';


function SearchForm({ 
  showPreloader,
  hidePreloader,
  setIsEmptyQuery,
  setMovieCardList,
  favMovieList
}) {
  
  const [searchShorts, setSearchShorts] = React.useState(true);
  const [query, setQuery] = React.useState('');


  const handlecClickSearchShorts = () => {
    setSearchShorts(!searchShorts);
  };

  const handleQueryInput = (evt) => {
    setQuery(evt.target.value)
  };

  const handleSubmitSearch = (evt) => {

    evt.preventDefault();
    if (query.trim() === '') {
      setIsEmptyQuery({
        value: true,
        message: 'Вы ничего не ввели в поисковую строку.'
      });
      return ;
    } else {
      setIsEmptyQuery(false);
    }

    showPreloader();

    api.getFilms()
      .then( (result) => {
        const listFiltered = result.filter( (item) => item.nameRU !== ''
          && item.nameRU.toLowerCase().indexOf(query.toLowerCase()) !== -1);
        if (listFiltered.length === 0) {
          setIsEmptyQuery({
            value: true,
            message: `По вашему запросу "${query}" не найдено подходящих фильмов`
          });
        }
        // по идее, тут нужно все фильмы распарсить, и дополнить данными
        // thumbnail, _id, isFav
        listFiltered.map( movie => {
          let thisMovieInFavlist = getFavMovie(favMovieList, movie.id);          
          movie.thumbnail = `${api.getSiteUrl()}${movie.image.formats.thumbnail.url}`;
          movie._id = thisMovieInFavlist ? thisMovieInFavlist._id : false;
          return movie;
        })

        console.log('listFiltered to add', listFiltered);
        
        setMovieCardList(listFiltered);
    })
    .catch((err) => {
      console.log(`Ошибка.....: ${err}`);
      setIsEmptyQuery({
        value: true,
        message: 'Произошла ошибка на сервере'
      });

    })
    .finally( () => hidePreloader() );
  }

  const searchShortsButtonClassName = `${searchShorts ? 'search-form__shorts-button_enabled' : 'search-form__shorts-button_disabled'}`;
  
  return (
    <div className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmitSearch}>
        <img src={searchIcon} alt="Иконка поиска" className="search-form__search-icon"/>
        <label className='search-form__group-small'>
          <input placeholder='Фильм' className='search-form__input' onInput={handleQueryInput} required></input>
          <button type='submit' className='search-form__search-button'></button>
        </label>
        <img src={breakIcon} alt="Иконка разделитель" className="search-form__break_icon"/>
        <div className='search-form__shorts-group'>
          <button
            type='button'
            onClick={handlecClickSearchShorts}
            className={`search-form__shorts-button ${searchShortsButtonClassName}`}
            ></button>
          <label htmlFor='shorts' className='search-form__label'>Короткометражки</label>        
        </div>
      </form>
    </div>
  );
}

export default SearchForm;