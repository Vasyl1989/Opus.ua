import React from 'react';
import '../../styles/styles.css';
import { Link } from 'react-router';
import { connect } from "react-redux";
import { signOut } from '../../actions/registrationActions';

class HeaderHomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.logOut = this.logOut.bind(this);
  }
  // componentDidMount() {
  //   this.props.getUser();
  // this.props.user.user.first_name;
  // }

  logOut(e) {
    e.preventDefault();
    this.props.dispatch(signOut());
    localStorage.removeItem('client');
    localStorage.removeItem("token");
    localStorage.removeItem('uid');
  }

  logOutMenu() {
    if (this.props.user.logIn === true) {
      const nnnnn = localStorage.getItem('name');
      console.log(nnnnn);
      const name = this.props.user.user.first_name;
      console.log(this.props.user.user);
      return (<ul className="responsive float-right">
        <li ><a href=""><i className="fa fa-user" /> {nnnnn}</a></li>
        <li ><a href="" onClick={this.logOut}><i className="fa fa-lock" />Вийти</a></li>
      </ul>);
    } else {
      return (<ul className="responsive float-right">
        <li ><Link to={"/registration"}><i className="fa fa-user" /> Зареєструватись</Link></li>
        <li ><Link to={"/login"}><i className="fa fa-lock" />Увійти</Link></li>
      </ul >);
    }
  }

  render() {
    return (
      <div id="headerhomepage">
        <header className="transparent sticky-header full-width headerhomepage">
          <div className="container">
            <div className="sixteen columns">
              <div id="logo">
                <h1>
                  <Link to={"/"}>OPUS.ua</Link>
                </h1>
              </div>
              <nav id="navigation" className="menu">
                <ul id="responsive">
                  <li>
                    <Link to={"/"}>Головна</Link>
                  </li>
                  <li>
                    <a href="#">Працівнику</a>
                    <ul>
                      <li>
                        <Link to="/browse_categories">Вакансії за категорями</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Роботодавцю</a>
                    <ul>
                      <li>
                        <Link to={"/add_vacancy"}>Створити вакансію</Link>
                      </li>
                      <li>
                        <Link to={"/manage_vacancy"}>Редагувати вакансію</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                {this.logOutMenu()}
              </nav>
              {/*Navigation*/}
              <div id="mobile-navigation">
                <a href="#menu" className="menu-trigger"><i className="fa fa-reorder" /> Menu</a>
              </div>
            </div>
          </div>
        </header>
        <div className="clearfix" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.registration,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderHomePage);
