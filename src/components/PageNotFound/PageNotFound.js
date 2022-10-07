import React from 'react';
import { useHistory } from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound() {

  const history = useHistory();
  const handleClickGoBack = () => {
    history.goBack();
  }

  return (
    <section className='not-found'>
      <p className='not-found__text-404'>404</p>
      <p className='not-found__text-notfound'>Страница не найдена</p>
      <p className='not-found__link-section'></p>
      <button className='not-found__link' onClick={handleClickGoBack}>Назад</button>
    </section>
  );
}

export default PageNotFound;
