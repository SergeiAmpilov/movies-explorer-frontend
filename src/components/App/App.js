import React from 'react';
import {
  Route,
  Switch,
  useHistory,
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

  const history = useHistory();

  const handleLogin = (email, password) => {
    movieApi.signIn({ email, password })
        .then( (res) => {
            setLoggedIn(true);
            console.log('set logged in +++');
            console.log(res);
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
      })
      .catch( (err) => console.log(err));
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Main handleDebug={handleDebugUser}/>
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies/>
        </Route>
        <Route path='/movies' component={Movies} />
        <Route path='/profile'>
          <Profile 
            handleLogout={onLogout}
            handleUpdate={onUpdate}
          />
        </Route>
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
  );
}

export default App;
