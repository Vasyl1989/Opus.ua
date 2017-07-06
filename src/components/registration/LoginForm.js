import React from "react";
// import  PropTypes  from "prop-types";
// import { connect } from "react-redux";
import RegistrationLogin from './RegistrationLogin';

class LoginForm extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="my-account">
					<RegistrationLogin />
					<div className="tabs-container">
						<div className="tab-content" id="tab2" >
							<form method="post" className="login">

								<p className="form-row form-row-wide">
									<label htmlFor="username">Username:
							<i className="ln ln-icon-Male" />
										<input
											type="text"
											className="input-text"
											name="username"
											id="username"
											value="" />
									</label>
								</p>

								<p className="form-row form-row-wide">
									<label htmlFor="password">Password:
							<i className="ln ln-icon-Lock-2" />
										<input
											className="input-text"
											type="password"
											name="password"
											id="password" />
									</label>
								</p>

								<p className="form-row">
									<input type="submit" className="button border fw margin-top-10" name="login" value="Login" />

									<label htmlFor="rememberme" className="rememberme">
										<input
											name="rememberme"
											type="checkbox"
											id="rememberme"
											value="forever" />
										Remember Me</label>
								</p>

								<p className="lost_password">
									<a href="#" >Lost Your Password?</a>
								</p>

							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default LoginForm;