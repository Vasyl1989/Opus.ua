import React from 'react';
import '../../styles/styles.css';
import { Link } from 'react-router';

const HeaderForEmployer = () => {
  return (
    <div>

      <header className="sticky-header">
        <div className="container">
          <div className="sixteen columns">

            {/*--------Logo-------*/}

            <div id="logo">
              <h1>
                <a href="/">OPUS.ua</a>
              </h1>
            </div>

            {/*---------Menu-------*/}

            <nav id="navigation" className="menu sf-js-enabled sf-arrows">
              <ul id="responsive">
                <li>
                  <Link to={"/"} id="current">Головна</Link>
                </li>
                <li>
                  <a href="#">Працівнику</a>
                  <ul>
                    <li>
                      <Link to="/browse_categories">Вакансії за категорями</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" id="current">Роботодавцю</a>
                  <ul>
                    <li>
                      <Link to={"/add_vacancy"}>Створити вакансію</Link>
                    </li>
                    <li>
                      <Link to={"/manage_vacancy"}>Редагувати вакансію</Link>
                    </li>
                  </ul>
                </li>
                
               
              </ul>
               <ul className="responsive float-right">
                  <li><Link to={"/registration"}><i className="fa fa-user" /> Sign Up</Link></li>
                  <li><Link to={"/login"}><i className="fa fa-lock" /> Log In</Link></li>
                </ul>
            </nav>

            {/*-------Navigation-----*/}

            <div id="mobile-navigation">
              <a href="#menu" className="menu-trigger"><i className="fa fa-reorder" /> Menu</a>
            </div>

          </div>
        </div>
      </header>
      <div className="clearfix" />

    </div>

  );
};

export default HeaderForEmployer;