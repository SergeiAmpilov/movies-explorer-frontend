import React from 'react';

import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';
import breakIcon from '../../images/vertical-break-icon.svg';


function SearchForm() {
  return (
    <div className='search-form'>
      <form className='search-form__form'>
        <img src={searchIcon} alt="Поиск" className=""/>
        <input placeholder='Фильм' className='search-form__input'></input>
        <button type='submit' className='search-form__search-button'></button>
        <img src={breakIcon} alt="Поиск" className="search-form__break_icon"/>
        <input type="checkbox" id='shorts'></input><label for='shorts'>Короткометражки</label>
        
      </form>
    </div>
  );
}

export default SearchForm;