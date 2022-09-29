import React from 'react';

import './PageNotFound.css';

function PageNotFound() {
  return (
    <section className='not-found'>
      <p className='not-found__text-404'>404</p>
      <p className='not-found__text-notfound'>Страница не найдена</p>
      <p className='not-found__link-section'></p>
      <a href='#' className='not-found__link'>Назад</a>
    </section>
  );
}

export default PageNotFound;
