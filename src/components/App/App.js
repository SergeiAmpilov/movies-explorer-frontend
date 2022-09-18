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
import PageNotFound from '../PageNotFound/PageNotFound'


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
        <Route exact path='/profile'>
        </Route>
        <Route exact path='/signin'>
        </Route>
        <Route exact path='/signup'>
        </Route>
        <Route exact path="*">
          <PageNotFound />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
