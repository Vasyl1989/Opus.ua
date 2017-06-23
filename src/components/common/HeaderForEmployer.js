import React from 'react';
import '../../styles/styles.css';
import { Link} from 'react-router';

const HeaderForEmployer = () => {
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
                  <Link to={"/"} id="current">Головна</Link>
                </li>
                <li>
                  <a href="#">Працівнику</a>
                  <ul>
                    <li>
                      <a href="browse_categories">Вакансії за категорями</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" id="current">Роботодавцю</a>
                  <ul>
                    <li>
                      <Link to={"/add_vacancy"}>Створити вакансію</Link>
                        {/* < a href="/AddVacancy">Створити вакансію</a>*/}
                    </li>
                    <li>
                     <Link to={"/manage_vacancy"}>Редагувати вакансію</Link>
                        {/*<a href="ManageVacancy">Редагувати вакансію</a>*/}
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

export default HeaderForEmployer;