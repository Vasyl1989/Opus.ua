import React from 'react';
import { getAllVacancies } from '../../actions/jobActions';

export default ({ data, active }) => {
  if (!data || !data[active]) { return <h3>Nothing found :(</h3>; }


 const vacancy = data[active];

 return(
  <div className="company-info">
              <img src="./styles/images/company-logo.png" alt="" />
              <div className="content" >
                <h4>King LLC</h4>
                <span><a href="#"><i className="fa fa-link"></i> Webcitea</a></span>
                <span><a href="#"><i className="fa fa-twitter"></i> @kingrestaurants</a></span>
              </div>
              <div className="clearfix"></div>
            </div>
 );
};