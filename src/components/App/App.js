import React from 'react';
import {
  Route,
  Switch,
} from "react-router-dom";

import '../../vendor/normalize.css';
import './App.css';

/* components */
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/movies'>
          <Movies />
        </Route>
        <Route exact path='/saved-movies'>
          <SavedMovies />
        </Route>
        <Route path='/profile'>
        </Route>
        <Route path='/signin'>
        </Route>
        <Route path='/signup'>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
