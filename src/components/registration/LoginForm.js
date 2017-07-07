import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router';
import { singIn } from '../../actions/registrationActions';
import Modal from 'react-modal';
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

class LoginForm extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			email: "",
			password: "",
			errors: {},
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.closeModal2 = this.closeModal2.bind(this);
		this.closeModal3 = this.closeModal3.bind(this);
	}

	handleInputChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		this.setState({ [name]: value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.handleValidation();
		this.props.dispatch(singIn(this.state.email, this.state.password));
	}

	closeModal2() {
		this.props.dispatch(closeError());
	}

	closeModal3() {
		this.props.dispatch(closeSucces());
	}
	handleValidation() {
		let user = this.state;
		let errors = {};
		let formIsValid = true;
		{/*------- password validation------*/ }
		if (!user["password"]) {
			formIsValid = false;
			errors["password"] = "Це поле не може бути пустим,довжина більше 8 символів";
		}
		{	/*------- email validation------*/ }
		if (!user["email"]) {
			formIsValid = false;
			errors["email"] = "Це поле не може бути пустим";
		}
		this.setState({ errors: errors });
		return formIsValid;
	}
	render() {
		return (
			<div className="container">
				<div className="my-account">
					<ul className="tabs-nav">
						<li><Link to={"/registration"}> Sign Up</Link></li>
						<li className="active"><Link to={"/login"}>Log In</Link></li>
					</ul>
					<div className="tabs-container">
						<div className="tab-content" id="tab2" >
							<form onSubmit={this.handleSubmit} className="login">

								<p className="form-row form-row-wide">
									<label htmlFor="username">Email Address:
							<i className="ln ln-icon-Male" />
										<input
											type="text"
											className="input-text"
											name="email"
											id="username"
											onChange={this.handleInputChange}
											value={this.state.email} />
									</label>
									<span className="errorMassage" style={{ color: "red" }}>
										{this.state.errors["email"]}
									</span>
								</p>

								<p className="form-row form-row-wide">
									<label htmlFor="password">Password:
							<i className="ln ln-icon-Lock-2" />
										<input
											className="input-text"
											type="password"
											name="password"
											id="password"
											onChange={this.handleInputChange}
											value={this.state.password}
										/>
									</label>
									<span className="errorMassage" style={{ color: "red" }}>
										{this.state.errors["password"]}
									</span>
								</p>
								<p className="form-row">
									<button
										className="button big margin-top-5"
										type="submit"
										name="login"
									>	Login
              </button>
								</p>
								<Modal
									isOpen={this.props.error}
									onRequestClose={this.closeModal2}
									style={customStyles}
									contentLabel="Example Modal"
								>
									<h2 ref={subtitle => this.subtitle = subtitle}>
										Ви не змогли увійти на сайт <br />
										Перевірте емайл адресу та пароль
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
										Ви успішно авторизувались
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
function mapStateToProps(state) {
	return {
		error: state.open.error,
		success: state.open.success,
	};
}
function mapDispatchToProps(dispatch) {
	return { dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
