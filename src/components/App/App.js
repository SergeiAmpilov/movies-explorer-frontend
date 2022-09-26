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
import PopupMenu from '../PopupMenu/PopupMenu';



function App() {
  const [isPopupVisible, setIsPopupVisible ] = React.useState(false);

  const handleBurgerOpen = () => setIsPopupVisible(!isPopupVisible);
  

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies handleBurger={handleBurgerOpen}/>
        </Route>
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
      <PopupMenu isVisible={isPopupVisible}/>
      
    </div>
  );
}

export default App;
