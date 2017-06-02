import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
// import axios  from 'axios';


import {Actions} from '../../actions/jobActions';


class AddVacancyForm extends React.Component {
 constructor(props, context) {
  super(props, context);
  this.handleInputChange = this.handleInputChange.bind(this);
  this.state = {
   vacancy: {

    email: "",
    title: "",
    price_per_hour: "",
    city: "",
    job_type: "",
    category: "",
    tags: "",
    description: "",
    active_to_date: "",
    company: "",
    website: ""
   }
  };

  this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleInputChange(e) {
  const vacancy = Object.assign({}, this.state.vacancy);
  vacancy[e.target.name] = e.target.value;
  this.setState({ vacancy: vacancy });

 }


 handleSubmit(event) {

  // console.log(this.state);
  event.preventDefault();
  // axios.post('https://opus-ua-backend-dev.herokuapp.com/api/v1/vacancies',this.state.vacancy)
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
this.props.dispatch(Actions.sendVacancy(this.state.vacancy));
 }



 render() {

  return (
   <div className="container form-add-job">

    {/*------Submit Page------*/}
    <div className="sixteen columns">
     <div className="submit-page">

      <form onSubmit={this.handleSubmit}>
       {/*------- Emaile------*/}
       <div className="form">
        <h5>Електронна пошта</h5>
        <input className="search-field"
         type="text"
         name="email"
         placeholder="mail@example.com"

         onChange={this.handleInputChange} />
       </div>

       {/*------- Title------*/}
       <div className="form">
        <h5>Назва вакансії</h5>
        <input className="search-field"
         type="text"
         placeholder=""
         name='title'
         onChange={this.handleInputChange} />
       </div>


       {/*------- Job Pair------*/}
       <div className="form">
        <h5>Заробітня плата</h5>
        <input className="search-field"
         type="text"
         placeholder=""
         name='price_per_hour'
         onChange={this.handleInputChange} />
       </div>


       {/*------- Location------*/}
       <div className="form">
        <h5>Місто <span>(необов'язково)</span></h5>
        <input
         className="search-field"
         type="text"
         placeholder="Львів "
         name="city"
         onChange={this.handleInputChange} />
        <p className="note">Залишити пустим,якщо місце розташування не важливе.</p>
       </div>

       {/*------- Job Type------*/}
       <div className="form">
        <h5>Тип роботи</h5>
        <select
         data-placeholder="Full-Time"
         className="chosen-select-no-single"
         onChange={this.handleInputChange}
         name='job_type'
        >
         <option value="Повна зайнятість">Повна зайнятість</option>
         <option value="Часткова зайнятість">Часткова зайнятість</option>
         <option value="Інтернатура">Інтернатура</option>
         <option value="Фріланс">Фріланс</option>
        </select>
       </div>

       {/*------- Choose Category------*/}
       <div className="form">
        <div className="select">
         <h5>Категорія</h5>
         <select
          data-placeholder="Full-Time"
          className="chosen-select-no-single"
          name='category'
          onChange={this.handleInputChange}
         >
          <option value="Автоперевезення">Автоперевезення / Логістика</option>
          <option value="Будівництво">Будівництво</option>
          <option value="Виробництво">Виробництво</option>
          <option value="ІТ">ІТ</option>
          <option value="Краса та здоров'я">Краса та здоров'я</option>
          <option value="Медицина">Медицина</option>
          <option value="Навчання та репетиторство">Навчання та репетиторство</option>
          <option value="Робочі спеціальності">Робочі спеціальності</option>
          <option value="Сільськогосподарські роботи">Сільськогосподарські роботи</option>
          <option value="Сфера обслуговування">Сфера обслуговування</option>
          <option value="Телекомунікація">Телекомунікація</option>
          <option value="Управління персоналом">Управління персоналом</option>
         </select>
        </div>
       </div>

       {/*------- Tags------*/}
       <div className="form">
        <h5>Слова теги <span>(необов'язково)</span></h5>
        <input className="search-field"
         type="text"
         placeholder="e.g. PHP, Social Media, Management"
         name='tags'
         onChange={this.handleInputChange}
        />
        <p className="note"> Навички і технології необхіні для цієї роботи.</p>
       </div>

       {/*------- Description------*/}
       <div className="form">
        <h5>Опис</h5>
        <textarea
         className="WYSIWYG"
         cols="40" rows="3"
         id="summary"
         onChange={this.handleInputChange}
         name='description'
        ></textarea>
       </div>

       {/*------- TClosing Date------*/}
       <div className="form">
        <h5>Оголошення активне до: <span>(необов'язково)</span></h5>
        <input data-role="date" type="text" placeholder="yyyy-mm-dd" onChange={this.handleInputChange}
         name='active_to_date' />
       </div>


       {/*------- Company Details------*/}
       <div className="divider"><h3>Додатково про компанію</h3></div>

       {/*------- Company Name------*/}
       <div className="form">
        <h5>Компанія</h5>
        <input type="text" placeholder="Назва компанії" onChange={this.handleInputChange}
         name="company" />
       </div>

       {/*------- Website------*/}
       <div className="form">
        <h5>Вебсайт<span>(необов'язково)</span></h5>
        <input type="text" placeholder="http://"
         onChange={this.handleInputChange}
         name="website" />
       </div>

       <div className="divider margin-top-0"></div>
       <button className="button big margin-top-5" type="submit" >Попереній перегляд.</button>
      </form>
     </div>
    </div>

   </div>
  );
 }

}


AddVacancyForm.PropTypes = {
 createVacancy: PropTypes.func.isRequired,
 vacances: PropTypes.array.isRequired
};

function mapStateToProps(state) {
 return {
  vacances: state.vacances
 };
}

function mapDispatchToProps(dispatch) {
 
 return {
   
  dispatch,
 };
}
// function mapDispatchToProps(dispatch) {
//  return {
//   createVacancy: vacancy => dispatch(jobActions.createVacancy(vacancy))
//  };
// }

export default connect(mapStateToProps,mapDispatchToProps)(AddVacancyForm);
