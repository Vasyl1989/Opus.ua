import React from 'react';
import '../../styles/styles.css';
import { Link } from 'react-router';


const Header = () => {
  return (
    <div>

      <header className="sticky-header">
        <div className="container">
          <div className="sixteen columns">

            {/*--------Logo-------*/}

            <div id="logo">
              <h1>
                <Link to={"/"}>OPUS.ua</Link>

              </h1>
            </div>

            {/*---------Menu-------*/}

            <nav id="navigation" className="menu sf-js-enabled sf-arrows">
              <ul id="responsive">
                <li>
                  <Link to={"/"}>Головна</Link>

                </li>
                <li>
                  <a href="#" id="current">Працівнику</a>
                  <ul>
                    <li >
                      <Link to={"/BrowseVacancy"} >Створити вакансію</Link>
                    </li>
                    <li>
                      <a href="browse-categories.html">Вакансії за категорями</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Роботодавцю</a>
                  <ul>
                    <li>
                      <Link to={"/AddVacancy"}>Створити вакансію</Link>

                    </li>
                    <li>
                      <Link to={"/ManageVacancy"}>Редагувати вакансію</Link>

                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

            {/*-------Navigation-----*/}

            <div id="mobile-navigation">
              <a href="#menu" className="menu-trigger"><i className="fa fa-reorder"></i> Menu</a>
            </div>

          </div>
        </div>
      </header>
      <div className="clearfix"></div>

    </div>

  );
};

export default Header;