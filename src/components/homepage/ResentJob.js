import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getAllVacancies } from '../../actions/jobActions';


class ResentJob extends React.Component {

  handleOpenVacancy() {
    this.props.getAllVacancies();
  }

  renderVacancies() {
    const vacancies = this.props.vacancy.vacancies;
    return vacancies.map((item, index) => {
      return (
        <li className="highlighted" key={index}>
          <a href="VacancyDetail">
            <img src="styles/images/job-list-logo-01.png" alt="" />
            <div className="job-list-content">
              <h4>{item.title}<span className="full-time">{item.job_type}</span></h4>
              <div className="job-icons">
                <span><i className="fa fa-briefcase"></i>{item.city}</span>
                <span><i className="fa fa-map-marker"></i> {item.company}</span>
                <span><i className="fa fa-money"></i> {item.price_per_hour}</span>
              </div>
            </div>
          </a>
          <div className="clearfix"></div>
        </li>
      );
    });
  }

  render() {
    console.log('----------------------------', this.props);
    return (

      <div className="container">
        <a onClick={this.handleOpenVacancy.bind(this)}>Show</a>

        <div className="sixteen columns">
          <div className="padding-right">
            <h3 className="margin-bottom-25">Актуальні вакансії</h3>
            <ul className="job-list">


              <li className="highlighted">
                <a href="VacancyDetail">
                  <img src="styles/images/job-list-logo-01.png" alt="" />
                  <div className="job-list-content">
                    <h4>Marketing Coordinator - SEO / SEM Experience <span className="full-time">Full-Time</span></h4>
                    <div className="job-icons">
                      <span><i className="fa fa-briefcase"></i> King</span>
                      <span><i className="fa fa-map-marker"></i> Sydney</span>
                      <span><i className="fa fa-money"></i> $100 / hour</span>
                    </div>
                  </div>
                </a>
                <div className="clearfix"></div>
              </li>
              {this.props.vacancy.vacancies && this.renderVacancies()}
            </ul>
            <a href="browse-jobs.html" className="button centered"><i className="fa fa-plus-circle"></i> Показати більше вакансій</a>
            <div className="margin-bottom-55"></div>
          </div>

        </div>
      </div>


    );
  }

}

ResentJob.PropTypes = {
  handleOpenVacancy: PropTypes.func.isRequired,
  vacances: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    vacancy: state.vacancy
  };
}

export default connect(mapStateToProps, { getAllVacancies })(ResentJob);