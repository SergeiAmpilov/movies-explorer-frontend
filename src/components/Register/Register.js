import React from 'react';
import { Link } from 'react-router-dom';


import './Register.css';
import promoLogo from '../../images/header-logo.svg';
import isEmail from 'validator/es/lib/isEmail';

function Register({ onRegister }) {

  const [inputValues, setInputValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
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

  const handleSubmitRigister = (evt) => {
    evt.preventDefault();
    onRegister(inputValues);
  }

  return (
    <section className='register'>
      <div className='register__container'>
        <div className='register__header'>
          <Link to='/'>
            <img src={promoLogo} alt="Логотип меню" className="header__logo"/>
          </Link>
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
              onChange={handleInputChange}
              value={inputValues.name || ''}
              required
            />
            <p className={`register__form_field-error name-input-error ${errors.name ? 'register__form_field-error_visible' : '' }`}>
              {errors.name}
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
              onChange={handleInputChange}
              value={inputValues.email || ''}
              required
            />
            <p className={`register__form_field-error email-input-error ${errors.email ? 'register__form_field-error_visible' : '' }`}>{errors.email}</p>
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
              onChange={handleInputChange}
              value={inputValues.password || ''}
              required
            />
            <p className={`register__form_field-error password-input-error ${errors.password ? 'register__form_field-error_visible' : '' }`}>{errors.password}</p>
          </label>
          <button className={`register__form_button ${isValid ? '' : 'register__form_button_disabled'}`} type='submit' disabled={isValid ? '' : true}>Зарегистрироваться</button>
        </form>
        <p className='register__footer-text'>
          Уже зарегистрированы?
          <Link to='/signin' className='not-found__link register__footer-link'>
            Войти
          </Link>
        </p>
      </div>      
    </section>
  );
}

export default Register;