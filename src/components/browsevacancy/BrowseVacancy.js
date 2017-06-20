import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Results from './Results';
import FormBrowseVacancy from './FormBrowseVacancy';



const BrowseVacancy = () => {
  return (
    <div>
      <Header />
      <div id="titlebar">
        <div className="container">
          <div className="ten columns">
            <h2>Ми знайшли для вас такі пропозиції:</h2>
          </div>
          <div className="six columns">
            <a href="add-job.html" className="button">Запропонувати роботу</a>
          </div>
        </div>
      </div>
      <FormBrowseVacancy />
      <Results />

      <Footer />
    </div>
  );
};

export default BrowseVacancy;