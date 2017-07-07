import React from 'react';
import TitleBar from './TitleBar';
import LoginForm from './LoginForm';
import { Link } from 'react-router';
import Footer from '../common/Footer';
import HeaderForEmployer from '../common/HeaderForEmployer';

const Login = () => {
  return (
    <div>
      <HeaderForEmployer />
      <TitleBar />
      <div className="container">
        <div className="my-account">
          <ul className="tabs-nav">
            <li className="active"><Link to={"/login"}>Увійти</Link></li>
            <li> <Link to={"/registration"}>Зареєструватись</Link></li>
          </ul>
          <div className="tabs-container">
            <div className="tab-content" id="tab1" >
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;