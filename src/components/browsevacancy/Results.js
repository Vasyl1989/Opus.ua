import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import picture from '../../styles/images/job-list-logo-01.png';
import Widgets from './Widgets';
import BrowseByTitle from './BrowseByTitle';

class Results extends React.Component {
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
                if(vacancies.length>5){
                return (                 
                    <li className="vqvq"
                      key={number}
                      id={number}
                      onClick={this.handleClick}
                      >{number}  
                    </li>                
                );
                }else{
                 //do nothing
                }
              })
            }</ul></div>
        </div>
      );
    } else {
      return (
        <p>Вакансій не знайдено.</p>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <div className="eleven columns">
          <div className="padding-right">
            <BrowseByTitle/>  
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