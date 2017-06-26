import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';


class PricePerHour extends React.Component{
render(){
  return(
    <div className="widget">
          <h4>Погодинна оплата</h4>
          <ul className="checkboxes">
            <li>
              <input
                id="check-6"
                type="checkbox"

                name="check"
                value="check-6"
              />
              <label htmlFor="check-6">Будь-яка</label>
            </li>
            <li>
              <input
                id="check-7"
                type="checkbox"

                name="check"
                value="check-7" />
              <label htmlFor="check-7">0грн - 25грн <span></span></label>
            </li>
            <li>
              <input
                id="check-8"
                type="checkbox"

                name="check"
                value="check-8" />
              <label htmlFor="check-8">25грн - 50грн <span></span></label>
            </li>
            <li>
              <input
                id="check-9"

                type="checkbox"
                name="check"
                value="check-9" />
              <label htmlFor="check-9">50грн - 100грн <span /></label>
            </li>
            <li>
              <input
                id="check-10"
                type="checkbox"

                name="check"
                value="check-10" />
              <label htmlFor="check-10">100грн - 200грн <span /></label>
            </li>
          </ul>
        </div>
  )
}
}
export default PricePerHour;

