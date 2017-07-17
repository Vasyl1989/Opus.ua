import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as consts from '../../constants/constants';
import * as types from '../../actions/actionTypes';
import { searchVacancy } from '../../actions/vacancyActions';
import { PAGES, categoriesConfigHome } from '../../constants/constants';
import { serializeArrayToQueryString, addJobType } from '../browsevacancy/TypeWork';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.filter.category,
    };
    this.serchSubmit = this.serchSubmit.bind(this);
  }

  serchSubmit(e) {
    e.preventDefault();
    this.setState({ category: e.currentTarget.dataset.name });
    const category = e.currentTarget.dataset.name;
    const city = this.props.filter.city
    const prMn = this.props.filter.prMn;
    const prMx = this.props.filter.prMx;
    const title = this.props.filter.title;
    const type = this.props.type_work;
    const checkedElement = this.props.filter.check;
    const job_type = serializeArrayToQueryString(addJobType(this.props.filter, type, checkedElement));
    const query = { category, city, prMn, prMx, title, job_type };
    // TODO save city to store
    this.props.dispatch({ type: types.ABOUT_SEARCH.SET_CATEGORY, payload: category });
    this.props.dispatch(searchVacancy(query, consts.PAGES.BROWSE_CATEGORIES, true));
  }

  renderCategories() {
    const aaa = categoriesConfigHome;
    return (
      <ul id="popular-categories">
        {
          aaa.map((item, index) => {
            return (
              <li key={index}>
                <a href=""
                  data-name={item.title}
                  onClick={(e) => { this.serchSubmit(e); }}>
                  <i className={item.className} /> {item.title}
                </a>
              </li>
            );
          })
        }
      </ul>
    );
  }

  render() {
    return (
      <div id="categories">
        <div className="container">
          <div className="sixteen columns">
            {this.renderCategories()}
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
