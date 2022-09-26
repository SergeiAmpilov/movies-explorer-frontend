import React from 'react';

import './Movies.css';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import EmptyQuery from '../EmptyQuery/EmptyQuery';
import Footer from '../Footer/Footer';



function Movies() {

  const [isPreloaderVisible, setIsPreloaderVisible] = React.useState(false);
  const [isEmptyQuery, setIsEmptyQuery] = React.useState(false);
  const [movieCardList, setMovieCardList] = React.useState([]);
  // затвра с этого момента продолжу. мне пока не понятно как вызвать рендеринг

  const showPreloader = () => { 
    setIsPreloaderVisible(true);
  };

  const hidePreloader = () => {
    setIsPreloaderVisible(false);
  };



  return (
    <section className='movies'>
        <Header loggedIn={true} />
        <SearchForm 
          showPreloader={showPreloader}
          hidePreloader={hidePreloader}
          setIsEmptyQuery={setIsEmptyQuery}
          setMovieCardList={setMovieCardList}
        />
        { isEmptyQuery 
          ? <EmptyQuery messageText='Был введен пустой поисковый запрос.' />
          : <MoviesCardList
              isSaved={false}
              isPreloaderVisible={isPreloaderVisible}
              movieCardList={movieCardList}
            />          
        }

        <Footer />
    </section>
      
    

  );
}

export default Movies;
