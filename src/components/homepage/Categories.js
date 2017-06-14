import React from 'react';

const Categories = () => {
  return (
    <div>
      <div className="container">
        <div className="sixteen columns">
          <h3 className="margin-bottom-25">Актуальні категорії</h3>
          <ul id="popular-categories">
            <li><a href="browse-jobs.html">
              <i className="ln ln-icon-People-onCloud"></i> Управління персоналом
         </a></li>
            <li><a href="#">
              <i className="ln ln-icon-Computer-2"></i> ІТ
         </a></li>
            <li><a href="browse-jobs.html">
              <i className="ln ln-icon-Worker"></i> Будівництво
         </a></li>
            <li><a href="browse-jobs.html">
              <i className="ln ln-icon-Student-Female"></i> Навчання та репетиторство
         </a></li>
            <li><a href="browse-jobs.html">
              <i className="ln  ln-icon-Medical-Sign"></i> Медиціина
         </a></li>
            <li><a href="browse-jobs.html">
              <i className="ln  ln-icon-Plates"></i> Сфера обслуговування
         </a></li>
            <li><a href="browse-jobs.html">
              <i className="ln  ln-icon-Globe"></i> Автоперевезення / Логістика
         </a></li>
            <li><a href="browse-jobs.html">
              <i className="ln  ln-icon-Laptop-3"></i> Телекомунікація
         </a></li>
          </ul>

          <div className="clearfix"></div>
          <div className="margin-top-30"></div>

          <a href="BrowseCategories" className="button centered">Показати усі категорії</a>
          <div className="margin-bottom-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Categories;