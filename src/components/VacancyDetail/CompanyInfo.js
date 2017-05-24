// Company Info 
import React from 'react';
import Widgets from './Widgets';
const CompanyInfo=()=>{
    return(
        <div className="container">
        <div className="eleven columns">
            <div className="padding-right">

              <div className="company-info">
                 <img src="./styles/images/company-logo.png" alt=""/>
                   <div className="content">
                     <h4>King LLC</h4>
                      <span><a href="#"><i className="fa fa-link"></i> Website</a></span>
                      <span><a href="#"><i className="fa fa-twitter"></i> @kingrestaurants</a></span>
                   </div>
                     <div className="clearfix"></div>
               </div>
          <p className="margin-reset">  The Food Service Specialist ensures outstanding customer 
              service is provided to food customers and that all food offerings meet the required stock 
              levels and presentation standards. Beginning your career as a Food Steward will give you a strong
               foundation in Speedway’s food segment that can make you a vital member of the front line team! </p>
         
         <br/>
         <p>The <strong>Food Service Specialist</strong> will have responsibilities that include:</p>
           <ul className="list-1">
             <li>Executing the Food Service program, including preparing and presenting our wonderful food offerings
              to hungry customers on the go! </li>
             <li>Greeting customers in a friendly manner and suggestive selling and sampling items to help increase sales.</li>
             <li>Keeping our Store food area looking terrific and ready for our valued customers by managing product 
              inventory, stocking, cleaning, etc.</li>
             <li>We’re looking for associates who enjoy interacting with people and working in a fast-paced environment!</li>
          </ul>
             <br/>

           <h4 className="margin-bottom-10">Job Requirment</h4>

    <ul className="list-1">
      <li>Excellent customer service skills, communication skills, and a happy, smiling attitude are essential.</li>
      <li>Must be available to work required shifts including weekends, evenings and holidays.</li>
      <li>Must be able to perform repeated bending, standing and reaching.</li>
      <li> Must be able to occasionally lift up to 50 pounds</li>
    </ul>
            </div>
        </div>
        <Widgets />
        </div>
    );
}
export default CompanyInfo;