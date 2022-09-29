import React from 'react';

import './Profile.css';
import Header from '../Header/Header';


function Profile() {
  return (
    <>
    <Header loggedIn={true} />

    <main className='profile'>
      <h1 className='profile__title'>Привет, Святогор!</h1>
      <form className='profile__form'>
        <label className='profile__form_group'>
          <p className='profile__form_title'>Имя</p>
          <input
            className='profile__form_input'
            name='name'
            id="name-input"
            placeholder='Святогор'
            type='text'
            minLength="2"
            maxLength="40"
            required
          />
        </label>
        <label className='profile__form_group'>
          <p className='profile__form_title'>E-mail</p>
          <input
            className='profile__form_input'
            placeholder='help@yandex.ru'
            name='email'
            id="email-input"
            type='email'
            required
          />
        </label>
        <div className='profile__form_footer'>
          <button className='profile__form_button' type='submit'>Редактировать</button>
          <a className='profile__logout-link' href='/'>Выйти из аккаунта</a>
        </div>
      </form>
      
    </main>
    </>
  );
}

export default Profile;
