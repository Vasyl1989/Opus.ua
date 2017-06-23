import React from 'react';
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
      city: '',
      isChecked: false
    };
    this.inputChange = this.inputChange.bind(this);
    this.onSearchInput = this.onSearchInput.bind(this);
  }
  inputChange(e) {
    this.setState({ city: e.target.value })
  }
  onSearchInput(e, city) {
    e.preventDefault();
    const query = { city };
    this.props.searchVacancy(query, consts.PAGES.BROWSE_VACANCY);
  }
  render() {
    return (
      <div>
        <div className="widget">
          <h4>Сортувати за </h4>
          <SelectInput
            data-placeholder="Choose Category"
            className="chosen-select-no-single"
            options={consts.SORTING}
          />
        </div>

        <div className="widget">

          <TextInput
            type="text"
            placeholder="Місто"
            value={this.state.city}
            onChange={this.inputChange}
            autoComplete="on" 
            onKeyPress={(e) => { if (e.key == 'Enter') { this.onSearchInput(e, this.state.city); } }}
          />
          <button className="button" onClick={(e)=>{this.onSearchInput(e,this.state.city)}}>Пошук</button>

        </div>

        <div className="widget">
          <h4>Тип роботи</h4>
          <ul className="checkboxes">
            <li>
              <input
                id="check-1"
                type="checkbox"
                name="check"

                value="check-1" />
              <label htmlFor="check-1">будь-який</label>
            </li>
            <li>
              <input
                id="check-2"
                type="checkbox"
                name="check"

                value="check-2" />
              <label htmlFor="check-2">Повна занятість <span></span></label>
            </li>
            <li>
              <input
                id="check-3"
                type="checkbox"
                name="check"

                value="check-3" />
              <label htmlFor="check-3">Часткова занятість <span></span></label>
            </li>
            <li>
              <input
                id="check-4"
                type="checkbox"
                name="check"

                value="check-4" />
              <label htmlFor="check-4">Інтернатура <span></span></label>
            </li>
            <li>
              <input
                id="check-5"
                type="checkbox"

                name="check"
                value="check-5" />
              <label htmlFor="check-5">Фріланс <span></span></label>
            </li>
          </ul>
        </div>

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
      </div>
    );
  }
}
Widgets.PropTypes = {
  searchVacancy: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
  onSearchInput: PropTypes.func.isRequired,
}
function mapStateToProps(state) {
  return {
    vacancy: state.vacancy,
    SearchResults: state.vacancy.SearchResults,
  };
}

export default connect(mapStateToProps, { searchVacancy })(Widgets);
