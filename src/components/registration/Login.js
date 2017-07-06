import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import TitleBar from './TitleBar';
import LoginForm from './LoginForm';


const Registration = () => {
  return (
    <div>
      <Header />
      <TitleBar />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default Registration;