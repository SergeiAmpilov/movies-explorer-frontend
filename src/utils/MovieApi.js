import BaseApi from "./BaseApi";


class MovieApiClass extends BaseApi {


  /* регистрация пользователя */
  signUp({ name, email, password }) {
    return this._request('/signup', { name, email, password }, 'POST');
  }

  /* авторизация пользователя */
  signIn({ email, password }) {
    return this._request('signin', {email, password}, 'POST');
  }

}


const movieApi = new MovieApiClass({
  baseUrl: 'https://api.movie.ampilovs.ru'
});

export default movieApi;