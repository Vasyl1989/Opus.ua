import React from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'prop-types';

class Footer extends React.Component {


  render() {
    return (
      <div>
        <div className="margin-top-15"></div>

        <div id="footer">

          <div className="container">

            <div className="sixteen columns">
              <h4>Про нас</h4>
              <p><strong className="slidesStrong">OPUS.ua</strong> покликаний надавати широкий вибір у вашому
      пошуку за багатьма критеріями. Список оголошень оновлюється щодня. Ви можете порівняно
       швидко і легко знайти необхідну роботу всього лише заповнивши резюме або пошукати в розділах
       вакансій. <strong className="slidesStrong">OPUS.ua</strong> створений
       для людей, які шукають тимчасову роботу, без посередників і не мають досвіду роботи.</p>
              <Link to="/" className="button" id='startbutton' >Почати</Link>
            </div>
          </div>


          <div className="container">
            <div className="footer-bottom">
              <div className="sixteen columns">
                <h4>Follow Us</h4>
                <ul className="social-icons">
                  <li><a className="facebook" href="#"><i className="icon-facebook"/></a></li>
                  <li><a className="twitter" href="#"><i className="icon-twitter"/></a></li>
                  <li><a className="gplus" href="#"><i className="icon-gplus"/></a></li>
                  <li><a className="linkedin" href="#"><i className="icon-linkedin"/></a></li>
                </ul>

              </div>
            </div>
          </div>

        </div>
        <div id="backtotop"><a href="#" ></a></div>
      </div>
    );
  }

};

export default Footer;