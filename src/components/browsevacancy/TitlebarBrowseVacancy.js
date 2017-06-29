import React from 'react';

const TitlebarBrowseVacancy = () => {
  return (
    <div id="titlebar">
      <div className="container">
        <div className="ten columns">
          <h2>Ми знайшли для вас такі пропозиції:</h2>
        </div>
        <div className="six columns">
          <a href="add_vacancy" className="button">Запропонувати роботу</a>
        </div>
      </div>
    </div>
  );
};

export default TitlebarBrowseVacancy;