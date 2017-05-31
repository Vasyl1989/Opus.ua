import React from 'react';
import TitleBar from './TitleBar';
import HeaderForEmployer from './HeaderForEmployer';
import Footer from '../common/Footer';
import AddJobForm from './AddJobForm';

const AddJob = () => {
  return (
    <div>
      <HeaderForEmployer />
      <TitleBar />
      <AddJobForm />
      <Footer />
    </div>
  );
};

export default AddJob;