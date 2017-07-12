import React from 'react';
import { Link } from 'react-router';

const TitleBar = () => {
  return (
    <div id="titlebar" className="single">
      <div className="container">
        <div className="sixteen columns">
          <h2>Мій акаунт</h2>
          <nav id="breadcrumbs">
            <ul>
              <li>Ви знаходитесь тут:</li>
              <li><Link to={"/"}>Головна</Link></li>
              <li>Мій акаунт</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default TitleBar;