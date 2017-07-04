import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as consts from '../../constants/const';
import * as types from '../../actions/actionTypes';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import { searchVacancy } from '../../actions/vacancyActions';
import TypeWork from './TypeWork';
import PricePerHour from './PricePerHour';

class Widgets extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      city: this.props.filter.city,
    };
    this.inputChange = this.inputChange.bind(this);
    this.onSearchInput = this.onSearchInput.bind(this);
  }
  inputChange(e) {
    this.setState({ city: e.target.value });
  }
  onSearchInput(e, city) {
    e.preventDefault();
    const query = { city };
    // // TODO save city to store
    this.props.dispatch({ type: types.ABOUT_SEARCH.SET_CITY, payload: city });
    this.props.dispatch(searchVacancy(query, consts.PAGES.BROWSE_VACANCY));
  }
  render() {
    return (
      <div>
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
};

function mapStateToProps(state) {
  return {
    vacancy: state.vacancy,
    SearchResults: state.vacancy.SearchResults,
    filter: state.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
