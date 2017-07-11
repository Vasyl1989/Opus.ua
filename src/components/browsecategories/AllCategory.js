import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { searchVacancy } from '../../actions/vacancyActions';
import { PAGES, configCategory } from "../../constants/constants";


class AllCategory extends React.Component {
  constructor(props) {
    super(props);
    this.serchSubmit = this.serchSubmit.bind(this);
  }
  serchSubmit(e) {
    e.preventDefault();
    const category = e.currentTarget.dataset.name;
    const query = { category };
    this.props.searchVacancy(query, PAGES.BROWSE_CATEGORIES, true);
  }
  renderCategory() {
    const categories = configCategory;
    return (
      <div>
        <ul id="popular-categories">
          {
            categories.map((item) => {
              return (<li key={item.id}>
                <a href="" data-name={item.category} onClick={(e) => { this.serchSubmit(e); }}>
                  <i className={item.iClass} />{item.category}</a>
              </li>
              );
            })
          }
        </ul>
      </div> 
    );  
  }
  render() {
    return (
      <div id="categories">
        <div className="container">
          <div className="sixteen columns">
            {this.renderCategory()}
            <div className="clearfix" />
            <div className="margin-top-30" />
            <div className="margin-top-30" />
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
  return { vacancy: state.vacancy };
}
export default connect(mapStateToProps, { searchVacancy })(AllCategory);