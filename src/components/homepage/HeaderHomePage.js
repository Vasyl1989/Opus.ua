import React from 'react';
import '../../styles/styles.css';

const HeaderHomePage = () => {
 return (

  <div id="headerhomepage">
   <header className="transparent sticky-header full-width headerhomepage">
    <div className="container">
     <div className="sixteen columns">

      <div id="logo">
       <h1>
        <a href="/">OPUS.ua</a>
       </h1>
      </div>


      <nav id="navigation" className="menu">
       <ul id="responsive">
        <li>
         <a href="/" id="current">Головна</a>
        </li>
        <li>
         <a href="#">Працівнику</a>
         <ul>
          <li>
           <a href="BrowseJob">Пошук вакансії</a>
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
           <a href="AddJob">Створити вакансію</a>
          </li>
          <li>
           <a href="manage-jobs.html">Редагувати вакансію</a>
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