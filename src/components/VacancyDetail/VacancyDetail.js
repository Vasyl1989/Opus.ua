import React from 'react';
import { connect } from 'react-redux';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ApplyPopup from './ApplyPopup';
import * as consts from '../../constants/const';
import { getVacancyById, searchVacancy } from '../../actions/vacancyActions';
import picture from '../../styles/images/company-logo.png';

class VacancyDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ""
    };
    this.serchSubmit = this
      .serchSubmit
      .bind(this);
  }

  componentDidMount() {
    this.props.getVacancyById(this.props.params.id, this.props.vacancies);
    window.scrollTo(0, 0);
  }

  serchSubmit(e) {
    e.preventDefault();
    const category = e.currentTarget.dataset.name;
    const query = { category };
    this.props.searchVacancy(query, consts.PAGES.BROWSE_VACANCY);
  }

  spanColor({ job_type }) {
    //debugger;
    console.log(job_type);
    if (job_type === "Повна зайнятість") {
      console.log("full-time");
      return ("full-time");
    } else if (job_type === "Часткова зайнятість") {
      console.log("part-time");
      return ("part-time");
    } else if (job_type === "Фріланс") {
      console.log("freelance");
      return ("freelance");
    } else if (job_type === "Інтернатура") {
      console.log("internship");
      return ("internship");
    }
  }

  render() {
    const vacancy = this.props.singleVacancy;
    const job_type = vacancy.job_type;
    return (
      <div>
        <Header />
        {/*Titlebar*/}
        <div id="titlebar">
          <div className="container">
            <div className="ten columns">
              <span>
                <a href="browse-jobs.html"
                  data-name={vacancy.category}
                  onClick={(e) => { this.serchSubmit(e); }}>
                  {vacancy.category}</a>
              </span>
              <h2>{vacancy.title}<span className={this.spanColor({ job_type })}>{job_type}</span></h2>
            </div>
          </div>
          <div className="margin-bottom-55" />
        </div>

        {/*companyInfo*/}
        <div className="container form-add-job">
          <div className="eleven columns">
            <div className="padding-right">

              <div className="company-info">
                <img src={picture} alt="" />
                <div className="content">
                  <h4>Компанія:{vacancy.company}</h4>
                  <span><a href="#"><i className="fa fa-link" />{vacancy.website}</a></span>
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
                    <i className="fa fa-map-marker" />
                    <div>
                      <strong>Локація</strong>
                      <span>{vacancy.city}</span>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-user" />
                    <div>
                      <strong>Назва роботи</strong>
                      <span>{vacancy.title}</span>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-money" />
                    <div>
                      <strong>Оплата праці</strong>
                      <span>{vacancy.price_per_hour} / год</span>
                    </div>
                  </li>
                </ul>
                <ApplyPopup />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    singleVacancy: state.vacancy.singleVacancy,
    vacancies: state.vacancy.vacancies
  };
}

export default connect(mapStateToProps, { getVacancyById, searchVacancy })(VacancyDetail);
