import React from 'react';
import TitleBar from './TitleBar';
import Header from '../common/Header';
import Footer from '../common/Footer';
import AddVacancyForm from './AddVacancyForm';

const AddVacancy = () => {
  return (
    <div>
      <Header />
      <TitleBar />
      <AddVacancyForm />
      <Footer />
    </div>
  );
};

export default AddVacancy;