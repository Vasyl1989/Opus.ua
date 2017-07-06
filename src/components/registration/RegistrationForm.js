import React from "react";
// import  PropTypes  from "prop-types";
// import { connect } from "react-redux";
import RegistrationLogin from './RegistrationLogin';

class RegistrationForm extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="my-account">
					<RegistrationLogin />
					<div className="tabs-container">
						<div className="tab-content" id="tab1" >
							<form method="post" className="register">

								<p className="form-row form-row-wide">
									<label htmlFor="username2">Username:
						<i className="ln ln-icon-Male" />
										<input
											type="text"
											className="input-text"
											name="username"
											id="username2"
											value="" />
									</label>
								</p>

								<p className="form-row form-row-wide">
									<label htmlFor="email2">Email Address:
						<i className="ln ln-icon-Mail" />
										<input
											type="text"
											className="input-text"
											name="email"
											id="email2"
											value="" />
									</label>
								</p>

								<p className="form-row form-row-wide">
									<label htmlFor="password1">Password:
						<i className="ln ln-icon-Lock-2" />
										<input
											className="input-text"
											type="password"
											name="password1"
											id="password1" />
									</label>
								</p>

								<p className="form-row form-row-wide">
									<label htmlFor="password2">Repeat Password:
						<i className="ln ln-icon-Lock-2" />
										<input
											className="input-text"
											type="password"
											name="password2"
											id="password2" />
									</label>
								</p>

								<p className="form-row">
									<input type="submit" className="button border fw margin-top-10" name="register" value="Register" />
								</p>

							</form>
						</div>
					</div>
				</div>
			</div>



		);
	}
}
export default RegistrationForm;