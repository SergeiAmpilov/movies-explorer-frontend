class Api {

  constructor() {
    this._baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';
  }

  _request(path = "", body = false, method = 'GET') {

    const reqObject = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    };

    if (body) {
        reqObject.body = JSON.stringify(body);
    }

    return fetch(`${this._baseUrl}${path}`, reqObject)
            .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
  }

  getFilms() {
    return this._request();
  }

  getSiteUrl() {
    return 'https://api.nomoreparties.co';
  }

}

const api = new Api();

export default api;