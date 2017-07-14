import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { searchVacancy } from '../../actions/vacancyActions';
import { PAGES } from '../../constants/constants';
import * as types from '../../actions/actionTypes';

class TitleFilter extends React.Component {
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
    const query = { title };
    this.props.dispatch({ type: types.ABOUT_SEARCH.SET_TITLE, payload: title });
    this.props.dispatch(searchVacancy(query, PAGES.BROWSE_VACANCY));
  }
  render() {
    return (
      <div>
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
    vacancy: state.vacancy,
    SearchResults: state.vacancy.SearchResults,
    filter: state.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleFilter);