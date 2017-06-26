import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class TypeWork extends React.Component {
  render() {
    return (
      <div className="widget">
        <h4>Тип роботи</h4>
        <ul className="checkboxes">
          <li>
            <input
              id="check-2"
              type="checkbox"
              name="check"

              value="full-time" />
            <label htmlFor="check-2">Повна занятість <span></span></label>
          </li>
          <li>
            <input
              id="check-3"
              type="checkbox"
              name="check"

              value="part-time" />
            <label htmlFor="check-3">Часткова занятість <span></span></label>
          </li>
          <li>
            <input
              id="check-4"
              type="checkbox"
              name="check"

              value="internship" />
            <label htmlFor="check-4">Інтернатура <span></span></label>
          </li>
          <li>
            <input
              id="check-5"
              type="checkbox"

              name="check"
              value="freelance" />
            <label htmlFor="check-5">Фріланс <span></span></label>
          </li>
        </ul>
      </div>
    )
  }
}
export default TypeWork;