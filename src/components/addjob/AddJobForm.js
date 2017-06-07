import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import TextInput from '../common/textInput';

// import classnames from 'classnames';

import { Actions } from '../../actions/jobActions';


class AddVacancyForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      vacancy: {
        id:"",
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
      },
      errors: {},
      active: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
   
  }

  
 //validation

  handleValidation(){
    let vacancy = this.state.vacancy;
    let errors = {};
    let formIsValid = true;

    {/*------- title validation------*/}
    if(!vacancy["title"]){
           formIsValid = false;
           errors["title"] = "Це поле не може бути пустим";
    }
    if(typeof vacancy["title"] !== "undefined"){
             if(!vacancy["title"].match(/^[a-zA-Z]+$/&& /^[А-Яа-яЁё\s]+$/)){
                 formIsValid = false;
                 errors["title"] = "У назві вакансії допускаються лише літери";
        }   
    }

    {/*------- email validation------*/}
    if(!vacancy["email"]){
           formIsValid = false;
           errors["email"] = "Це поле не може бути пустим";
     }
     if(typeof vacancy["email"] !== "undefined"){
            let lastAtPos = vacancy["email"].lastIndexOf('@');
            let lastDotPos = vacancy["email"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && vacancy["email"].indexOf('@@') == -1 && lastDotPos > 2 && (vacancy["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email написаний не вірно";
            }
       }

      {/*------- Job Pair validation------*/}
      if(!vacancy["price_per_hour"]){
           formIsValid = false;
           errors["price_per_hour"] = "Це поле не може бути пустим";
     }
     if(typeof vacancy["price_per_hour"] !== "undefined"){
       if(!vacancy["price_per_hour"].match(/^[ 0-9]+$/)){
          formIsValid = false;
          errors["price_per_hour"] = "У цьому полі допускаються лише цифри";
       }
     }

    //  {/*------- Job Type validation------*/}
    //  if(!vacancy["job_type"]){
    //        formIsValid = false;
    //        errors["job_type"] = "Оберіть тип роботи";
    //  }

    //  {/*------- category validation------*/}
    //  if(!vacancy["category"]){
    //        formIsValid = false;
    //        errors["category"] = "Оберіть сферу роботи";
    //  }

     {/*------- description validation------*/}
     if(!vacancy["description"]){
           formIsValid = false;
           errors["description"] = "Опишіть роботу, яку ви пропонуєте";
     }

     {/*------- active_to_date validation------*/}
     if(!vacancy["active_to_date"]){
           formIsValid = false;
           errors["active_to_date"] = "Оголошення яктивне до:";
     }

     {/*------- company validation------*/}
     if(!vacancy["company"]){
           formIsValid = false;
           errors["company"] = "Вкажіть назву компанії";
     }

     
     this.setState({errors: errors});
       return formIsValid; 
  }


  handleInputChange(e) {
    const vacancy = Object.assign({}, this.state.vacancy);
    vacancy[e.target.name] = e.target.value;
    this.setState({ vacancy: vacancy });
 }


  handleSubmit(event) {
    event.preventDefault();
    if(this.handleValidation()){
           alert("Вакансія надсилається");
        }else{
           alert("Форма заповнена не вірно");
        }
    this.props.dispatch(Actions.sendVacancy(this.state.vacancy));
 }


  render() {

    return (
      <div className="container form-add-job">

        {/*------Submit Page------*/}
        <div className="sixteen columns">
          <div className="submit-page">

            <form name="myForm" onSubmit={this.handleSubmit}>

              {/*------- Emaile------*/}
              <TextInput
                type="email"
                title="Електронна aдреса"
                name="email"
                placeholder="mail@example.com"
                onChange={this.handleInputChange}/>
                <span className="errorMassage" style={{color: "red"}}>{this.state.errors["email"]}</span>
                 
                 <div className="clearfixform"></div>

              {/*------- Title------*/}
               <TextInput
                title="Назва вакансії"
                type="text"
                name="title"
                onChange={this.handleInputChange}/>
                <span className="errorMassage" style={{color: "red"}}>{this.state.errors["title"]}</span>

                <div className="clearfixform"></div>

              {/*------- Job Pair------*/}
              <TextInput
                title="Заробітня плата"
                type="text"
                name="price_per_hour"
                onChange={this.handleInputChange}/>
                <span style={{color: "red"}}>{this.state.errors["price_per_hour"]}</span>

                <div className="clearfixform"></div>

              {/*------- Location------*/}
              <TextInput
                title="Місто"
                type="text"
                placeholder="Львів (залишити пустим,якщо місце розташування не важливе)"
                name="city"
                onChange={this.handleInputChange}/>
                <div className="clearfixform"></div>
                             

              {/*------- Job Type------*/}
              <div className="form">
                <h5>Тип роботи</h5>
                <select
                  data-placeholder="Full-Time"
                  className="chosen-select-no-single"
                  onChange={this.handleInputChange}
                  name="job_type"
                >
                  <option value="Повна зайнятість">Повна зайнятість</option>
                  <option value="Часткова зайнятість">Часткова зайнятість</option>
                  <option value="Інтернатура">Інтернатура</option>
                  <option value="Фріланс">Фріланс</option>
                </select>
               {/* <span style={{color: "red"}}>{this.state.errors["job_type"]}</span>*/}
              </div>
              <div className="clearfixform"></div>

              {/*------- Choose Category------*/}
              <div className="form">
                <div className="select">
                  <h5>Категорія</h5>
                  <select
                    data-placeholder="Full-Time"
                    className="chosen-select-no-single"
                    name="category"
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
                  {/*<span style={{color: "red"}}>{this.state.errors["category"]}</span>*/}
                </div>
              </div>

              <div className="clearfixform"></div>

              {/*------- Tags------*/}
              <TextInput
                title="Слова теги"
                type="text"
                placeholder="Навички і технології необхіні для цієї роботи"
                name="tags"
                onChange={this.handleInputChange}/> 
                <div className="clearfixform"></div>
              
              {/*------- Description------*/}
              <div className="form">
                <h5>Опис</h5>
                <textarea
                  className="WYSIWYG"
                  cols="40"
                  rows="3"
                  id="summary"
                  onChange={this.handleInputChange}
                  name="description"></textarea>
                  <span style={{color: "red"}}>{this.state.errors["description"]}</span>
              </div>
              <div className="clearfixform"></div>

            {/*------- TClosing Date------*/}
            <TextInput
                title="Оголошення активне до:"
                type="date"
                placeholder="yyyy-mm-dd"
                onChange={this.handleInputChange}
                name="active_to_date"/>
            <span style={{color: "red"}}>{this.state.errors["active_to_date"]}</span>
            <div className="clearfixform"></div>


              {/*------- Company Details------*/}
              <div className="divider"><h3>Додатково про компанію</h3></div>

              {/*------- Company Name------*/}
              <TextInput
                title="Компанія"
                type="text"
                placeholder="Назва компанії"
                onChange={this.handleInputChange}
                name="company"/>
                <span style={{color: "red"}}>{this.state.errors["company"]}</span>
                <div className="clearfixform"></div>
             
              {/*------- Website------*/}
              <TextInput
                title="Вебсайт"
                type="url"
                placeholder="http://johndoe.com"
                required pattern="https?://.+"
                onChange={this.handleInputChange}
                name="website"/>
                <div className="clearfixform"></div>
              
              <div className="divider margin-top-0"></div>
              
              <button className="button big margin-top-5" type="submit">Розмістити  вакансію</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddVacancyForm);
