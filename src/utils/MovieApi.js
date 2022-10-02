import BaseApi from "./BaseApi";


class MovieApiClass extends BaseApi {


  /* регистрация пользователя */
  signUp({ name, email, password }) {
    return this._request('/signup', { name, email, password }, 'POST');
  }

  /* авторизация пользователя */
  signIn({ email, password }) {
    return this._request('/signin', {email, password}, 'POST');
  }

  logout() {
    return this._request('/signout', false, 'POST');
  }

  update({ name, email }) {
    return this._request('/users/me', { name, email }, 'PATCH');
  }

  /* проверка валидности токена */
  checkToken() {
    return this._request('/users/me', false);
  }

  /* получение всех карточек пользователя */

  getFilms() {
    return this._request('/movies');
  }

  addFilm(body) {
    return this._request('/movies', body, 'POST');
  }

  removeFilm(movieId) {
    return this._request(`/movies/${movieId}`, false, 'DELETE');
  }

}


const movieApi = new MovieApiClass({
  baseUrl: 'https://api.movie.ampilovs.ru'
});

export default movieApi;