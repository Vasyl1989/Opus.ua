import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import TextInput from '../common/TextInput';
import * as Actions from '../../actions/vacancyActions';

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
      modalIsOpen: false,
      modalIsOpenTwo: false,
      modalIsOpenThree: false,
      users_vacancy: {
        full_name: "",
        email: "",
        description: "",
        vacancy_id: "",
        file: []
      },
      errors: {},
    };

    this.openModal = this
      .openModal
      .bind(this);
    this.afterOpenModal = this
      .afterOpenModal
      .bind(this);
    this.closeModal = this
      .closeModal
      .bind(this);

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed. 
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      modalIsOpenTwo: false,
      modalIsOpenThree: false,
    });
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
    const aaa = vacancy.id;
    users_vacancy.vacancy_id = aaa;
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.dispatch(Actions.sendVacancy2(this.state.users_vacancy));
    if (this.handleValidation()) {
      this.setState({ modalIsOpenTwo: true });
    } else {
      this.setState({ modalIsOpenThree: true });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Погодитись на цю роботу</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
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
                  ref={(ref) => this.fileUpload = ref}
                  type="file"
                  onChange={this.onChange}
                  name="file" />
                <span className="errorMassage" style={{ color: "red" }}>{this.state.errors["file"]}</span>
                <div className="divider" />
                <button className="send" type="submit">Надіслати заявку</button>


                <Modal
                  isOpen={this.state.modalIsOpenThree}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <h2 ref={subtitle => this.subtitle = subtitle}>Спробуйте надіслати заявку ще раз</h2>
                  <button onClick={this.closeModal}>close</button>
                </Modal>

                <Modal
                  isOpen={this.state.modalIsOpenTwo}
                  onAfterOpen={this.afterOpenModal}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <h2 ref={subtitle => this.subtitle = subtitle}>Заявка надіслана успішно</h2>
                  <button onClick={this.closeModal}>close</button>
                </Modal>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    users_vacancy: state.users_vacancy,
    singleVacancy: state.vacancy.singleVacancy,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

ApplyPopup.PropTypes = {
  dispatch: PropTypes.func.isRequired,
  singleVacancy: PropTypes.Object.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(ApplyPopup);