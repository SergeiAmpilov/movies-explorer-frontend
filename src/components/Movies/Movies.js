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
        />
        { isEmptyQuery 
          ? <EmptyQuery messageText='Был введен пустой поисковый запрос.' />
          : <MoviesCardList
              isSaved={false}
              isPreloaderVisible={isPreloaderVisible}
            />          
        }

        <Footer />
    </section>
      
    

  );
}

export default Movies;
