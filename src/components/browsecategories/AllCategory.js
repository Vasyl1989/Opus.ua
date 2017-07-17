import React from 'react';
import { Link } from 'react-router';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { searchVacancy } from '../../actions/vacancyActions';
import { PAGES, categoriesConfig } from '../../constants/constants';

class AllCategory extends React.Component {
  constructor(props) {
    super(props);
    this.serchSubmit = this.serchSubmit.bind(this);
  }

  serchSubmit(e, { id }) {
    e.preventDefault();
    console.log(id);
    const category = e.currentTarget.dataset.name;
    const query = { category };
    this.props.searchVacancy(query, PAGES.BROWSE_CATEGORIES, true, id);
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
                  onClick={(e) => { this.serchSubmit(e, { id }); }}>
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
  return { vacancy: state.vacancy };
}

export default connect(mapStateToProps, { searchVacancy })(AllCategory);