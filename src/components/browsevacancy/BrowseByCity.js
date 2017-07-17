import React from 'react';
import { connect } from 'react-redux';
import * as consts from '../../constants/constants';
import * as types from '../../actions/actionTypes';
import TextInput from '../common/TextInput';
import { searchVacancy } from '../../actions/vacancyActions';
import { serializeArrayToQueryString, addJobType } from './TypeWork';




class BrowseByCity extends React.Component {
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
    const category=this.props.filter.category;
    const prMn = this.props.filter.prMn;
    const prMx = this.props.filter.prMx;
    const title = this.props.filter.title;
    const type = this.props.type_work;
    const checkedElement =this.props.filter.check;
    const job_type = serializeArrayToQueryString(addJobType(this.props.filter, type, checkedElement));
    const query = { city, prMn, prMx, title, job_type,category};
     // TODO save city to store
    this.props.dispatch({ type: types.ABOUT_SEARCH.SET_CITY, payload: city });
    this.props.dispatch(searchVacancy(query, consts.PAGES.BROWSE_VACANCY));
  }
  render() {
    return (
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
    );
  }
}
function mapStateToProps(state) {
  return {
    filter: state.filter,
  };
}
function mapDispatchToProps(dispatch) {
  return { dispatch };
}
export default connect(mapStateToProps, mapDispatchToProps)(BrowseByCity);