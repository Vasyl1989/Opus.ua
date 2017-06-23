import React from 'react';
import { connect } from 'react-redux';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { getVacancyById } from '../../actions/vacancyActions';
import picture from '../../styles/images/company-logo.png';

class VacancyDetail extends React.Component {

  componentDidMount () {
    this.props.getVacancyById(this.props.params.id, this.props.vacancies);
    window.scrollTo(0, 0);
  }

  render() {

    const vacancy = this.props.singleVacancy;

    return (
      <div>
        <Header />
        {/*Titlebar*/}
        <div id="titlebar">
          <div className="container">
            <div className="ten columns">
              <span><a href="browse-jobs.html">{vacancy.category}</a></span>
              <h2>{vacancy.title}<span className="full-time">{vacancy.job_type}</span></h2>
            </div>
          </div>
        </div>

        {/*companyInfo*/}
        <div className="container form-add-job">
          <div className="eleven columns">
            <div className="padding-right">

              <div className="company-info">
                <img src={picture} alt="" />
                <div className="content">
                  <h4>Компанія:{vacancy.company}</h4>
                  <span><a href="#"><i className="fa fa-link"></i> {vacancy.website}</a></span>
                </div>
                <div className="clearfix"></div>
              </div>
              <p className="margin-reset">  {vacancy.description} </p>
            </div>
          </div>
          <div className="five columns">
            <div className="widget">
              <h4>Загальний перегляд</h4>

              <div className="job-overview">

                <ul>
                  <li>
                    <i className="fa fa-map-marker"></i>
                    <div>
                      <strong>Локація</strong>
                      <span>{vacancy.city}</span>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-user"></i>
                    <div>
                      <strong>Назва роботи</strong>
                      <span>{vacancy.title}</span>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-money"></i>
                    <div>
                      <strong>Оплата праці</strong>
                      <span>{vacancy.price_per_hour} / год</span>
                    </div>
                  </li>
                </ul>

                <a href="#small-dialog" className="popup-with-zoom-anim button">Погодитись на цю роботу</a>

                <div id="small-dialog" className="zoom-anim-dialog mfp-hide apply-popup">
                  <div className="small-dialog-headline">
                    <h2>Погодитись на цю роботу</h2>
                  </div>

                  <div className="small-dialog-content">
                    <form action="#" method="get">
                      <input type="text" placeholder="Повне ім'я" value="" />
                      <input type="text" placeholder="Електронна адреса" value="" />
                      <textarea placeholder="Ваше повідомлення / лист, який ви хочете надіслати роботодівцю"></textarea>
                      <div className="divider"></div>

                      <button className="send">Надіслати заявку</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    singleVacancy: state.vacancy.singleVacancy,
    vacancies: state.vacancy.vacancies
  };
}

export default connect(mapStateToProps, { getVacancyById })(VacancyDetail);
