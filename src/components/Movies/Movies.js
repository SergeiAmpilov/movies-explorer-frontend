import React from 'react';

import './Movies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';


function Movies() {
  return (
    <div className='movies'>
        <Header
          loggedIn={true}
        />
        <SearchForm />
    </div>
      
    

  );
}

export default Movies;
