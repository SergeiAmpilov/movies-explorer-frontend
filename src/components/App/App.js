import React from 'react';
import {
  Route,
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


import { currentUserContext } from '../../contexts/CurrentUserContext';

import movieApi from '../../utils/MovieApi';



function App() {

  const [loggedIn, setLoggedIn] = React.useState(false); // false
  const [currentUser, setCurrentUser] = React.useState({});

  const history = useHistory();


  const headerEndpoints = ['/', '/movies', '/saved-movies', '/profile'];
  const footerEndpoints = ['/', '/movies', '/saved-movies'];

  const handleRegister = (name, email, password) => {
    movieApi.signUp({ name, email, password })
      .then( (res) => {
        handleLogin(email, password);
      })
      .catch( (err) => console.log(err));
  }

  const handleLogin = (email, password) => {
    movieApi.signIn({ email, password })
        .then((res) => {
          setLoggedIn(true);
          history.push('/movies');
        })
        .catch((err) => console.log(`Ошибка.....: ${err}`))
  }

  const handleMovieAdd = () => {};
  const handleMovieRemove = () => {};

  const onLogout = () => {
    movieApi.logout()
        .then((res)=> setLoggedIn(false))
        .catch((err) => console.log(`Ошибка.....: ${err}`));
  }

  const onUpdate = (name, email) => {
    movieApi.update({ name, email })
      .then( (res) => {
        console.log(res);
      })
      .catch((err) => {
          console.log(`Ошибка.....: ${err}`)
      })
  }

    // проверка токена при первичном открытии сайта
    React.useEffect(() => {
      movieApi.checkToken()
          .then((res) => {
            setLoggedIn(true);
          })
          .catch((err) => console.log(`Ошибка.....: ${err}`));
    }, []);

  React.useEffect(() => {
    if (loggedIn) {
      movieApi.checkToken()
        .then((profileData) => {
            setCurrentUser(profileData)
        })
        .catch(err => console.log(`Ошибка.....: ${err}`));
    }
  }, [loggedIn]);



  /* 
  const handleLogin = (email, password) => {
    movieApi.signIn({ email, password })
        .then( (res) => {
            setLoggedIn(true);
            console.log('set logged in +++');
            console.log(res);

            history.push('/movies');
        })
        .catch((err) => {
            console.log(`Ошибка.....: ${err}`)
        })
  }

  const onLogout = () => {
    movieApi.logout()
        .then((res)=>{
            setLoggedIn(false);
            console.log('res logout');
            console.log(res);
            history.push('/');
        })
        .catch((err) => {
            console.log(`Ошибка.....: ${err}`)
        });
  }

  const onUpdate = (name, email) => {
    movieApi.update({ name, email })
      .then( (res) => {
        console.log('update +++');
        console.log(res);
      })
      .catch((err) => {
          console.log(`Ошибка.....: ${err}`)
      })
  }

  const handleRegister = (name, email, password) => {

    movieApi.signUp({ name, email, password })
      .then( (res) => {
        console.log('register +++->');
        console.log(res);
        history.push('/signin');
      })
      .catch( (err) => console.log(err));
  }

  const handleDebugUser = () => {
    movieApi.checkToken()
      .then( (res) => {
        console.log('debug user info');
        console.log(res);
        console.log('context value currentUser');
        console.log(currentUser);

      })
      .catch( (err) => console.log(err));
  }

  const handleMovieAdd = (cardParams) => {
    movieApi.addFilm(cardParams)
      .then((res) => {
        console.log('res movie add', res);
        setFavMovieList(favMovieList.push(res));
        return res._id;
      })
      .catch(err => console.log(`Ошибка.....: ${err}`));
  };
  */

  /* нужно передать тот id, что есть в базе данных - не во внешнем сервисе */
  /*
  const handleMovieRemove = (movieIdDb) => {
    if (!movieIdDb) {
      return ;
    }
    
    movieApi.removeFilm(movieIdDb)
      .then( (res) => {
        console.log('res remove', res);
        const curMovieList = favMovieList.filter( movie => movie._id !== movieIdDb )
        setFavMovieList(curMovieList);
      })
      .catch(err => console.log(`Ошибка.....: ${err}`));
  }

  const getFavMovieList = () => favMovieList ;

  // проверка токена при первичном открытии сайта
  React.useEffect(() => {
    movieApi.checkToken()
        .then((res) => {
          setLoggedIn(true);
        })
        .catch((err) => console.log(`Ошибка.....: ${err}`));
  }, []);
  */

  /* set user for context */
  /*
  React.useEffect(() => {
    if (loggedIn) {
      movieApi.checkToken()
        .then((profileData) => {
            setCurrentUser(profileData)
        })
        .catch(err => console.log(`Ошибка.....: ${err}`));

      movieApi.getFilms()
        .then(setFavMovieList)
        .catch(err => console.log(`Ошибка.....: ${err}`));

    } else {
      setFavMovieList([]);
    }
  }, [loggedIn]);
  */




  return (
    <div className="App">
      <currentUserContext.Provider value={currentUser}>
        <Route exact path={headerEndpoints}>
          <Header
            loggedIn={loggedIn}
          />
        </Route>
        <Switch>
          <Route exact path='/signup'>
            <Register onRegister={handleRegister}/>
          </Route>
          <Route exact path='/signin'>
            <Login onLogin={handleLogin} />
          </Route>
          <ProtectedRoute
            path='/movies'
            component={Movies}
            loggedIn={loggedIn}
            handleMovieAdd={handleMovieAdd}
            handleMovieRemove={handleMovieRemove}
          />
          <ProtectedRoute path="/saved-movies"
            component={SavedMovies}
            loggedIn = {loggedIn}
          />
          <ProtectedRoute path="/profile"
            component={Profile}
            loggedIn = {loggedIn}
            handleLogout={onLogout}
            handleUpdate={onUpdate}
          />
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Route exact path={footerEndpoints}>
          <Footer />
        </Route>
      </currentUserContext.Provider>


    {/* 
      <div className="App">
        { pathname !== '/signup' && pathname !== '/signin' &&
          <Header
            loggedInHeader={pathname !== '/'}
          />
        }
        <Switch>
          <Route exact path='/'>
            <Main handleDebug={handleDebugUser}/>
          </Route>

          <ProtectedRoute path="/saved-movies"
            component={SavedMovies}
            loggedIn = {loggedIn}
          />

          <ProtectedRoute path="/movies"
            component={Movies}
            loggedIn = {loggedIn}
            handleMovieAdd={handleMovieAdd}
            handleMovieRemove={handleMovieRemove}
            getFavMovieList={getFavMovieList}
          />

          <ProtectedRoute path="/profile"
            component={Profile}
            loggedIn = {loggedIn}
            handleLogout={onLogout}
            handleUpdate={onUpdate}
          />


          <Route path='/signin'>
            <Login onLogin={handleLogin} />
          </Route>
          <Route path='/signup'>
            <Register onRegister={handleRegister}/>
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        
       */}
      </div>


  );
}

export default App;
