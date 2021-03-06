import React from 'react';
import '../../styles/styles.css';
import { Link } from 'react-router';

const HeaderHomePage = () => {
  return (
    <div id="headerhomepage">
      <header className="transparent sticky-header full-width headerhomepage">
        <div className="container">
          <div className="sixteen columns">
            <div id="logo">
              <h1>
                <Link to={"/"}>OPUS.ua</Link>
              </h1>
            </div>
            <nav id="navigation" className="menu">
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
                  <a href="#">Роботодавцю</a>
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
                <li><Link to={"/login"}><i className="fa fa-lock" /> Увійти</Link></li>
                <li><Link to={"/registration"}><i className="fa fa-user" /> Зареєструватись</Link></li>
              </ul>
            </nav>

            {/*Navigation*/}
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

export default HeaderHomePage;