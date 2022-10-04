import React from 'react';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import EmptyQuery from '../EmptyQuery/EmptyQuery';
import Footer from '../Footer/Footer';



function Movies({ handleMovieAdd, handleMovieRemove, getFavMovieList }) {

  const [isPreloaderVisible, setIsPreloaderVisible] = React.useState(false);
  const [isEmptyQuery, setIsEmptyQuery] = React.useState({
    value: false,
    message: ''
  });
  const [movieCardList, setMovieCardList] = React.useState([]);

  const showPreloader = () => { 
    setIsPreloaderVisible(true);
  };

  const hidePreloader = () => {
    setIsPreloaderVisible(false);
  };



  return (
    
      <main className='movies'>
          <SearchForm 
            showPreloader={showPreloader}
            hidePreloader={hidePreloader}
            setIsEmptyQuery={setIsEmptyQuery}
            setMovieCardList={setMovieCardList}
          />
          { isEmptyQuery.value 
            ? <EmptyQuery messageText={`${isEmptyQuery.message}`} />
            : <MoviesCardList
                isSaved={false}
                isPreloaderVisible={isPreloaderVisible}
                movieCardList={movieCardList}
                handleMovieAdd={handleMovieAdd}
                handleMovieRemove={handleMovieRemove}
                getFavMovieList={getFavMovieList}
              />          
          }
      </main>    
    

  );
}

export default Movies;
