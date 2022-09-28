import React from 'react';

import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <div className="section-container">
        <h2 className='section-title techs__main-title'>Технологии</h2>
        <h3 className='section-maintext techs__title'>7 технологий</h3>
        <p className='techs__subtitle'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className='techs__list'>
          <li className='techs__list-item'>HTML</li>
          <li className='techs__list-item'>CSS</li>
          <li className='techs__list-item'>JS</li>
          <li className='techs__list-item'>React</li>
          <li className='techs__list-item'>Git</li>
          <li className='techs__list-item'>Express.js</li>
          <li className='techs__list-item'>MongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;