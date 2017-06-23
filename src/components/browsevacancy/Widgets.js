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

      isChecked: false

    };
   this.toggleCheck=this.toggleCheck.bind(this);
  }
   toggleCheck(){
     this.setState({isCheck:!this.state.isCheck})
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
          />
          <button className="button">Пошук</button>

        </div>

        <div className="widget">
          <h4>Тип роботи</h4>
          <ul className="checkboxes">
            <li>
              <input
                id="check-1"
                type="checkbox"
                name="check"
                onChange={this.toggleChange}
                checked={this.state.isChecked}
                value="check-1" />
              <label htmlFor="check-1">будь-який</label>
            </li>
            <li>
              <input
                id="check-2"
                type="checkbox"
                name="check"
                onChange={this.toggleChange}
                checked={this.state.isChecked}
                value="check-2" />
              <label htmlFor="check-2">Повна занятість <span></span></label>
            </li>
            <li>
              <input
                id="check-3"
                type="checkbox"
                name="check"
                checked={this.state.isChecked}
                onChange={this.toggleChange}
                value="check-3" />
              <label htmlFor="check-3">Часткова занятість <span></span></label>
            </li>
            <li>
              <input
                id="check-4"
                type="checkbox"
                name="check"
                checked={this.state.isChecked}
                onChange={this.toggleChange}
                value="check-4" />
              <label htmlFor="check-4">Інтернатура <span></span></label>
            </li>
            <li>
              <input
                id="check-5"
                type="checkbox"
                checked={this.state.isChecked}
                onChange={this.toggleChange}
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
                checked={this.state.isChecked}
                onChange={this.toggleChange}
                name="check"
                value="check-6"
              />
              <label htmlFor="check-6">Будь-яка</label>
            </li>
            <li>
              <input
                id="check-7"
                type="checkbox"
                checked={this.state.isChecked}
                onChange={this.toggleChange}
                name="check"
                value="check-7" />
              <label htmlFor="check-7">0грн - 25грн <span></span></label>
            </li>
            <li>
              <input
                id="check-8"
                type="checkbox"
                checked={this.state.isChecked}
                onChange={this.toggleChange}
                name="check"
                value="check-8" />
              <label htmlFor="check-8">25грн - 50грн <span></span></label>
            </li>
            <li>
              <input
                id="check-9"
                checked={this.state.isChecked}
                onChange={this.toggleChange}
                type="checkbox"
                name="check"
                value="check-9" />
              <label htmlFor="check-9">50грн - 100грн <span /></label>
            </li>
            <li>
              <input
                id="check-10"
                type="checkbox"
                checked={this.state.isChecked}
                onChange={this.toggleChange}
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
function mapStateToProps(state) {
  return { vacancy: state.vacancy };
}

export default connect(mapStateToProps, { searchVacancy })(Widgets);
