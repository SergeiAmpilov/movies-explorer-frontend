import React from 'react';

import './Profile.css';
import Header from '../Header/Header';


function Profile() {
  return (
    <section className='profile'>
      <Header loggedIn={true} />
      <h1 className='profile__title'>Привет, Святогор!</h1>
      <form className='profile__form'>
        <label className='profile__form_group'>
          <p className='profile__form_title'>Имя</p>
          <input
            className='profile__form_input'
            placeholder='Святогор'
          />
        </label>
        <label className='profile__form_group'>
          <p className='profile__form_title'>E-mail</p>
          <input
            className='profile__form_input'
            placeholder='help@yandex.ru'
          />
        </label>
        <div className='profile__form_footer'>
          <button className='profile__form_button' type='submit'>Редактировать</button>
          <a className='profile__logout-link' href='#'>Выйти из аккаунта</a>
        </div>
      </form>
      
    </section>
  );
}

export default Profile;
