import React from 'react';
import HeaderForRegistration from './HeaderForRegistration';
import Footer from '../common/Footer';
import TitleBar from './TitleBar';
import LoginForm from './LoginForm';


const Registration = () => {
  return (
    <div>
      <HeaderForRegistration />
      <TitleBar />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Registration;