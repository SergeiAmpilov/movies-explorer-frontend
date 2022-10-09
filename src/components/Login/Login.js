import React from 'react';

import './Login.css';
import promoLogo from '../../images/header-logo.svg';
import { Link, } from 'react-router-dom';
import isEmail from 'validator/es/lib/isEmail';





function Login({ onLogin }) {

  const [errors, setErrors] = React.useState({});
  const [inputValues, setInputValues] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);


  const handleInputChange = (evt) => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;

    if (name === 'email') {
      if (!isEmail(value)) {
        target.setCustomValidity('Некорректый адрес почты.');
      } else {
        target.setCustomValidity('');
      }
    }

    setInputValues({ ...inputValues, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };


  // const handleChangeEmail = (evt) => {
  //   setEmail(evt.target.value)
  // };
  // const handleChangePassword = (evt) => setPassword(evt.target.value);

  const handleLogin = (evt) => {
    evt.preventDefault();
    onLogin(inputValues);
  }  

  return (
    <section className='login'>
      <div className='register__container'>
        <div className='register__header'>
          <Link to='/'>
            <img src={promoLogo} alt="Логотип меню" className="header__logo"/>
          </Link>       
          <h1 className='register__title'>Рады видеть!</h1>
        </div>
        <form className='register__form' onSubmit={handleLogin}>
          <label className='register__form_group'>
            <p className='register__form_field-title'>E-mail</p>            
            <input
              className={`register__form_field-input ${errors.email ? 'register__form_field-input-error' : ''}`}
              type='email'
              placeholder='help@yandex.ru'
              name='email'
              id="email-input"
              onChange={handleInputChange}
              required
            />
            <p className={`register__form_field-error email-input-error ${errors.email ? 'register__form_field-error_visible' : ''}`}>{errors.email}</p>
          </label>
          <label className='register__form_group'>
            <p className='register__form_field-title'>Пароль</p>            
            <input
              className={`register__form_field-input ${errors.password ? 'register__form_field-input-error' : ''}`}
              type='password'
              placeholder='123456'
              name='password'
              id="password-input"
              minLength="6"
              onChange={handleInputChange}
              required
            />
            <p className={`register__form_field-error password-input-error ${errors.password ? 'register__form_field-error_visible' : ''}`}>{errors.password}</p>
          </label>
          <button className='register__form_button login__form_button' type='submit'>Войти</button>
        </form>
        <p className='register__footer-text'>
          Ещё не зарегистрированы?
          <Link to="/signup" className='not-found__link register__footer-link'>
            Регистрация
          </Link>
        </p>
      </div>      
    </section>
  );
}

export default Login;
