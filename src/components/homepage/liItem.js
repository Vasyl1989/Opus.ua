/*import React from 'react';
import {PropTypes} from 'prop-types';

const liItem = ({item,index}) => {

  return (
    <li className="highlighted" key={index}>
      <a href="VacancyDetail">
        <img src="styles/images/job-list-logo-01.png" alt=""/>
        <div className="job-list-content">
          <h4>{item.title}
            <span className="full-time">{item.job_type}</span>
          </h4>
          <div className="job-icons">
            <span>
              <i className="fa fa-briefcase"></i>
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
      </a>
      <div className="clearfix"></div>
    </li>
  )
}
liItem.PropTypes = {
  // vacancies: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired
  
}

export default liItem;*/