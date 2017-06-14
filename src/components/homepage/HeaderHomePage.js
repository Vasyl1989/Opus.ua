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
<<<<<<< HEAD
            <Link to={"/AddVacancy"}>Створити вакансію</Link>
            {/* < a href="/AddVacancy">Створити вакансію</a>*/}
          </li>
          <li>
            <Link to={"/ManageVacancy"}>Редагувати вакансію</Link>
            {/*<a href="ManageVacancy">Редагувати вакансію</a>*/}
=======
           <a href="AddVacancy">Створити вакансію</a>
          </li>
          <li>
           <a href="ManageVacancy">Редагувати вакансію</a>
>>>>>>> master
          </li>
         </ul>
        </li>
       </ul>
      </nav>


      {/*Navigation*/}
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

export default HeaderHomePage;