import React from 'react';

import FormFoundVacansi from './FormFoundVacansi';

const Banner = () => {
  return (
    <div>
      

      <div id="banner" className="with-transparent-header parallax background" data-img-width="2000" data-img-height="1330" data-diff="300">
        <div className="container">
          <div className="sixteen columns">
            <div className="search-container">

              <FormFoundVacansi />

              <div className="browse-jobs">
                Сортувати вакансії за<a href="browse-categories.html"> категорією</a> чи <a href="#">локацією</a>
              </div>


              <div className="announce">
                <p>Ми можемо знайти роботу для тебе!</p>
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>

  );
};

export default Banner;