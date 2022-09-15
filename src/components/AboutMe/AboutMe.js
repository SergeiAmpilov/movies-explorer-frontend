import React from 'react';

import './AboutMe.css';
import studentPhoto from '../../images/ampilovsy-sm.jpg';

function AboutMe() {
  return (
    <section className='about-me'>
      <div className="section-container">
        <h2 className='section-title'>Студент</h2>
        <div className='about-me__content'>
          <div className='about-me__content-section'>
            <h3 className='section-maintext about-me__title'>Сергей</h3>
            <p className='about-me__subtitle'>Full-stack разработчик, 37 лет</p>
            <p className='about-me__text'>
              Привет, давайте знакомиться. Меня зовут Сергей, город Москва. Закончил МГУ им. Ломоносова по специальности ядерная физика.
              Работал программистом 1С, потом перешел в веб разработку на Bitrix. Сейчас активно изучаю web-разработку в стеке технологий Javascript - создание интерфейсов на React, серверная часть приложения на Node.js с использованием фреймворка Express.js. Познакомиться с реализованными проектами вы можете по ссылкам ниже.
            </p>
            <a className='about-me__gh-link' href='https://github.com/SergeiAmpilov/' target='_blank' rel="noreferrer">Github</a>
          </div>
          <div className='about-me__content-section'>
            <img className='about-me__img' src={studentPhoto} alt="Логотип" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;