import React from "react";
// import  PropTypes  from "prop-types";
import { connect } from "react-redux";
import { Link } from 'react-router';

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
	}
	handleInputChange(e) {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		this.setState({ [name]: value });
	}
	handleSubmit(e) {
		console.log('state login', this.state);
		e.preventDefault();
		this.handleValidation();
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
									<input type="submit" className="button border fw margin-top-10" name="login" value="Login" />
								</p>

								

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
		state
	};
}
function mapDispatchToProps(dispatch) {
	return { dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
