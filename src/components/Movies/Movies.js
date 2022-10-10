import React from 'react';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import EmptyQuery from '../EmptyQuery/EmptyQuery';
import { parseMovieList } from '../../utils/functions';
import { currentUserContext } from '../../contexts/CurrentUserContext';


function Movies({ handleMovieAdd, handleMovieRemove, favMovieList, moviesBeatFilm }) {

  const currentUser = React.useContext(currentUserContext);

  const [isPreloaderVisible, setIsPreloaderVisible] = React.useState(false);
  const [isEmptyQuery, setIsEmptyQuery] = React.useState({
    value: false,
    message: ''
  });
  const [movieCardList, setMovieCardList] = React.useState([]);

  React.useEffect(()=>{

    const initialArr = localStorage.getItem(`${currentUser.email} - movieList`)
      ? JSON.parse(localStorage.getItem(`${currentUser.email} - movieList`))
      : moviesBeatFilm;

    setMovieCardList(parseMovieList(initialArr, favMovieList));

      // setMovieCardList( 
      //   localStorage.getItem(`${currentUser.email} - movieList`)
      //     ? JSON.parse(localStorage.getItem(`${currentUser.email} - movieList`))
      //     : parseMovieList(moviesBeatFilm, favMovieList)
      // );
  }, [currentUser]);

  

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
            favMovieList={favMovieList}
            moviesBeatFilm={moviesBeatFilm}
            isSavedMovies={false}
          />
          { isEmptyQuery.value 
            ? <EmptyQuery messageText={`${isEmptyQuery.message}`} />
            : <MoviesCardList
                isSaved={false}
                isPreloaderVisible={isPreloaderVisible}
                movieCardList={movieCardList}
                handleMovieAdd={handleMovieAdd}
                handleMovieRemove={handleMovieRemove}
              />          
          }
      </main>    
    

  );
}

export default Movies;
