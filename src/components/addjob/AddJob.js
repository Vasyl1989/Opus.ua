import React from 'react';
import TitleBar from './TitleBar';
import Header from '../common/Header';
import Footer from '../common/Footer';

const AddJob = () => {
  return (
    <div>
      <Header />
      <TitleBar />

      <div className="container">
        <div className="sixteen columns">
          <div className="submit-page">

            <div className="form">
              <h5>Електронна пошта</h5>
              <input className="search-field" type="text" placeholder="mail@example.com" value="" />
            </div>

            <div className="form">
              <h5>Назва вакансії</h5>
              <input className="search-field" type="text" placeholder="" value="" />
            </div>

            <div className="form">
              <h5>Заробітня плата</h5>
              <input className="search-field" type="text" placeholder="" value="" />
            </div>

            <div className="form">
              <h5>Місто <span>(необов'язково)</span></h5>
              <input className="search-field" type="text" placeholder="Львів " value="" />
              <p className="note">Залишити пустим,якщо місце розташування не важливе.</p>
            </div>

            <div className="form">
              <h5>Тип роботи</h5>
              <select data-placeholder="Full-Time" className="chosen-select-no-single">
                <option value="1">Повна зайнятість</option>
                <option value="2">Часткова зайнятість</option>
                <option value="2">Інтернатура</option>
                <option value="2">Фріланс</option>
              </select>
            </div>

            <div className="form">
              <div className="select">
                <h5>Категорія</h5>
                <select data-placeholder="Full-Time" className="chosen-select-no-single">
                  <option value="1">Web Developers</option>
                  <option value="2">Mobile Developers</option>
                  <option value="3">Designers & Creatives</option>
                  <option value="4">Writers</option>
                  <option value="5">Virtual Assistants</option>
                  <option value="6">Customer Service Agents</option>
                  <option value="7">Sales & Marketing Experts</option>
                  <option value="8">Accountants & Consultants</option>
                </select>
              </div>
            </div>

            <div className="form">
              <h5>Слова теги <span>(необов'язково)</span></h5>
              <input className="search-field" type="text" placeholder="e.g. PHP, Social Media, Management" value="" />
              <p className="note"> Навички і технології необхіні для цієї роботи.</p>
            </div>

            <div className="form">
              <h5>Детальний опис роботи</h5>
              <textarea className="WYSIWYG" name="summary" cols="40" rows="3" id="summary" spellcheck="true"></textarea>
            </div>

            <div className="form">
              <h5>Оголошення активне до: <span>(необов'язково)</span></h5>
              <input data-role="date" type="text" placeholder="yyyy-mm-dd" />
            </div>

            <div className="divider"><h3>Додатково про компанію</h3></div>

            <div className="form">
              <h5>Компанія</h5>
              <input type="text" placeholder="Назва компанії" />
            </div>

            <div className="form">
              <h5>Вебсайт<span>(необов'язково)</span></h5>
              <input type="text" placeholder="http://" />
            </div>

            <div className="divider margin-top-0"></div>
            <a href="#" className="button big margin-top-5">Попереній перегляд.</a>

          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default AddJob;