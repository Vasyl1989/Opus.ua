import React from 'react';
import { connect } from 'react-redux';
import { searchVacancy } from '../../actions/vacancyActions';
import { PAGES } from '../../constants/constants';
import * as types from '../../actions/actionTypes';
import { serializeArrayToQueryString, addJobType } from './TypeWork';

class BrowseByTitle extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: this.props.filter.title,
    };
    this.inputChange = this.inputChange.bind(this);
    this.onSearchInput = this.onSearchInput.bind(this);
  }

  inputChange(e) {
    this.setState({ title: e.target.value });
  }

  onSearchInput(e, title) {
    e.preventDefault();
    const category = this.props.filter.category;
    const city = this.props.filter.city;
    const prMn = this.props.filter.prMn;
    const prMx = this.props.filter.prMx;
    const type = this.props.type_work;
    const checkedElement = this.props.filter.check;
    const job_type = serializeArrayToQueryString(addJobType(this.props.filter, type, checkedElement));
    const query = { category, title, city, prMn, prMx, job_type };
    this.props.dispatch({ type: types.ABOUT_SEARCH.SET_TITLE, payload: title });
    this.props.dispatch(searchVacancy(query, PAGES.BROWSE_VACANCY));
  }

  render() {
    return (<div>
      <form className="list-search">
        <button type="submit" onClick={(e) => { this.onSearchInput(e, this.state.title); }}><i className="fa fa-search" /></button>
        <input
          type="text"
          placeholder="Вакансія..."
          value={this.state.title}
          onChange={this.inputChange}
          autoComplete="on"
          onKeyPress={(e) => { if (e.key == 'Enter') { this.onSearchInput(e, this.state.title); } }}
        />
        <div className="clearfix" />
      </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(BrowseByTitle);
