import React from "react";
import  PropTypes  from "prop-types";
import { connect } from "react-redux";
import Modal from "react-modal";

import * as Actions from "../../actions/vacancyActions";
import * as consts from "../../constants/const";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import * as types from "../../actions/actionTypes";
import {closeError,closeSucces} from "../../actions/openActions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class AddVacancyForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleInputChange = this.handleInputChange.bind(this);

    if (this.props.shouldUpdate === true) {
      this.state = {
        vacancy: props.singleVacancy,
        errors: {},
      };
    } else {
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
        },
        errors: {},
      };
    }

    this.closeModal2 = this.closeModal2.bind(this);
    this.closeModal3 = this.closeModal3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //validation

  handleValidation() {
    let vacancy = this.state.vacancy;
    let errors = {};
    let formIsValid = true;

    {
      /*------- title validation------*/
    }
    if (!vacancy["title"]) {
      formIsValid = false;
      errors["title"] = "Це поле не може бути пустим";
    }

    {
      /*------- email validation------*/
    }
    if (!vacancy["email"]) {
      formIsValid = false;
      errors["email"] = "Це поле не може бути пустим";
    }

    {
      /*------- Job Pair validation------*/
    }
    if (!vacancy["price_per_hour"]) {
      formIsValid = false;
      errors["price_per_hour"] = "Це поле не може бути пустим";
    }

    {
      /*------- description validation------*/
    }
    if (!vacancy["description"]) {
      formIsValid = false;
      errors["description"] = "Опишіть роботу, яку ви пропонуєте";
    }

    {
      /*------- active_to_date validation------*/
    }
    if (!vacancy["active_to_date"]) {
      formIsValid = false;
      errors["active_to_date"] = "Оголошення яктивне до:";
    }

    {
      /*------- company validation------*/
    }
    if (!vacancy["company"]) {
      formIsValid = false;
      errors["company"] = "Вкажіть назву компанії";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  //modal window

  closeModal2() {
    this.props.dispatch(closeError());
  }

  closeModal3() { 
    this.props.dispatch(closeSucces());
  }

  handleInputChange(e) {
    const vacancy = Object.assign({}, this.state.vacancy);
    vacancy[e.target.name] = e.target.value;
    this.setState({ vacancy: vacancy });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleValidation();
    if (this.props.shouldUpdate) {
      this.props.dispatch(
        Actions.editVacancy(this.state.vacancy, this.props.vacancies)
      );
      this.setState({ shouldUpdate: !this.state.singleVacancy });
      this.setState({
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
      });
      this.props.dispatch({ type: types.SHOULD_UPDATE });
    } else {
      this.props.dispatch(Actions.sendVacancy(this.state.vacancy));
      this.setState({
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
      });
    }
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
                type="email"
                title="Електронна пошта"
                name="email"
                value={this.state.vacancy.email}
                placeholder="mail@example.com"
                onChange={this.handleInputChange}
              />
              <span className="errorMassage" style={{ color: "red" }}>
                {this.state.errors["email"]}
              </span>

              <div className="clearfixform" />
              {/*------- Title------*/}

              <TextInput
                title="Назва вакансії"
                type="text"
                name="title"
                value={this.state.vacancy.title}
                onChange={this.handleInputChange}
              />
              <span className="errorMassage" style={{ color: "red" }}>
                {this.state.errors["title"]}
              </span>

              <div className="clearfixform" />
              {/*------- Job Pair------*/}
              <TextInput
                title="Заробітня плата"
                type="number"
                name="price_per_hour"
                value={this.state.vacancy.price_per_hour}
                onChange={this.handleInputChange}
              />
              <span style={{ color: "red" }}>
                {this.state.errors["price_per_hour"]}
              </span>

              <div className="clearfixform" />
              {/*------- Location------*/}

              <TextInput
                title="Місто"
                type="text"
                placeholder="Львів "
                name="city"
                value={this.state.vacancy.city}
                onChange={this.handleInputChange}
              />
              <div className="clearfixform" />
              {/*------- Job Type------*/}

              <SelectInput
                title="Тип роботи"
                onChange={this.handleInputChange}
                name="job_type"
                className="selectInput"
                options={consts.JOB_TYPE}
              />
              {/*------- Choose Category------*/}

              <SelectInput
                title="Категорія"
                name="category"
                className="selectInput"
                onChange={this.handleInputChange}
                options={consts.CATEGORY}
              />

              {/*------- Description------*/}
              <div className="form">
                <h5>Опис</h5>
                <textarea
                  className="WYSIWYG"
                  cols="40"
                  rows="3"
                  id="summary"
                  value={this.state.vacancy.description}
                  onChange={this.handleInputChange}
                  name="description"
                />

                <span style={{ color: "red" }}>
                  {this.state.errors["description"]}
                </span>
              </div>
              <div className="clearfixform" />
              {/*------- TClosing Date------*/}

              <TextInput
                title="Оголошення активне до:"
                type="date"
                placeholder="yyyy-mm-dd"
                value={this.state.vacancy.active_to_date}
                onChange={this.handleInputChange}
                name="active_to_date"
              />
              <span style={{ color: "red" }}>
                {this.state.errors["active_to_date"]}
              </span>
              <div className="clearfixform" />
              {/*------- Company Details------*/}
              <div className="divider">
                <h3>Додатково про компанію</h3>
              </div>

              {/*------- Company Name------*/}

              <TextInput
                title="Компанія"
                type="text"
                placeholder="Назва компанії"
                value={this.state.vacancy.company}
                onChange={this.handleInputChange}
                name="company"
              />
              <span style={{ color: "red" }}>
                {this.state.errors["company"]}
              </span>
              <div className="clearfixform" />
              {/*------- Website------*/}

              <TextInput
                title="Вебсайт"
                type="text"
                placeholder="http://"
                onChange={this.handleInputChange}
                value={this.state.vacancy.website}
                name="website"
              />
              <div className="clearfixform" />

              <div className="divider margin-top-0" />
              <button
                className="button big margin-top-5"
                type="submit"
                id="vacancy"
              >
                Додати
              </button>

              <Modal
                isOpen={this.props.error}   
                onRequestClose={this.closeModal2}
                style={customStyles}
                contentLabel="Example Modal"
              >

                <h2 ref={subtitle => this.subtitle = subtitle}>
                  Форма заповнена не вірно
                </h2>
                <button onClick={this.closeModal2}>close</button>

              </Modal>

              <Modal
                isOpen={this.props.success}           
                onRequestClose={this.closeModal3}
                style={customStyles}
                contentLabel="Example Modal"
              >

                <h2 ref={subtitle => this.subtitle = subtitle}>
                  Вакансія надіслана успішно
                </h2>
                <button onClick={this.closeModal3}>close</button>

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
  vacancies: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  shouldUpdate:PropTypes.bool,
};

function mapStateToProps(state) {
  return {
    vacancy: state.vacancy,
    singleVacancy: state.vacancy.singleVacancy,
    shouldUpdate: state.vacancy.shouldUpdate,
    error: state.open.error,
    success: state.open.success,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddVacancyForm);
