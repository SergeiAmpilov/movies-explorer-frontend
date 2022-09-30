import React from 'react';
import {
  Route,
  Switch,
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
// import PopupMenu from '../PopupMenu/PopupMenu';

import movieApi from '../../utils/MovieApi';



function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleLogin = (email, password) => {
    movieApi.signIn({ email, password })
        .then( (res) => {
            setLoggedIn(true);
            console.log('set logged in +++');
        })
        .catch((err) => {
            console.log(`Ошибка.....: ${err}`)
        })
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies/>
        </Route>
        <Route path='/movies' component={Movies} />
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/signin'>
          <Login onLogin={handleLogin} />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
