import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router';
import { signUp } from '../../actions/registrationActions';

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
		this.setState({ user: "" });
		console.log('state reg', this.state);
	}
	//validation
	handleValidation() {
		let user = this.state.user;
		let errors = {};
		let formIsValid = true;

		{
			/*------- first_name validation------*/
		}
		if (!user["first_name"]) {
			formIsValid = false;
			errors["first_name"] = "Це поле не може бути пустим";
		}

		{
			/*------- email validation------*/
		}
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
											type="email"
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
								</p>

								<p className="form-row">
									<input
										type="submit"
										className="button border fw margin-top-10"
										name="register"
										value="Register" />
								</p>

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
	};
}
function mapDispatchToProps(dispatch) {
	return { dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
