import React from 'react';

import './Portfolio.css';
import arrowMain from '../../images/arrow-main.svg';


function Portfolio() {
  return (
    <div className='portfolio'>
      <div className="section-container">
        <h4 className='portfolio__small-title'>Портфолио</h4>
        <ul className='portfolio__case-list'>
          <li className='portfolio__list-element'>
            <a className='portfolio__case-item' href='https://github.com/SergeiAmpilov/how-to-learn' target='_blank' rel="noreferrer">
              <div className='portfolio__case-item_text'>Статичный сайт</div>
              <img src={arrowMain} alt="Стрелка" className="portfolio__case-item_img"/>
            </a>
          </li>
          <li className='portfolio__list-element'>
            <a className='portfolio__case-item' href='https://sergeiampilov.github.io/russian-travel/' target='_blank' rel="noreferrer">
              <div className='portfolio__case-item_text'>Адаптивный сайт</div>
              <img src={arrowMain} alt="Стрелка" className="portfolio__case-item_img"/>            
            </a>
          </li>
          <li className='portfolio__list-element'>
            <a className='portfolio__case-item' href='https://mesto.ampilovs.ru/' target='_blank' rel="noreferrer">
              <div className='portfolio__case-item_text'>Одностраничное приложение</div>
              <img src={arrowMain} alt="Стрелка" className="portfolio__case-item_img"/>            
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;