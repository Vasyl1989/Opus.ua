import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import picture from '../../styles/images/job-list-logo-01.png';
import Widgets from "./Widgets";


class SearchResult extends React.Component {
    renderVacancy() {
        const vacancies = this.props.SearchResults;
        return (
            <div>
                <ul className="job-list full">
                    {vacancies.map((item, index) => {
                        return (<li className="highlighted" key={item.id} >
                            <Link to={"VacancyDetail/" + item.id}
                                onClick={() => {
                                    browserHistory.push(item.id);
                                }}>
                                <img src={picture} />
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
                        </li>

                        )
                    })}
                </ul>
                <div className="clearfix"></div>
            </div>
        )


    }
    render() {
        console.log('--------->', this.props.SearchResults)
        return (
            <div className="container">
                

                <div className="eleven columns">
                    <div className="padding-right">


                        {this.props.SearchResults && this.renderVacancy()}

                        <div className="margin-bottom-55"></div>
                    </div>

                </div>
                <Widgets />
            </div>
        )

    }
}
SearchResult.PropTypes = {
    renderVacancy: PropTypes.func.isRequired,
    vacancies: PropTypes.array.isRequired
};
function mapStateToProps(state) {
    return {
        vacancy: state.vacancy,
        SearchResults: state.vacancy.SearchResults
    }
}

export default connect(mapStateToProps)(SearchResult);