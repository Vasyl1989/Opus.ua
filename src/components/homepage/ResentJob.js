import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../../actions/jobActions';


 class ResentJob extends React.Component {
   render(){
     return (

    <div className="container">
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

          </ul>
          <a href="browse-jobs.html" className="button centered"><i className="fa fa-plus-circle"></i> Показати більше вакансій</a>
          <div className="margin-bottom-55"></div>
        </div>
      </div>
    </div>


  );
   }
  
}
function mapStateToProps(state) {
 return {
  vacances: state.vacances
 };
}
function mapDispatchToProps(dispatch) {
 return {
  createVacancy: vacancy => dispatch(Actions.createVacancy(vacancy))
 };
}
export default connect(mapStateToProps,mapDispatchToProps)(ResentJob);