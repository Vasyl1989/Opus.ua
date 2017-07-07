import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router';
import Modal from 'react-modal';
import { signUp } from '../../actions/registrationActions';
import { closeSucces, closeError } from '../../actions/openActions';

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

class RegistrationForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			user: {
				first_name: "",
				last_name: "",
				email: "",
				password: "",
				password_confirmation: "",
			},
			errors: {},
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.closeModal2 = this.closeModal2.bind(this);
		this.closeModal3 = this.closeModal3.bind(this);
	}

	handleInputChange(e) {
		const user = Object.assign({}, this.state.user);
		user[e.target.name] = e.target.value;
		this.setState({ user: user });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.handleValidation();
		this.props.dispatch(signUp(this.state.user));
	}

	closeModal2() {
		this.props.dispatch(closeError());
	}

	closeModal3() {
		this.props.dispatch(closeSucces());
	}

	//validation
	handleValidation() {
		let user = this.state.user;
		let errors = {};
		let formIsValid = true;

		{	/*------- first_name validation------*/ }
		if (!user["first_name"]) {
			formIsValid = false;
			errors["first_name"] = "Це поле не може бути пустим";
		}

		{/*------- email validation------*/ }
		if (!user["email"]) {
			formIsValid = false;
			errors["email"] = "Це поле не може бути пустим";
		}
		{/*------- password validation------*/ }
		if (!user["password"]) {
			formIsValid = false;
			errors["password"] = "Це поле не може бути пустим,довжина більше 8 символів";
		}
		if (!user["password_confirmation"]) {
			formIsValid = false;
			errors["password_confirmation"] = "Паролі повинні співпадати";
		}

		this.setState({ errors: errors });
		return formIsValid;
	}
	render() {
		return (
			<div className="container">
				<div className="my-account">
					<ul className="tabs-nav">
						<li className="active"><Link to={"/registration"}> Sign Up</Link></li>
						<li><Link to={"/login"}>Log In</Link></li>
					</ul>
					<div className="tabs-container">
						<div className="tab-content" id="tab1" >
							<form onSubmit={this.handleSubmit} className="register">

								<p className="form-row form-row-wide">
									<label htmlFor="username2">Username: <i className="ln ln-icon-Male" />
										<input
											type="text"
											className="input-text"
											name="first_name"
											id="username2"
											onChange={(e) => { this.handleInputChange(e); }}
											value={this.state.user.first_name} />
									</label>
									<span className="errorMassage" style={{ color: "red" }}>
										{this.state.errors["first_name"]}
									</span>
								</p>

								<p className="form-row form-row-wide">
									<label htmlFor="email2">Email Address:
						<i className="ln ln-icon-Mail" />
										<input
											type="text"
											className="input-text"
											name="email"
											id="email2"
											onChange={(e) => { this.handleInputChange(e); }}
											value={this.state.user.email} />
									</label>
									<span className="errorMassage" style={{ color: "red" }}>
										{this.state.errors["email"]}
									</span>
								</p>
								<p className="form-row form-row-wide">
									<label htmlFor="password1">Password:
						<i className="ln ln-icon-Lock-2" />
										<input
											className="input-text"
											type="password"
											name="password"
											id="password1"
											onChange={(e) => { this.handleInputChange(e); }}
											value={this.state.user.password}
										/>
									</label>
									<span className="errorMassage" style={{ color: "red" }}>
										{this.state.errors["password"]}
									</span>
								</p>

								<p className="form-row form-row-wide">
									<label htmlFor="password2">Repeat Password:
						<i className="ln ln-icon-Lock-2" />
										<input
											className="input-text"
											type="password"
											name="password_confirmation"
											id="password2"
											onChange={(e) => { this.handleInputChange(e); }}
											value={this.state.user.password_confirmation}
										/>
									</label>
									<span className="errorMassage" style={{ color: "red" }}>
										{this.state.errors["password_confirmation"]}
									</span>
								</p>

								<p className="form-row">
									<button
										className="button big margin-top-5"
										type="submit"
										name="register"
									>
										Зареєструватись
              </button>
								</p>
								<Modal
									isOpen={this.props.error}
									onRequestClose={this.closeModal2}
									style={customStyles}
									contentLabel="Example Modal"
								>
									<h2 ref={subtitle => this.subtitle = subtitle}>
										Ви не змогли зареєструвалися
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
										Ви успішно зареєструвалися 
                </h2>
									<button onClick={this.closeModal3}>close</button>
								</Modal>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
RegistrationForm.PropTypes = {

};
function mapStateToProps(state) {
	return {
		user: state.registration,
		error: state.open.error,
		success: state.open.success,
	};
}
function mapDispatchToProps(dispatch) {
	return { dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
