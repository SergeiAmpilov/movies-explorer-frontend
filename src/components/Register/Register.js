import React from 'react';

import {
  useHistory,
} from "react-router-dom";

import './Register.css';
import promoLogo from '../../images/header-logo.svg';
import movieApi from '../../utils/MovieApi';

function Register() {

  const history = useHistory();


  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChangeName = (evt) => setName(evt.target.value);
  const handleChangeEmail = (evt) => setEmail(evt.target.value);
  const handleChangePassword = (evt) => setPassword(evt.target.value);





  const handleSubmitRigister = (evt) => {
    evt.preventDefault();

    console.log('handle submit registaration');
    movieApi.signUp({ name, email, password })
      .then( (res) => {
        // console.log('res signup', res);
        history.push('/signin');
      })
      .catch( (err) => console.log(err));
  }

  return (
    <section className='register'>
      <div className='register__container'>
        <div className='register__header'>
          <a href='/'>
            <img src={promoLogo} alt="Логотип меню" className="header__logo"/>
          </a>
          <h1 className='register__title'>Добро пожаловать</h1>
        </div>
        <form className='register__form' onSubmit={handleSubmitRigister}>
          <label className='register__form_group'>
            <p className='register__form_field-title'>Имя</p>            
            <input
              className='register__form_field-input'
              type='text'
              placeholder='Виталий'
              name='name'
              id="name-input"
              minLength="2"
              maxLength="40"
              onChange={handleChangeName}
              required
            />
            <p className="register__form_field-error register__form_field-error_visible name-input-error">
              Сообщение об ошибке
            </p>
          </label>
          <label className='register__form_group'>
            <p className='register__form_field-title'>E-mail</p>            
            <input
              className='register__form_field-input'
              type='email'
              placeholder='help@yandex.ru'
              name='email'
              id="email-input"
              onChange={handleChangeEmail}
              required
            />
            <p className="register__form_field-error email-input-error">Сообщение об ошибке</p>
          </label>
          <label className='register__form_group'>
            <p className='register__form_field-title'>Пароль</p>            
            <input
              className='register__form_field-input'
              type='password'
              placeholder='123456'
              name='password'
              id="password-input"
              minLength="6"
              onChange={handleChangePassword}
              required
            />
            <p className="register__form_field-error register__form_field-error_visible password-input-error">Сообщение об ошибке</p>
          </label>
          <button className='register__form_button' type='submit'>Зарегистрироваться</button>
        </form>
        <p className='register__footer-text'>
          Уже зарегистрированы?
          <a href="/signin" className='not-found__link register__footer-link'>Войти</a>
        </p>
      </div>      
    </section>
  );
}

export default Register;