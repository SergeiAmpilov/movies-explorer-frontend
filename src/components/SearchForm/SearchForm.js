import React from 'react';

import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import breakIcon from '../../images/vertical-break-icon.svg';


function SearchForm() {
  
  const [searchShorts, setSearchShorts] = React.useState(true);

  const handlecClickSearchShorts = () => {
    setSearchShorts(!searchShorts);
  };

  const searchShortsButtonClassName = `${searchShorts ? 'search-form__shorts-button_enabled' : 'search-form__shorts-button_disabled'}`;
  
  return (
    <div className='search-form'>
      <form className='search-form__form'>
        <img src={searchIcon} alt="Поиск" className=""/>
        <input placeholder='Фильм' className='search-form__input'></input>
        <button type='submit' className='search-form__search-button'></button>
        <img src={breakIcon} alt="Поиск" className="search-form__break_icon"/>
        <button
          type='button'
          onClick={handlecClickSearchShorts}
          className={`search-form__shorts-button ${searchShortsButtonClassName}`}
          ></button>
        <label htmlFor='shorts' className='search-form__label'>Короткометражки</label>        
      </form>
    </div>
  );
}

export default SearchForm;