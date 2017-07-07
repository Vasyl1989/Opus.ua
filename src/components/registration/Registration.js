import React from 'react';
import TitleBar from './TitleBar';
import { Link } from 'react-router';
import Footer from '../common/Footer';
import RegistrationForm from './RegistrationForm';
import HeaderForEmployer from '../common/HeaderForEmployer';

const Registration = () => {
  return (
    <div>
      <HeaderForEmployer />
      <TitleBar />
      <div className="container">
        <div className="my-account">
          <ul className="tabs-nav">
            <li ><Link to={"/login"}>Увійти</Link></li>
            <li className="active"><Link to={"/registration"}>Зареєструватись</Link></li>
          </ul>
          <div className="tabs-container">
            <div className="tab-content" id="tab2">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;