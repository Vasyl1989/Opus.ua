import React from "react";
import { Link } from 'react-router';

class RegistrationLogin extends React.Component {
  render() {
    return (
          <ul className="tabs-nav">
                  <li><Link to={"/registration"}> Sign Up</Link></li>
                  <li><Link to={"/login"}>Log In</Link></li>
          </ul>
    );
  }
}
export default RegistrationLogin;