import React from 'react';

import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import EmptyQuery from '../EmptyQuery/EmptyQuery';





function SavedMovies({ favMovieList, handleMovieRemove }) {

  const [isPreloaderVisible, setIsPreloaderVisible] = React.useState(false);
  const [isEmptyQuery, setIsEmptyQuery] = React.useState({
    value: false,
    message: ''
  });
  const [movieCardList, setMovieCardList] = React.useState(favMovieList);


  const showPreloader = () => { 
    setIsPreloaderVisible(true);
  };

  const hidePreloader = () => {
    setIsPreloaderVisible(false);
  };
  
  return (
      <main className='movies saved-movies'>
        <SearchForm 
          showPreloader={showPreloader}
          hidePreloader={hidePreloader}
          setIsEmptyQuery={setIsEmptyQuery}
          setMovieCardList={setMovieCardList}
          favMovieList={favMovieList}
          isSavedMovies={true}
        />
        { isEmptyQuery.value 
          ? <EmptyQuery messageText={`${isEmptyQuery.message}`} />
          : <MoviesCardList
            isSaved={true}
            isPreloaderVisible={isPreloaderVisible}
            movieCardList={movieCardList} 
            handleMovieRemove={handleMovieRemove}
          />}
      </main>
  );
}

export default SavedMovies;