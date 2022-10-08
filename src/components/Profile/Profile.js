import React from 'react';
import { Link } from 'react-router-dom';

import { currentUserContext } from '../../contexts/CurrentUserContext';
import { MESSAGES } from '../../utils/constants';


import './Profile.css';



function Profile({ handleLogout, handleUpdate, openPopup }) {

  const currentUser = React.useContext(currentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [lastName, setLastName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);
  const [lastEmail, setLastEmail] = React.useState(currentUser.email);

  const [isVisibleButton, setVisibleButton] = React.useState(false);


  const handleChangeName = (evt) => {
    const value = evt.target.value;
    setName(value);

    if (value !== lastName) {
      setVisibleButton(true);
    } else {
      setVisibleButton(false);
    }
  };
  const handleChangeEmail = (evt) => {
    const value = evt.target.value;
    setEmail(value);

    if (value !== lastEmail) {
      setVisibleButton(true);
    } else {
      setVisibleButton(false);
    }
  };

  const handleLogoutClick = (evt) => {
    evt.preventDefault();
    handleLogout();
  }

  const handleUpdateUserInfo = (evt) => {
    evt.preventDefault();

    if (!isVisibleButton) {
      openPopup(MESSAGES.profileUpdatetError);
      return ;
    }

    handleUpdate(name, email);
  }

  return (
    <main className='profile'>
      <h1 className='profile__title'>Привет, {name}!</h1>
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
            value={name}
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
            value={email}
            required
          />
        </label>
        <div className='profile__form_footer'>
          { isVisibleButton && 
            <button
              className='profile__form_button'
              type='submit'
              disabled={!isVisibleButton}>
                Редактировать
            </button>
          }
          <Link to='/' className='profile__logout-link' onClick={handleLogoutClick}>
            Выйти из аккаунта
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Profile;
