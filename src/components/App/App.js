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



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/saved-movies' component={SavedMovies} />
        <Route path='/movies' component={Movies} />
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='/signin'>
          <Login />
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
