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
      page: 1,
      per: 3
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const page = this.state.page;
    const per = this.state.per;
    const query = { page, per };
    this.props.pagination(query);
    this.setState({ page: this.state.page + 1 });
  }

  handleClick(event) {
    const page = this.state.page;
    const per = 3;
    const query = { page, per };
    this.props.pagination(query);
    this.setState({ page: this.state.page + 1 });
  }
  spanColor({ job_type }) {
    //debugger;
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

    const vacancies = this.props.paginationData;

    return (
      <div>
        <ul className="job-list">
          {
            vacancies.map((item, index) => {
              const job_type = item.job_type;
              return (<li className="highlighted" key={index} >
                <Link to={"vacancy_detail/" + item.id}
                  onClick={() => {
                    browserHistory.push(item.id);
                  }}>

                  <img src={picture} />
                  <div className="job-list-content">
                    <h4>{item.title}
                      <span className={this.spanColor({ job_type })}>{item.job_type}</span>
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
            <button onClick={this.handleClick}>
              <ul>
                <li>Показати ще</li>
              </ul>
            </button>
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
  return {
    vacancy: state.vacancy,
    paginationData: state.vacancy.paginationData
  };
}

export default connect(mapStateToProps, { getAllVacancy, pagination })(ResentVacancy);