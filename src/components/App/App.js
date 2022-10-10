import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";


import '../../vendor/normalize.css';
import './App.css';

/* components */
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import Preloader from '../Preloader/Preloader';



import { currentUserContext } from '../../contexts/CurrentUserContext';

import movieApi from '../../utils/MovieApi';
import api from '../../utils/api';
import { MESSAGES } from '../../utils/constants';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [favMovieList, setFavMovieList] = React.useState([]); /* список любимых фильмов текущего пользователя */
  const [moviesBeatFilm, setMoviesBeatFilm] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [popupTitle, setPopupTitle] = React.useState('');
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const history = useHistory();


  const headerEndpoints = ['/', '/movies', '/saved-movies', '/profile'];
  const footerEndpoints = ['/', '/movies', '/saved-movies'];

  const handleRegister = ({name, email, password}) => {
    movieApi.signUp({ name, email, password })
      .then( (res) => {
        handleLogin(email, password);
        setPopupTitle(MESSAGES.sucsessRegistration);
        setIsPopupOpen(true);
      })
      .catch( (err) => {
        console.log(err);
        setPopupTitle(MESSAGES.defaultError);
        setIsPopupOpen(true);
      });
  }

  const handleLogin = ({email, password}) => {
    movieApi.signIn({ email, password })
        .then((res) => {
          // setLoggedIn(true);
          refreshUserInfo();
          history.push('/movies');
        })
        .catch((err) => {
          console.log(`Ошибка.....: ${err}`);
        })
  }

  const handleMovieAdd = (cardParams) => {
    return movieApi.addFilm(cardParams)
      .then((res) => {
        setFavMovieList([...favMovieList, res]);
        // movieApi.getFilms().then(setFavMovieList);
        return true;
      })
      .catch((err) => {
        console.log(`Ошибка.....: ${err}`);
        openPopup(MESSAGES.defaultError);
        return false;
      });
  };

  const handleMovieRemove = (movieIdDb) => {
    if (!movieIdDb) {
      return false;
    }
    
    return movieApi.removeFilm(movieIdDb)
      .then( (res) => {
        const newFavMovieList = favMovieList.filter( item => item._id !== movieIdDb);
        setFavMovieList(newFavMovieList);
        // movieApi.getFilms().then(setFavMovieList);
        return true;
      })
      .catch(err => {
        console.log(`Ошибка.....: ${err}`);
        openPopup(MESSAGES.defaultError);
        return false;
      });
  }

  const onLogout = () => {
    movieApi.logout()
      .then((res)=> {
        // setLoggedIn(false);
        clearOnLogout();
      })
      .catch((err) => {
        console.log(`Ошибка.....: ${err}`);
        openPopup(MESSAGES.defaultError);
      });
  }

  const onUpdate = (name, email) => {
    return movieApi.update({ name, email })
      .then( (res) => {
        openPopup(MESSAGES.sucsessUpdate);
      })
      .catch((err) => {
          console.log(`Ошибка.....: ${err}`);
          openPopup(MESSAGES.defaultError);
      })
  }

  const openPopup = (message) => {
    setPopupTitle(message);
    setIsPopupOpen(true);
  }

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupTitle('');
  }

  const clearOnLogout = () => {
    localStorage.removeItem(`${currentUser.email} - searchShorts`);
    localStorage.removeItem(`${currentUser.email} - query`);
    localStorage.removeItem(`${currentUser.email} - movieList`)
    setMoviesBeatFilm([]);
    setFavMovieList([]);
    setCurrentUser({});
    setIsLoading(true);
    setLoggedIn(false);
    history.push('/');
  }

  const refreshUserInfo = () => {
    movieApi.checkToken()
      .then((profileData) => {
        setCurrentUser(profileData);
        setLoggedIn(true);

        movieApi.getFilms()
        .then((res) => {
          setFavMovieList(res);

          api.getFilms()
            .then((res) => {
              setMoviesBeatFilm(res);
              setIsLoading(false); //
            })
            .catch(err => console.log(`Ошибка.....: ${err}`));
        })
        .catch(err => console.log(`Ошибка.....: ${err}`));


      })
      .catch( (err) => {
        clearOnLogout();
      })

  }

  // проверка токена при первичном открытии сайта
  React.useEffect(() => {
    refreshUserInfo();
  }, []);

  return (
    <div className="App">
      <currentUserContext.Provider value={currentUser}>
        <Route exact path={headerEndpoints}>
          <Header
            loggedIn={loggedIn}
          />
        </Route>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/signup'>
            { () => isLoading ? <Preloader /> : 
                loggedIn
                  ? <Redirect to="/movies" />
                  : <Register onRegister={handleRegister}/>
            }            
          </Route>
          <Route exact path='/signin'>
            { () => isLoading ? <Preloader /> :
                loggedIn
                  ? <Redirect to="/movies" />
                  : <Login onLogin={handleLogin} />
            }            
          </Route>
          <ProtectedRoute
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            handleMovieAdd={handleMovieAdd}
            handleMovieRemove={handleMovieRemove}
            favMovieList={favMovieList}
            moviesBeatFilm={moviesBeatFilm}
            isLoading={isLoading}
          />
          <ProtectedRoute path="/saved-movies"
            component={SavedMovies}
            loggedIn = {loggedIn}
            handleMovieRemove={handleMovieRemove}
            favMovieList={favMovieList}
            isLoading={isLoading}
          />
          <ProtectedRoute path="/profile"
            component={Profile}
            loggedIn = {loggedIn}
            handleLogout={onLogout}
            handleUpdate={onUpdate}
            openPopup={openPopup}
            isLoading={isLoading}
          />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Route exact path={footerEndpoints}>
          <Footer />
        </Route>
        <Popup text={popupTitle} isOpen={isPopupOpen} onClose={closePopup} />
      </currentUserContext.Provider>
    </div>
  );
}

export default App;
