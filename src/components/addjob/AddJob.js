import React from 'react';
import TitleBar from './TitleBar';
import HeaderForEmployer from '../common/HeaderForEmployer';
import Footer from '../common/Footer';
import AddVacancyForm from './AddJobForm';

const AddJob = () => {
  return (
    <div>
      <HeaderForEmployer />
      <TitleBar />
      <AddVacancyForm />
      <Footer />
    </div>
  );
};

export default AddJob;