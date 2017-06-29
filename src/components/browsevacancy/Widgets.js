import React from 'react';
import Slider from './prise';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as consts from '../../constants/const';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import { searchVacancy } from '../../actions/vacancyActions';

class Widgets extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      city: "",
      job_type: "",
      isChecked: false
    };
    this.inputChange = this.
      inputChange
      .bind(this);
    this.onSearchInput = this
      .onSearchInput
      .bind(this);
  }

  inputChange(e) {
    let isChecked = false;
    this.setState({
      city: e.target.value,
      job_type: e.target.value
    });
    if (isChecked === true) {
      console.log(e.target.value);
    }
  }

  onSearchInput(e, city) {
    e.preventDefault();
    const query = { city };
    this.props.searchVacancy(query, consts.PAGES.BROWSE_VACANCY);
  }


  render() {

    return (
      <div>
        <h4>Сортувати за </h4>
        <div className="widget">
          <TextInput
            type="text"
            placeholder="Місто"
            value={this.state.city}
            onChange={this.inputChange}
            autoComplete="on"
            onKeyPress={(e) => { if (e.key == 'Enter') { this.onSearchInput(e, this.state.city); } }}
          />
          <button className="button" onClick={(e) => { this.onSearchInput(e, this.state.city); }}>Пошук</button>
        </div>

        <div className="widget">
          <h4>Тип роботи</h4>
          <ul className="checkboxes">
            <li >
              <input
                id="check-1"
                type="checkbox"
                name="check"
                value="Будь-який" />
              <label htmlFor="check-1">
                Будь-який
              </label>
            </li>
            <li>
              <input
                id="check-2"
                type="checkbox"
                name="check"
                value="Повна занятість" />
              <label htmlFor="check-2">
                Повна занятість <span />
              </label>
            </li>
            <li>
              <input
                id="check-3"
                type="checkbox"
                name="check"
                value="Часткова занятість" />
              <label htmlFor="check-3">
                Часткова занятість <span />
              </label>
            </li>
            <li>
              <input
                id="check-4"
                type="checkbox"
                name="check"
                value="Інтернатура " />
              <label htmlFor="check-4">Інтернатура <span /></label>
            </li>
            <li>
              <input
                id="check-5"
                type="checkbox"
                name="check"
                value="Фріланс" />
              <label htmlFor="check-5">Фріланс <span /></label>
            </li>
          </ul>
        </div>


        <Slider />
      </div >
    );
  }
}

Widgets.PropTypes = {
  searchVacancy: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
  onSearchInput: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    vacancy: state.vacancy,
    SearchResults: state.vacancy.SearchResults,
  };
}

export default connect(mapStateToProps, { searchVacancy })(Widgets);