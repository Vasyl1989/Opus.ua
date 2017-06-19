import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getAllVacancy } from '../../actions/vacancyActions';
import { Link, browserHistory } from 'react-router';

class ResentVacancy extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      currentPage: 1,
      vacancyPerPage: 10
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.getAllVacancy();
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
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
              return (<li className="highlighted" key={item.id} >
                <Link to={"VacancyDetail/" + item.id}
                  onClick={() => {
                    browserHistory.push(item.id);
                  }}>

                  <img src="styles/images/job-list-logo-01.png" alt="" />
                  <div className="job-list-content">
                    <h4>{item.title}
                      <span className="full-time">{item.job_type}</span>
                    </h4>
                    <div className="job-icons">
                      <span>
                        <i className="fa fa-briefcase"></i>Компанія:
                        {item.company}</span>
                      <span>
                        <i className="fa fa-map-marker"></i>
                        {item.city}</span>
                      <span>
                        <i className="fa fa-money"></i>
                        {item.price_per_hour}
                        / hour</span>
                    </div>
                  </div>
                </Link>
                <div className="clearfix"></div>
              </li>);

            })
          }

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
    // console.log('----------------------------', this.props.vacancy.vacancies.length);
    return (

      <div className="container">


        <div className="sixteen columns">
          <div className="padding-right">
            <h3 className="margin-bottom-25">Актуальні вакансії</h3>

            {this.props.vacancy.vacancies && this.renderVacancies()}

            <div className="margin-bottom-55"></div>
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
  return { vacancy: state.vacancy };
}

export default connect(mapStateToProps, { getAllVacancy })(ResentVacancy);