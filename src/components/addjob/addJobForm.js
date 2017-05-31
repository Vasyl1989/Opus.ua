import React from 'react';


const AddJobForm=()=>{
return(
  <div className="container form-add-job">

        {/*------Submit Page------*/}
        <div className="sixteen columns">
          <div className="submit-page">

            {/*------- Emaile------*/}
            <div className="form">
              <h5>Електронна пошта</h5>
              <input className="search-field" type="text" placeholder="mail@example.com" value="" />
            </div>

            {/*------- Title------*/}
            <div className="form">
              <h5>Назва вакансії</h5>
              <input className="search-field" type="text" placeholder="" value="" />
            </div>


            {/*------- Job Pair------*/}
            <div className="form">
              <h5>Заробітня плата</h5>
              <input className="search-field" type="text" placeholder="" value="" />
            </div>


            {/*------- Location------*/}
            <div className="form">
              <h5>Місто <span>(необов'язково)</span></h5>
              <input className="search-field" type="text" placeholder="Львів " value="" />
              <p className="note">Залишити пустим,якщо місце розташування не важливе.</p>
            </div>

            {/*------- Job Type------*/}
            <div className="form">
              <h5>Тип роботи</h5>
              <select data-placeholder="Full-Time" className="chosen-select-no-single">
                <option value="1">Повна зайнятість</option>
                <option value="2">Часткова зайнятість</option>
                <option value="2">Інтернатура</option>
                <option value="2">Фріланс</option>
              </select>
            </div>

            {/*------- Choose Category------*/}
            <div className="form">
              <div className="select">
                <h5>Категорія</h5>
                <select data-placeholder="Full-Time" className="chosen-select-no-single">
                  <option value="1">Автоперевезення / Логістика</option>
                  <option value="2">Будівництво</option>
                  <option value="3">Виробництво</option>
                  <option value="4">ІТ</option>
                  <option value="5">Краса та здоров'я</option>
                  <option value="6">Медицина</option>
                  <option value="7">Навчання та репетиторство</option>
                  <option value="8">Робочі спеціальності</option>
                  <option value="8">Сільськогосподарські роботи</option>
                  <option value="8">Сфера обслуговування</option>
                  <option value="8">Телекомунікація</option>
                  <option value="8">Управління персоналом</option>
                </select>
              </div>
            </div>

            {/*------- Tags------*/}
            <div className="form">
              <h5>Слова теги <span>(необов'язково)</span></h5>
              <input className="search-field" type="text" placeholder="e.g. PHP, Social Media, Management" />
              <p className="note"> Навички і технології необхіні для цієї роботи.</p>
            </div>

            {/*------- Description------*/}
            <div className="form">
              <h5>Опис</h5>
              <textarea className="WYSIWYG" name="summary" cols="40" rows="3" id="summary"></textarea>
            </div>

            {/*------- TClosing Date------*/}
            <div className="form">
              <h5>Оголошення активне до: <span>(необов'язково)</span></h5>
              <input data-role="date" type="text" placeholder="yyyy-mm-dd" />
            </div>


            {/*------- Company Details------*/}
            <div className="divider"><h3>Додатково про компанію</h3></div>

            {/*------- Company Name------*/}
            <div className="form">
              <h5>Компанія</h5>
              <input type="text" placeholder="Назва компанії" />
            </div>

            {/*------- Website------*/}
            <div className="form">
              <h5>Вебсайт<span>(необов'язково)</span></h5>
              <input type="text" placeholder="http://" />
            </div>

            <div className="divider margin-top-0"></div>
            <a href="#" className="button big margin-top-5">Попереній перегляд.</a>

          </div>
        </div>

      </div>
)


}


export default AddJobForm;

