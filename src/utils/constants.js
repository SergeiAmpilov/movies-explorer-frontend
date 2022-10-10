const SHORTS_MOVIE_LENGTH = 45;
const PAGINATION_CONFIG = {
  '1280': {
    cardsInRow: 3,
    rows: 4,
    step: 1,
    pixelWidth: 1280,
  },
  '768': {
    cardsInRow: 2,
    rows: 4,
    step: 1,
    pixelWidth: 768,
  },
  '600': {
    cardsInRow: 1,
    rows: 5,
    step: 5,
    pixelWidth: 600,
  }
};

const MESSAGES = {
  'sucsessRegistration': 'Вы успешно зарегистрированы',
  'sucsessUpdate': 'Вы успешно обновлены',
  'defaultError': 'Что-то пошло не так',
  'profileUpdatetError': 'Обновите данные',
};

export {
  SHORTS_MOVIE_LENGTH,
  PAGINATION_CONFIG,
  MESSAGES,
};