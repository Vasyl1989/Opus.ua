import React from 'react';
import HeaderForRegistration from './HeaderForRegistration';
import Footer from '../common/Footer';
import TitleBar from './TitleBar';
import RegistrationForm from './RegistrationForm';


const Registration = () => {
  return (
    <div>
      <HeaderForRegistration />
      <TitleBar />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Registration;