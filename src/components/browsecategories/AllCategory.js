import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { searchVacancy } from '../../actions/vacancyActions';
import { PAGES, categoriesConfig } from '../../constants/constants';
import * as types from '../../actions/actionTypes';
import { serializeArrayToQueryString, addJobType } from '../browsevacancy/TypeWork';


class AllCategory extends React.Component {
  constructor(props ,context) {
    super(props, context);
    this.state={
      category:this.props.filter.category,
    };
    this.serchSubmit = this.serchSubmit.bind(this);
  }

  serchSubmit(e,{id}) {
    e.preventDefault();
    this.setState({category:e.currentTarget.dataset.name});
    const category = e.currentTarget.dataset.name;
    const city=this.props.filter.city;
    const prMn = this.props.filter.prMn;
    const prMx = this.props.filter.prMx;
    const title = this.props.filter.title;
    const type = this.props.type_work;
    const checkedElement =this.props.filter.check;
    const job_type = serializeArrayToQueryString(addJobType(this.props.filter, type, checkedElement));
    const query = {category, city, prMn, prMx, title, job_type };
    this.props.dispatch({type:types.ABOUT_SEARCH.SET_CATEGORY,payload:category});
    this.props.dispatch(searchVacancy(query, PAGES.BROWSE_CATEGORIES, true,id));
  }

  renderCategories() {
    const categories = categoriesConfig;
    return (
      <ul id="popular-categories">
        {
          categories.map((item, index) => {
            const id = item.id;
            return (
              <li key={index}>
                <a href=""
                  id={id}
                  data-name={item.title}
                  onClick={(e) => { this.serchSubmit(e,{id}); }}>
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

AllCategory.PropTypes = {
  searchVacancy: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
     filter: state.filter,  
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCategory);