import React from 'react';
import { Link } from 'react-router-dom';

import { currentUserContext } from '../../contexts/CurrentUserContext';
import { MESSAGES } from '../../utils/constants';
import isEmail from 'validator/es/lib/isEmail';


import './Profile.css';



function Profile({ handleLogout, handleUpdate, openPopup }) {

  const currentUser = React.useContext(currentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [lastName, setLastName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);
  const [lastEmail, setLastEmail] = React.useState(currentUser.email);

  const [isVisibleButton, setVisibleButton] = React.useState(false);

  // const [inputValues, setInputValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChangeName = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;

    // const value = evt.target.value;


    setName(value);

    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());

    if (value !== lastName) {
      setVisibleButton(true);
    } else {
      setVisibleButton(false);
    }
  };

  const handleChangeEmail = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;

    // const value = evt.target.value;
    if (!isEmail(value)) {
      target.setCustomValidity('Некорректый адрес почты.');
    } else {
      target.setCustomValidity('');
    }

    setEmail(value);

    if (value !== lastEmail) {
      setVisibleButton(true);
    } else {
      setVisibleButton(false);
    }
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
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

    handleUpdate(name, email)
      .then( () => {
        setVisibleButton(false);
        setLastName(name);
        setLastEmail(email);
      })
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
            value={name || ''}
            required
          />
        </label>
        <p className={`register__form_field-error name-input-error ${errors.name ? 'register__form_field-error_visible' : '' }`}>
          {errors.name}
        </p>
        <label className='profile__form_group'>
          <p className='profile__form_title'>E-mail</p>
          <input
            className='profile__form_input'
            placeholder='help@yandex.ru'
            name='email'
            id="email-input"
            type='email'
            onChange={handleChangeEmail}
            value={email || ''}
            required
          />
        </label>
        <p className={`register__form_field-error email-input-error ${errors.email ? 'register__form_field-error_visible' : '' }`}>
          {errors.email}
        </p>
        <div className='profile__form_footer'>
          { isVisibleButton && isValid &&
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
