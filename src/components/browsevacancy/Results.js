import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import picture from '../../styles/images/job-list-logo-01.png';
import { getAllVacancy } from '../../actions/vacancyActions';
import Widgets from './Widgets';

class Results extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentPage: 1,
      vacancyPerPage: 10
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  renderVacancy() {
    const vacancies = this.props.SearchResults;
    console.log(vacancies);
    console.log(this.props.vacancy.vacancies);

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

    return (
      <div>
        <ul className="job-list full">
          {currentVacancise.map((item) => {
            return (<li className="highlighted" key={item.id} >
              <Link to={"vacancy_detail/" + item.id}
                onClick={() => { browserHistory.push(item.id); }}>
                <img src={picture} />
                <div className="job-list-content">
                  <h4>{item.title}
                    <span className="full-time">{item.job_type}</span>
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
  }

  render() {
    return (
      <div className="container">
        <div className="eleven columns">
          <div className="padding-right">
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
  vacancies: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    vacancy: state.vacancy,
    SearchResults: state.vacancy.SearchResults
  };
}

export default connect(mapStateToProps, { getAllVacancy })(Results);