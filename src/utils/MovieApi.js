import BaseApi from "./BaseApi";


class MovieApi extends BaseApi {


  /* регистрация пользователя */
  signUp({ name, email, password }) {
    this._request('/signup', { name, email, password }, 'POST');
  }

  /* авторизация пользователя */
  signIn({ email, password }) {
    return this._request('signin', {email, password}, 'POST');
  }

}


const movieApi = new MovieApi({
  baseUrl: 'https://api.movie.ampilovs.ru'
});

export default movieApi;