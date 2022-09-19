import React from 'react';

import './Register.css';
import promoLogo from '../../images/header-logo.svg';

function Register() {
  return (
    <section className='register'>
      <div className='register__container'>
        <img src={promoLogo} alt="Логотип меню" className="header__logo"/>
        <h1 className='register__title'>Добро пожаловать</h1>
        <form className='register__form'>
          <label className='register__form_group'>
            <p className='register__form_field-title'>Имя</p>            
            <input
              className='register__form_field-input'
              placeholder='Виталий'
              name='name'
              id="name-input"
            />
            <p className="register__form_field-error register__form_field-error_visible name-input-error">
              Сообщение об ошибке
            </p>
          </label>
          <label className='register__form_group'>
            <p>E-mail</p>            
            <input
            className='register__form_field-input'
              placeholder='help@yandex.ru'
              name='email'
              id="email-input"
            />
            <p className="register__form_field-error email-input-error">Сообщение об ошибке</p>
          </label>
          <label className='register__form_group'>
            <p>Пароль</p>            
            <input
              className='register__form_field-input'
              placeholder='123456'
              name='password'
              id="password-input"
            />
            <p className="register__form_field-error register__form_field-error_visible password-input-error">Сообщение об ошибке</p>
          </label>
          <button type='submit'>Зарегистрироваться</button>
        </form>
        <p>
          Уже зарегистрированы?
          <a href="#">Войти</a>
        </p>
      </div>      
    </section>
  );
}

export default Register;