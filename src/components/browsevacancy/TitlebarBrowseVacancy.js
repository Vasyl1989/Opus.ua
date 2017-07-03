import React from 'react';
import { Link } from 'react-router';

const TitlebarBrowseVacancy=()=>{
    return(
        <div id="titlebar">
            <div className="container">
              <div className="ten columns">
                <h2>Ми знайшли для вас такі пропозиції:</h2>
              </div>
              <div className="six columns">
                <Link to="/add_vacancy" className="button">Запропонувати роботу</Link>
              </div>
            </div>
          </div>
    )
}
export default TitlebarBrowseVacancy;