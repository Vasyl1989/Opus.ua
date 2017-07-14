import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getAllVacancy, pagination } from '../../actions/vacancyActions';
import { Link, browserHistory } from 'react-router';
import picture from '../../styles/images/job-list-logo-01.png';

class ResentVacancy extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      currentPage: 1,
      vacancyPerPage: 6,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.getAllVacancy();
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
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

  renderVacancies() {
    const vacancies = this.props.vacancy.vacancies;
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
        <ul className="job-list">
          {
            currentVacancise.map((item, index) => {
              const job_type = item.job_type;
              return (<li className="highlighted" key={index} >
                <Link to={"vacancy_detail/" + item.id}
                  onClick={() => { browserHistory.push(item.id); }}>
                  <img src={picture} />
                  <div className="job-list-content">
                    <h4>{item.title}
                      <span className={this.spanColor({ job_type })}>{item.job_type}</span>
                    </h4>
                    <div className="job-icons">
                      <span>
                        <i className="fa fa-briefcase" />Компанія:
                        {item.company}</span>
                      <span>
                        <i className="fa fa-map-marker" />
                        {item.city}</span>
                      <span>
                        <i className="fa fa-money" />
                        {item.price_per_hour}
                        / hour</span>
                    </div>
                  </div>
                </Link>
                <div className="clearfix" />
              </li>);
            })
          }
        </ul>
        <div className="pagination">
          <ul >{
            pageNumbers.map(number => {
              if (vacancies.length > 5) {
                return (
                  <li className="vqvq"
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                  >{number}
                  </li>
                );
              } else {
                //do nothing
              }
            })
          }</ul></div>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="sixteen columns">
          <div className="padding-right">
            <h3 className="margin-bottom-25">Актуальні вакансії</h3>
            {this.props.vacancy.vacancies && this.renderVacancies()}
            <div className="margin-bottom-55" />
          </div>
        </div>
      </div>
    );
  }
}

ResentVacancy.PropTypes = {
  handleClick: PropTypes.func.isRequired,
  handleOpenVacancy: PropTypes.func.isRequired,
  renderVacancies: PropTypes.func.isRequired,
  vacancies: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    vacancy: state.vacancy,
  };
}

export default connect(mapStateToProps, { getAllVacancy, pagination })(ResentVacancy);