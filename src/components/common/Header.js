import React from 'react';
import '../../styles/styles.css';

const Header = () => {
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
                  <a href="/" id="current">Головна</a>
                </li>
                <li>
                  <a href="#">Працівнику</a>
                  <ul>
                    <li>
                      <a href="BrowseVacancy">Пошук вакансії</a>
                    </li>
                    <li>
                      <a href="BrowseCategories">Вакансії за категорями</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Роботодавцю</a>
                  <ul>
                    <li>
                      <a href="AddVacancy">Створити вакансію</a>
                    </li>
                    <li>
                      <a href="ManageVacancy">Редагувати вакансію</a>
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