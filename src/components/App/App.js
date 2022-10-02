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


import { currentUserContext } from '../../contexts/CurrentUserContext';

import movieApi from '../../utils/MovieApi';



function App() {
  const { pathname } = useLocation();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});


  const history = useHistory();

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

    // проверка токена при первичном открытии сайта
    React.useEffect(() => {
      movieApi.checkToken()
          .then((res) => {
            console.log('check token on first open/ is auth true');
              setLoggedIn(true);
          })
          .catch((err) => {
              console.log(`Ошибка.....: ${err}`)
          })
  
    }, []);

  /* set user for context */
  React.useEffect(() => {
    if (loggedIn) {
      console.log('try to update user info');
      movieApi.checkToken()
            .then((profileData) => {
                setCurrentUser(profileData)
            })
            .catch(err => console.log(`Ошибка.....: ${err}`));
    }
  }, [loggedIn]);




  return (
    <currentUserContext.Provider value={currentUser}>
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
        
      </div>
    </currentUserContext.Provider>

  );
}

export default App;
