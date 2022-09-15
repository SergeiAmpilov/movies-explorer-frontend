import React from 'react';

import './AboutProject.css';

function AboutProject() {
  return (
    <div className='about-project'>
      <div className="about-project__container">
        <h2 className='about-project__title'>О проекте</h2>
        <div className='about-project__content'>
          <div className='about-project__section'>
            <h3 className='about-project__section_title'>Дипломный проект включал 5 этапов</h3>
            <p className='about-project__section_text'>
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </div>
          <div className='about-project__section'>
            <h3 className='about-project__section_title'>На выполнение диплома ушло 5 недель</h3>
            <p className='about-project__section_text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className='about-project__diagram'>
          <div className='about-project__diagram_element about-project__diagram_element-green'>
            <h4 className='about-project__diagram_title about-project__diagram_title-green'>1 неделя</h4>
            <p className='about-project__diagram_text'>Back-end</p>
          </div>
          <div className='about-project__diagram_element about-project__diagram_element-dark'>
            <h4 className='about-project__diagram_title about-project__diagram_title-dark'>4 недели</h4>
            <p className='about-project__diagram_text'>Front-end</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;