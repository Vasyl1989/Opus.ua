import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import picture from '../../styles/images/job-list-logo-01.png';
import { searchVacancy } from '../../actions/vacancyActions';
import Widgets from './Widgets';
import { PAGES } from '../../constants/constants';
import * as types from '../../actions/actionTypes';


class Results extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentPage: 1,
      vacancyPerPage: 6,
      title: this.props.filter.title,
    };
    this.handleClick = this.handleClick.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.onSearchInput = this.onSearchInput.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  inputChange(e) {
    this.setState({ title: e.target.value });
  }

  onSearchInput(e, title) {
    e.preventDefault();
    const query = { title };
    this.props.dispatch({ type: types.ABOUT_SEARCH.SET_TITLE, payload: title });
    this.props.dispatch(searchVacancy(query, PAGES.BROWSE_VACANCY));
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

  renderVacancy() {
    window.scrollTo(0, 0);
    const vacancies = this.props.SearchResults;
    //pagination
    // Logic for displaying vacancies
    const indexOfLastVacancy = this.state.currentPage * this.state.vacancyPerPage;
    const indexOfFirstVacancy = indexOfLastVacancy - this.state.vacancyPerPage;
    const currentVacancise = vacancies.slice(indexOfFirstVacancy, indexOfLastVacancy);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(vacancies.length / this.state.vacancyPerPage); i++) {
      pageNumbers.push(i);
    }
    if (vacancies.length > 0) {
      return (
        <div>

          <ul className="job-list full">
            {currentVacancise.map((item) => {
              const job_type = item.job_type;
              return (<li className="highlighted" key={item.id} >
                <Link to={"vacancy_detail/" + item.id}
                  onClick={() => { browserHistory.push(item.id); }}>
                  <img src={picture} />
                  <div className="job-list-content">
                    <h4>{item.title}
                      <span className={this.spanColor({ job_type })}>{item.job_type}</span>
                    </h4>
                    <div className="job-icons">
                      <span>
                        <i className="fa fa-briefcase" />Компанія:{item.company}
                      </span>
                      <span>
                        <i className="fa fa-map-marker" />{item.city}
                      </span>
                      <span>
                        <i className="fa fa-money" />{item.price_per_hour} грн/год
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="clearfix" />
              </li>
              );
            })}
          </ul>
          <div className="pagination">
            <ul >{
              pageNumbers.map(number => {
                return (
                  <button key={number}>
                    <li
                      key={number}
                      id={number}
                      onClick={this.handleClick}>{number}</li></button>
                );
              })
            }</ul></div>
        </div>
      );
    } else {
      return (
        <p>Вакансій не знайдено.</p>
      )

    }

  }

  render() {
    return (
      <div className="container">
        <div className="eleven columns">
          <div className="padding-right">
            <form className="list-search">
              <button type="submit" onClick={(e) => { this.onSearchInput(e, this.state.title); }}><i className="fa fa-search" /></button>
              <input
                type="text"
                placeholder="Вакансія..."
                value={this.state.title}
                onChange={this.inputChange}
                autoComplete="on"
                onKeyPress={(e) => { if (e.key == 'Enter') { this.onSearchInput(e, this.state.title); } }}
              />
              <div className="clearfix" />
            </form>
            {this.props.SearchResults && this.renderVacancy()}
            <div className="margin-bottom-55" />
          </div>
        </div>
        <div className="five columns">
          <Widgets />

        </div>
      </div>
    );
  }
}

Results.PropTypes = {
  renderVacancy: PropTypes.func.isRequired,
  vacancies: PropTypes.array.isRequired,
  searchVacancy: PropTypes.func.isRequired,
  onSearchInput: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
  spanColor: PropTypes.func.isRequired,
  isEmpty: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    vacancy: state.vacancy,
    SearchResults: state.vacancy.SearchResults,
    filter: state.filter,
  };
}
function mapDispatchToProps(dispatch) {
  return { dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(Results);