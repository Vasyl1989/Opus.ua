import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Header from '../common/Header';
import Footer from '../common/Footer';
import * as consts from '../../constants/constants';
import * as types from '../../actions/actionTypes';
import { PAGES } from '../../constants/constants';
import picture from '../../styles/images/company-logo.png';
import { getVacancyById, searchVacancy } from '../../actions/vacancyActions';
import { serializeArrayToQueryString, addJobType } from '../browsevacancy/TypeWork';
import ApplyPopup from './ApplyPopup';

class VacancyDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.filter.category,
    };
    this.serchSubmit = this.serchSubmit.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getVacancyById(this.props.params.id, this.props.vacancies));
    window.scrollTo(0, 0);
  }

  serchSubmit(e) {
    e.preventDefault();
    this.setState({ category: e.currentTarget.dataset.name });
    const category = e.currentTarget.dataset.name;
    console.log("AAAA", category);
    var id;
    if (category === "Автоперевезення / Логістика") {
      id = 1;
      console.log(id);
    } else if (category === "Будівництво") {
      id = 2;
    } else if (category === "Виробництво") {
      id = 3;
    } else if (category === "IТ") {
      id = 4;
    } else if (category === "Краса та здоровя") {
      id = 5;
    } else if (category === "Медицина") {
      id = 6;
    } else if (category === "Навчання та репетиторство") {
      id = 7;
    } else if (category === "Робочі спеціальності") {
      id = 8;
    } else if (category === "Сільськогосподарські роботи") {
      id = 9;
    } else if (category === "Сфера обслуговування") {
      id = 10;
    } else if (category === "Телекомунікація") {
      id = 11;
    } else if (category === "Управління персоналом") {
      id = 12;
    }
    const city = this.props.filter.city
    const prMn = this.props.filter.prMn;
    const prMx = this.props.filter.prMx;
    const title = this.props.filter.title;
    const type = this.props.type_work;
    const checkedElement = this.props.filter.check;
    const job_type = serializeArrayToQueryString(addJobType(this.props.filter, type, checkedElement));
    const query = { category, city, prMn, prMx, title, job_type };
    // TODO save city to store
    this.props.dispatch({ type: types.ABOUT_SEARCH.SET_CATEGORY, payload: category });
    this.props.dispatch(searchVacancy(query, consts.PAGES.BROWSE_CATEGORIES, true, id));


    // const category = e.currentTarget.dataset.name;
    // const query = { category };
    // this.props.searchVacancy(query, PAGES.BROWSE_CATEGORIES);
  }

  spanColor({ job_type }) {
    if (job_type === "Повна зайнятість") {
      return ("full-time");
    } else if (job_type === "Часткова зайнятість") {
      return ("part-time");
    } else if (job_type === "Фріланс") {
      return ("freelance");
    } else if (job_type === "Інтернатура") {
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
              <span><a href="" data-name={vacancy.category} onClick={(e) => { this.serchSubmit(e); }}>{vacancy.category}</a></span>
              <h2>{vacancy.title}<span className={this.spanColor({ job_type })}>{vacancy.job_type}</span></h2>
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
                  <span><a href="#"><i className="fa fa-link" /> {vacancy.website}</a></span>
                </div>
                <div className="clearfix" />
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

VacancyDetail.PropTypes = {
  searchVacancy: PropTypes.func.isRequired,
  getVacancyById: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    singleVacancy: state.vacancy.singleVacancy,
    vacancies: state.vacancy.vacancies,
    filter: state.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(VacancyDetail);
