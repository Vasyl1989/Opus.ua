import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as consts from '../../constants/const';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import { searchVacancy } from '../../actions/vacancyActions';
import TypeWork from './TypeWork';
import PricePerHour from './PricePerHour';

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
          <button className="button" onClick={(e) => { this.onSearchInput(e, this.state.city) }}>Пошук</button>
        </div>
        <TypeWork />
        <PricePerHour />
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
