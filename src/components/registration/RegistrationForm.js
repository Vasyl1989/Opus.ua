import React from 'react';
import Modal from "react-modal";
import { connect } from 'react-redux';
import * as Actions from '../../actions/registrationActions';
import { closeOpenSucces, closeOpenError } from '../../actions/openActions';

const customStyles = {
  content: {
    padding: "10px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class RegistrationForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      statesValue: null,
      forbiddenWords: ["password", "user", "username"]
    };
    this.registrationInputChange = this.registrationInputChange.bind(this);
    this.registrationSubmit = this.registrationSubmit.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
    this.closeModal3 = this.closeModal3.bind(this);
  }

  registrationInputChange(e) {
    const user = Object.assign({}, this.state.user);
    console.log(user);
    user[e.target.name] = e.target.value;
    this.setState({ user: user });
  }

  registrationSubmit(event) {
    event.preventDefault();
    this.props.dispatch(Actions.sendRegistration(this.state.user));
  }

  closeModal2() {
    this.props.dispatch(closeOpenError());
  }

  closeModal3() {
    this.props.dispatch(closeOpenSucces());
  }

  render() {
    return (
      <form method="post" className="register" onSubmit={this.registrationSubmit}>
        <p className="form-row form-row-wide">
          <label htmlFor="username2">Ім'я користувача:
						<i className="ln ln-icon-Male" />
            <input
              type="text"
              className="input-text"
              name="first_name"
              id="username2"
              value={this.state.user.first_name}
              onChange={this.registrationInputChange} />
          </label>
        </p>

        <p className="form-row form-row-wide">
          <label htmlFor="email2">Електронна адреса:
						<i className="ln ln-icon-Mail" />
            <input
              type="text"
              className="input-text"
              name="email"
              id="email2"
              value={this.state.user.email}
              onChange={this.registrationInputChange} />
          </label>
        </p>

        <p className="form-row form-row-wide">
          <label htmlFor="password1">Пароль:
						<i className="ln ln-icon-Lock-2" />
            <input
              className="input-text"
              type="password"
              name="password"
              id="password1"
              value={this.state.user.password}
              onChange={this.registrationInputChange} />
          </label>
        </p>

        <p className="form-row form-row-wide">
          <label htmlFor="password2">Веедіть пароль ще раз:
						<i className="ln ln-icon-Lock-2" />
            <input
              className="input-text"
              type="password"
              name="password_confirmation"
              id="password2"
              value={this.state.user.password_confirmation}
              onChange={this.registrationInputChange} />
          </label>
        </p>

        <p className="form-row">
          <button
            className="button border fw margin-top-10"
            type="submit"
            name="register">Зареєструватись
          </button>
        </p>

        <Modal
          isOpen={this.props.error}
          onRequestClose={this.closeModal2}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>
            Ви не змогли зареєструватись на сайті
          </h2>
          <button onClick={this.closeModal2}>close</button>
        </Modal>

        <Modal
          isOpen={this.props.success}
          onRequestClose={this.closeModal3}
          style={customStyles}
          contentLabel="Example Modal">
          <h2 ref={subtitle => this.subtitle = subtitle}>
            Ви успішно зареєструвались)
          </h2>
          <button onClick={this.closeModal3}>close</button>
        </Modal>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.registration,
    singleVacancy: state.vacancy.singleVacancy,
    error: state.open.error,
    success: state.open.success,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);