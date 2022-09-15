import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className="section-container">
        <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__content'>
          <div className='footer__content_group'>&copy; 2022</div>
          <div className='footer__content_group'>
            <ul className='footer__link-list'>
              <li className='footer__link-item'>
                Яндекс.Практикум
              </li>
              <li className='footer__link-item'>
                Github
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;