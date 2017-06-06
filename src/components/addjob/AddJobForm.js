import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';

import * as Actions from '../../actions/jobActions';
import * as consts from '../../constants/const';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

class AddVacancyForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleInputChange = this
      .handleInputChange
      .bind(this);
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

    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  handleInputChange(e) {
    const vacancy = Object.assign({}, this.state.vacancy);
    vacancy[e.target.name] = e.target.value;
    this.setState({vacancy});

  }

  handleSubmit(event) {

    event.preventDefault();

    this
      .props
      .dispatch(Actions.sendVacancy(this.state.vacancy));
  }

  render() {

    return (
      <div className="container form-add-job">

        {/*------Submit Page------*/}
        <div className="sixteen columns">
          <div className="submit-page">

            <form onSubmit={this.handleSubmit}>
              {/*------- Emaile------*/}

              <TextInput
                type='text'
                title='Електронна пошта'
                name="email"
                placeholder="mail@example.com"
                onChange={this.handleInputChange}/> {/*------- Title------*/}

              <TextInput
                title='Назва вакансії'
                type="text"
                name='title'
                onChange={this.handleInputChange}/> {/*------- Job Pair------*/}
              <TextInput
                title='Заробітня плата'
                type="text"
                name='price_per_hour'
                onChange={this.handleInputChange}/> {/*------- Location------*/}

              <TextInput
                title="Місто"
                type="text"
                placeholder="Львів "
                name="city"
                onChange={this.handleInputChange}/> {/*------- Job Type------*/}

              <SelectInput
                title="Тип роботи"
                onChange={this.handleInputChange}
                name='job_type'
                options={consts.JOB_TYPE}/> {/*------- Choose Category------*/}

              <SelectInput
                title='Категорія'
                name='category'
                onChange={this.handleInputChange}
                options={consts.CATEGORY}/> {/*------- Tags------*/}

              <TextInput
                title='Слова теги'
                type="text"
                placeholder="e.g. PHP, Social Media, Management"
                name='tags'
                onChange={this.handleInputChange}/> {/*------- Description------*/}
              <div className="form">
                <h5>Опис</h5>
                <textarea
                  className="WYSIWYG"
                  cols="40"
                  rows="3"
                  id="summary"
                  onChange={this.handleInputChange}
                  name='description'></textarea>
              </div>

              {/*------- TClosing Date------*/}

              <TextInput
                title='Оголошення активне до:'
                type="date"
                placeholder="yyyy-mm-dd"
                onChange={this.handleInputChange}
                name='active_to_date'/> {/*------- Company Details------*/}
              <div className="divider">
                <h3>Додатково про компанію</h3>
              </div>

              {/*------- Company Name------*/}

              <TextInput
                title='Компанія'
                type="text"
                placeholder="Назва компанії"
                onChange={this.handleInputChange}
                name="company"/> {/*------- Website------*/}

              <TextInput
                title='Вебсайт'
                type="text"
                placeholder="http://"
                onChange={this.handleInputChange}
                name="website"/>

              <div className="divider margin-top-0"></div>
              <button className="button big margin-top-5" type="submit">Попереній перегляд.</button>
            </form>
          </div>
        </div>

      </div>
    );
  }

}

AddVacancyForm.PropTypes = {
  createVacancy: PropTypes.func.isRequired,
  vacancies: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {vacancies: state.vacancies};
}

function mapDispatchToProps(dispatch) {

  return {dispatch};
}
// function mapDispatchToProps(dispatch) {  return {   createVacancy: vacancy =>
// dispatch(jobActions.createVacancy(vacancy))  }; }

export default connect(mapStateToProps, mapDispatchToProps)(AddVacancyForm);