import React from 'react';
import { Link } from 'react-router-dom'; 

import './Profile.css';
import Header from '../Header/Header';


function Profile({ handleLogout, handleUpdate }) {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleChangeName = (evt) => setName(evt.target.value);
  const handleChangeEmail = (evt) => setEmail(evt.target.value);

  const handleLogoutClick = (evt) => {
    evt.preventDefault();
    handleLogout();
  }

  const handleUpdateUserInfo = (evt) => {
    evt.preventDefault();
    handleUpdate(name, email);
  }

  return (
    <>
    <Header loggedIn={true} />

    <main className='profile'>
      <h1 className='profile__title'>Привет, Святогор!</h1>
      <form className='profile__form' onSubmit={handleUpdateUserInfo}>
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
            onChange={handleChangeName}
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
            onChange={handleChangeEmail}
            required
          />
        </label>
        <div className='profile__form_footer'>
          <button className='profile__form_button' type='submit'>Редактировать</button>
          <Link to='/' className='profile__logout-link' onClick={handleLogoutClick}>
            Выйти из аккаунта
          </Link>
          {/* <a className='profile__logout-link'
              onClick={handleLogoutClick} href='/'>Выйти из аккаунта</a> */}
        </div>
      </form>
      
    </main>
    </>
  );
}

export default Profile;
