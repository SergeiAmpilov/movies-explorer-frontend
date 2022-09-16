import React from 'react';

import './Movies.css';

import Header from '../Header/Header';


function Movies() {
  return (
    <div className='movies'>
        <Header
          loggedIn={true}
        />
    </div>
      
    

  );
}

export default Movies;
