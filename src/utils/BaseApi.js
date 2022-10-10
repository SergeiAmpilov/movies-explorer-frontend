class BaseApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _request(path = "", body = false, method = 'GET') {

    const reqObject = {
        method,
        credentials: 'include',
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
}

export default BaseApi;