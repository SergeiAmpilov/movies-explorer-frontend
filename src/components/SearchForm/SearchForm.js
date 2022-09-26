import React from 'react';

import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import breakIcon from '../../images/vertical-break-icon.svg';
import api from '../../utils/api';


function SearchForm({ 
  showPreloader,
  hidePreloader,
  setIsEmptyQuery,
  setMovieCardList
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
      setIsEmptyQuery(true);
      return ;
    } else {
      setIsEmptyQuery(false);
    }

    showPreloader();

    api.getFilms()
    .then( (result) => {
       console.log(result);
       const listFiltered = result.filter( (item) => item.nameRU !== ''
          && item.nameRU.toLowerCase().indexOf(query.toLowerCase()) !== -1);
        setMovieCardList(listFiltered);
    })
    .catch(err => console.log(`Ошибка.....: ${err}`))
    .finally( () => hidePreloader() );
  }

  const searchShortsButtonClassName = `${searchShorts ? 'search-form__shorts-button_enabled' : 'search-form__shorts-button_disabled'}`;
  
  return (
    <div className='search-form'>
      <form className='search-form__form' onSubmit={handleSubmitSearch}>
        <img src={searchIcon} alt="Поиск" className="search-form__search-icon"/>
        <input placeholder='Фильм' className='search-form__input' onInput={handleQueryInput}></input>
        <button type='submit' className='search-form__search-button'></button>
        <img src={breakIcon} alt="Поиск" className="search-form__break_icon"/>
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