import React from 'react';

import './EmptyQuery.css';

function EmptyQuery({ messageText = '' }) {
  return (
    <div className='section-container'>
      <p className='empty-query'>
        { messageText }
      </p>
    </div>
  );
}

export default EmptyQuery;
