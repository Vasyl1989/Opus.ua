import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import TitleBar from './TitleBar';
import RegistrationForm from './RegistrationForm';


const Registration = () => {
  return (
    <div>
      <Header />
      <TitleBar />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Registration;