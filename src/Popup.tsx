
import React from 'react';

const Popup: React.FC = () => {
  return (
    <div className='popup-container'>
      1
      <iframe
        src={"https://api.linktodo.ws/embed/kp/1013343?host=kinobd.net"}
        allow="autoplay"
        allowFullScreen
      />

      2
      <div data-kinopoisk="1013343" id="kinobd"></div>
      <script src="https://kinobd.net/js/player_.js"></script>
    </div>
  );
};


export default Popup;