import React from 'react';
import '../../styles/styles.css';
import { Link } from 'react-router';
import { connect } from "react-redux";
import { signOut, getUser } from '../../actions/registrationActions';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.logOut = this.logOut.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getUser());
  }

  logOut(e) {
    e.preventDefault();
    this.props.dispatch(signOut());
  }

  logOutMenu() {
    if (this.props.user.logIn === true) {
      const name = this.props.user.user.first_name;

      return (<ul className="responsive float-right">
        <li ><a href=""><i className="fa fa-user" /> {name}</a></li>
        <li ><a href="" onClick={this.logOut}><i className="fa fa-lock" />Вийти</a></li>
      </ul>);
    } else {
      return (<ul className="responsive float-right">
        <li ><Link to={"/registration"}><i className="fa fa-user" /> Зареєструватись</Link></li>
        <li ><Link to={"/login"}><i className="fa fa-lock" />Увійти</Link></li>
      </ul>);
    }
  }

  logFeathers() {
    if (this.props.user.logIn === true) {
      return (
        <ul>
          <li>
            <Link to={"/add_vacancy"}>Створити вакансію</Link>
          </li>
          <li>
            <Link to={"/manage_vacancy"}>Редагувати вакансію</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <Link to={"/add_vacancy"}>Створити вакансію</Link>
          </li>

        </ul>
      );
    }
  }

  render() {
    return (
      <div>
        <header className="sticky-header">
          <div className="container">
            <div className="sixteen columns">

              {/*--------Logo-------*/}
              <div id="logo">
                <h1>
                  <Link to={"/"}>OPUS.ua</Link>
                </h1>
              </div>

              {/*---------Menu-------*/}
              <nav id="navigation" className="menu sf-js-enabled sf-arrows">
                <ul id="responsive">
                  <li>
                    <Link to={"/"}>Головна</Link>
                  </li>
                  <li>
                    <a href="#" >Працівнику</a>
                    <ul>
                      <li>
                        <Link to="/browse_categories">Вакансії за категорями</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Роботодавцю</a>
                     {this.logFeathers()}
                  </li>
                </ul>
                {this.logOutMenu()}
              </nav>

              {/*-------Navigation-----*/}
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);

