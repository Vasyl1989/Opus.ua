import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import * as Actions from '../../actions/vacancyActions';
import * as consts from '../../constants/const';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class AddVacancyForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleInputChange = this
      .handleInputChange
      .bind(this);
    // this.state = {
    //   vacancy: {
    //     email: "",
    //     title: "",
    //     price_per_hour: "",
    //     city: "",
    //     job_type: "",
    //     category: "",
    //     tags: "",
    //     description: "",
    //     active_to_date: "",
    //     company: "",
    //     website: ""
    //   },
    //   errors: {},
    //   modalIsOpen: false,
    //   modalIsOpenTwo: false
    // };

    this.state = {
      vacancy: props.singleVacancy || {
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
      modalIsOpen: false,
      modalIsOpenTwo: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }


  

  //validation

  handleValidation() {
    let vacancy = this.state.vacancy;
    let errors = {};
    let formIsValid = true;

    {/*------- title validation------*/ }
    if (!vacancy["title"]) {
      formIsValid = false;
      errors["title"] = "Це поле не може бути пустим";
    }


    {/*------- email validation------*/ }
    if (!vacancy["email"]) {
      formIsValid = false;
      errors["email"] = "Це поле не може бути пустим";
    }


    {/*------- Job Pair validation------*/ }
    if (!vacancy["price_per_hour"]) {
      formIsValid = false;
      errors["price_per_hour"] = "Це поле не може бути пустим";
    }




    {/*------- description validation------*/ }
    if (!vacancy["description"]) {
      formIsValid = false;
      errors["description"] = "Опишіть роботу, яку ви пропонуєте";
    }

    {/*------- active_to_date validation------*/ }
    if (!vacancy["active_to_date"]) {
      formIsValid = false;
      errors["active_to_date"] = "Оголошення яктивне до:";
    }

    {/*------- company validation------*/ }
    if (!vacancy["company"]) {
      formIsValid = false;
      errors["company"] = "Вкажіть назву компанії";
    }


    this.setState({ errors: errors });
    return formIsValid;
  }


  //modal window
  openModal() {
    this.setState({
      modalIsOpen: true,
      modalIsOpenTwo: true
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      modalIsOpenTwo: false
    });
  }


  handleInputChange(e) {
    console.log('assss--')
    const vacancy = Object.assign({}, this.state.vacancy);
    vacancy[e.target.name] = e.target.value;
    this.setState({ vacancy:vacancy });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.handleValidation()) {
      this.setState({ modalIsOpenTwo: true });
    } else {
      this.setState({ modalIsOpen: true });
    }
    if (this.props.shouldUpdate) {
      return this.props.dispatch(Actions.editVacancy(this.state.vacancy));
    }
    this.props.dispatch(Actions.sendVacancy(this.state.vacancy));
  }

  render() {
    const vacancy=this.props.singleVacancy;
    return (
      <div className="container form-add-job">

        {/*------Submit Page------*/}
        <div className="sixteen columns">
          <div className="submit-page">

            <form onSubmit={this.handleSubmit}>
              {/*------- Emaile------*/}

              <TextInput
                type='email'
                title='Електронна пошта'
                name="email"
                value1={this.props.vacancy.shouldUpdate ? vacancy.email : ''}
                value={this.state.vacancy.email}
                placeholder="mail@example.com"
                onChange={this.handleInputChange} />
              <span className="errorMassage" style={{ color: "red" }}>{this.state.errors["email"]}</span>

              <div className="clearfixform"></div>
              {/*------- Title------*/}

              <TextInput
                title='Назва вакансії'
                type="text"
                name='title'
                value={this.props.vacancy.shouldUpdate ? vacancy.title : null}
                onChange={this.handleInputChange} />
              <span className="errorMassage" style={{ color: "red" }}>{this.state.errors["title"]}</span>

              <div className="clearfixform"></div>
              {/*------- Job Pair------*/}
              <TextInput
                title='Заробітня плата'
                type="number"
                name='price_per_hour'
                value={this.props.vacancy.shouldUpdate ? vacancy.price_per_hour : null}
                onChange={this.handleInputChange} />
              <span style={{ color: "red" }}>{this.state.errors["price_per_hour"]}</span>

              <div className="clearfixform"></div>
              {/*------- Location------*/}

              <TextInput
                title="Місто"
                type="text"
                placeholder="Львів "
                name="city"
                value={this.props.vacancy.shouldUpdate ? vacancy.city : null}
                onChange={this.handleInputChange} />
              <div className="clearfixform"></div>
              {/*------- Job Type------*/}

              <SelectInput
                title="Тип роботи"
                onChange={this.handleInputChange}
                name='job_type'
                options={consts.JOB_TYPE} /> {/*------- Choose Category------*/}

              <SelectInput
                title='Категорія'
                name='category'
                onChange={this.handleInputChange}
                options={consts.CATEGORY} /> {/*------- Tags------*/}

              <TextInput
                title='Слова теги'
                type="text"
                placeholder="e.g. PHP, Social Media, Management"
                name='tags'
                value={this.props.vacancy.shouldUpdate ? vacancy.tags : null}
                onChange={this.handleInputChange} />
              <div className="clearfixform"></div>
              {/*------- Description------*/}
              <div className="form">
                <h5>Опис</h5>
                <textarea
                  className="WYSIWYG"
                  cols="40"
                  rows="3"
                  id="summary"
                  value={this.props.vacancy.shouldUpdate ? vacancy.description : ''}
                  onChange={this.handleInputChange}
                  name='description'></textarea>

                <span style={{ color: "red" }}>{this.state.errors["description"]}</span>
              </div>
              <div className="clearfixform"></div>
              {/*------- TClosing Date------*/}

              <TextInput
                title='Оголошення активне до:'
                type="date"
                placeholder="yyyy-mm-dd"
                value={this.props.vacancy.shouldUpdate ? vacancy.date : null}
                onChange={this.handleInputChange}
                name='active_to_date' />
              <span style={{ color: "red" }}>{this.state.errors["active_to_date"]}</span>
              <div className="clearfixform"></div>
              {/*------- Company Details------*/}
              <div className="divider">
                <h3>Додатково про компанію</h3>
              </div>

              {/*------- Company Name------*/}

              <TextInput
                title='Компанія'
                type="text"
                placeholder="Назва компанії"
                value={this.props.vacancy.shouldUpdate ? vacancy.company : null}
                onChange={this.handleInputChange}
                name="company" />
              <span style={{ color: "red" }}>{this.state.errors["company"]}</span>
              <div className="clearfixform"></div>
              {/*------- Website------*/}

              <TextInput
                title='Вебсайт'
                type="text"
                placeholder="http://"
                onChange={this.handleInputChange}
                value={this.props.vacancy.shouldUpdate ? vacancy.website : null}
                name="website" />
              <div className="clearfixform"></div>

              <div className="divider margin-top-0"></div>
              <button className="button big margin-top-5" type="submit" >Попереній перегляд.</button>

              <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >

                <h2 ref={subtitle => this.subtitle = subtitle}>Форма заповнена не вірно</h2>
                <button onClick={this.closeModal}>close</button>

              </Modal>


              <Modal
                isOpen={this.state.modalIsOpenTwo}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
              >

                <h2 ref={subtitle => this.subtitle = subtitle}>Вакансія надіслана успішно</h2>
                <button onClick={this.closeModal}>close</button>

              </Modal>

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
  return {
    vacancy: state.vacancy,
    singleVacancy: state.vacancy.singleVacancy,
    shouldUpdate:state.vacancy.shouldUpdate
  };
}

function mapDispatchToProps(dispatch) {

  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddVacancyForm);