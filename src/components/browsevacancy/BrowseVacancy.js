import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Results from './Results';
import FormBrowseVacancy from './FormBrowseVacancy';
import TitlebarBrowseVacancy from './TitlebarBrowseVacancy';


const BrowseVacancy = () => {
  return (
    <div>
      <Header />
      <TitlebarBrowseVacancy/>
      
      <FormBrowseVacancy />
      <Results />

      <Footer />
    </div>
  );
};

export default BrowseVacancy;