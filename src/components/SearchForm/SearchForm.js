import React from 'react';

import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import breakIcon from '../../images/vertical-break-icon.svg';
import api from '../../utils/api';

import { getFavMovie } from '../../utils/functions.js';
import { SHORTS_MOVIE_LENGTH } from '../../utils/constants.js';


function SearchForm({ 
  showPreloader,
  hidePreloader,
  setIsEmptyQuery,
  setMovieCardList,
  favMovieList,
  moviesBeatFilm=[],
  isSavedMovies=true,
}) {
  
  const [searchShorts, setSearchShorts] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const [showErrorEmptyQuery, setShowErrorEmptyQuery] = React.useState(false);


  const handlecClickSearchShorts = () => {
    setSearchShorts(!searchShorts);
  };

  const handleQueryInput = (evt) => {
    const inputValue = evt.target.value;
    setQuery(inputValue);
    if (inputValue.trim() !== '') {
      setShowErrorEmptyQuery(false);      
    }
  };

  const handleSubmitSearch = (evt) => {

    evt.preventDefault();
    if (query.trim() === '') {

      setIsEmptyQuery({
        value: true,
        message: 'Вы ничего не ввели в поисковую строку.'
      });

      setShowErrorEmptyQuery(true);
      return ;
    } else {
      setIsEmptyQuery(false);
    }

    ////
    showPreloader();

    let srcMovieList = isSavedMovies ? favMovieList : moviesBeatFilm;

    let listFiltered = srcMovieList.filter( (item) => {
      if (searchShorts && item.duration > SHORTS_MOVIE_LENGTH) {
        return false;
      }    

      return item.nameRU !== ''
        && item.nameRU.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    if (listFiltered.length === 0) {
      setIsEmptyQuery({
        value: true,
        message: `По вашему запросу "${query}" не найдено подходящих фильмов`
      });
    }

    setMovieCardList(listFiltered);
    hidePreloader();
  }
  
  return (
    <div className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmitSearch} noValidate>
        <img src={searchIcon} alt="Иконка поиска" className="search-form__search-icon"/>
        <label className='search-form__group-small'>
          <div className='search-form__input-group'>
            <input placeholder='Фильм' className='search-form__input' onInput={handleQueryInput}></input>
            { showErrorEmptyQuery && <p className='search-form__error'>Введите название фильма</p> }
          </div>
          <button type='submit' className='search-form__search-button'></button>
        </label>
        <img src={breakIcon} alt="Иконка разделитель" className="search-form__break_icon"/>
        <div className='search-form__shorts-group'>
          <button
            type='button'
            onClick={handlecClickSearchShorts}
            className={`search-form__shorts-button ${searchShorts ? 'search-form__shorts-button_enabled' : 'search-form__shorts-button_disabled'}`}
            ></button>
          <label htmlFor='shorts' className='search-form__label'>Короткометражки</label>        
        </div>
      </form>
    </div>
  );
}

export default SearchForm;