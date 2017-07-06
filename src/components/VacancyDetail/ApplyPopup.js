import React from 'react';
import { PropTypes } from 'prop-types';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import TextInput from '../common/TextInput';
import { agreeToVacancy } from '../../actions/vacancyActions';
import { opening, closeSucces, closeError } from '../../actions/openActions';


const customStyles = {
  content: {
    padding: '0',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class ApplyPopup extends React.Component {
  constructor() {
    super();
    this.state = {
      users_vacancy: {
        full_name: "",
        email: "",
        description: "",
        vacancy_id: "",
        file: []
      },
      errors: {},
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
    this.closeModal3 = this.closeModal3.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  openModal() {
    this.props.dispatch(opening());
  }

  closeModal() {
    this.props.dispatch(opening());
  }

  closeModal2() {
    this.props.dispatch(closeError());
  }

  closeModal3() { 
    this.props.dispatch(closeSucces());
    this.setState({users_vacancy:""});
  }

  handleValidation() {
    let users_vacancy = this.state.users_vacancy;
    let errors = {};
    let formIsValid = true;

    {/*------- full_name validation------*/ }
    if (!users_vacancy["full_name"]) {
      formIsValid = false;
      errors["title"] = "Це поле не може бути пустим";
    }

    {/*------- email validation------*/ }
    if (!users_vacancy["email"]) {
      formIsValid = false;
      errors["email"] = "Це поле не може бути пустим";
    }

    {/*------- description validation------*/ }
    if (!users_vacancy["description"]) {
      formIsValid = false;
      errors["description"] = "Це поле не може бути пустим";
    }

    {/*------- email validation------*/ }
    if (!users_vacancy["file"]) {
      formIsValid = false;
      errors["file"] = "Ви повинні додати файл";
    }
    this.setState({ errors: errors });
    return formIsValid;
  }

  onChange(e) {
    const users_vacancy = Object.assign({}, this.state.users_vacancy);
    users_vacancy[e.target.name] = e.target.value;
    users_vacancy.file = this.fileUpload.files[0];
    this.setState({ users_vacancy: users_vacancy });
    const vacancy = this.props.singleVacancy;
    const id = vacancy.id;
    users_vacancy.vacancy_id = id;
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.dispatch(agreeToVacancy(this.state.users_vacancy));
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Погодитись на цю роботу</button>
        <Modal
          isOpen={this.props.isOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="applypopup">
            <div className="small-dialog-headline">
              <h2 >Погодитись на цю роботу</h2>
            </div>
            <button onClick={this.closeModal} className="mfp-close" />
            <div className="small-dialog-content">
              <form onSubmit={this.onFormSubmit} encType="multipart/form-data">
                <TextInput
                  type="text"
                  placeholder="Повне ім'я"
                  name="full_name"
                  value={this.state.users_vacancy.full_name}
                  onChange={this.onChange} />
                <span className="errorMassage" style={{ color: "red" }}>{this.state.errors["full_name"]}</span>
                <div className="clearfixform" />

                <TextInput
                  type="email"
                  name="email"
                  value={this.state.users_vacancy.email}
                  placeholder="Електронна адреса"
                  onChange={this.onChange} />
                <span className="errorMassage" style={{ color: "red" }}>{this.state.errors["email"]}</span>
                <div className="clearfixform" />

                <textarea
                  className="WYSIWYG"
                  id="summary"
                  value={this.state.users_vacancy.description}
                  onChange={this.onChange}
                  name="description"
                  placeholder="Ваше повідомлення / лист, який ви хочете надіслати роботодівцю" />
                <span className="errorMassage" style={{ color: "red" }}>{this.state.errors["description"]}</span>
                <div className="clearfixform" />

                <div className="upload-info">
                  <strong>Завантажити ваше резюме</strong>
                  <span>Максимальний розмір файлу: 5MB</span>
                </div>
                <div className="clearfix" />
                
                <input
                  id="file"
                  ref={(ref) => this.fileUpload = ref}
                  type="file"
                  onChange={this.onChange}
                  name="file" 
                  />
                  <label htmlFor="file" className="upload-btn">
                 <i className="fa fa-upload" />
                  Завантажити</label>
                <span className="errorMassage" style={{ color: "red" }}>{this.state.errors["file"]}</span>
                <div className="divider" />


                <button className="send" type="submit">Надіслати заявку</button>

                <Modal
                  isOpen={this.props.error}
                  onRequestClose={this.closeModal2}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <h2 ref={subtitle => this.subtitle = subtitle}>Спробуйте надіслати заявку ще раз</h2>
                  <button onClick={this.closeModal2}>close</button>
                </Modal>


                <Modal
                  isOpen={this.props.success}
                  onRequestClose={this.closeModal3}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <h2 ref={subtitle => this.subtitle = subtitle}>Заявка надіслана успішно</h2>
                  <button onClick={this.closeModal3}>close</button>
                </Modal>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

ApplyPopup.PropTypes = {
  isOpen: PropTypes.bool,
  
};

function mapStateToProps(state) {
  return {
    users_vacancy: state.users_vacancy,
    singleVacancy: state.vacancy.singleVacancy,
    isOpen: state.open.isOpen,
    error: state.open.error,
    success: state.open.success,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyPopup);