import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { searchVacancy } from '../../actions/vacancyActions';
import { PAGES, categoriesConfigHome } from '../../constants/constants';

class Categories extends React.Component {
  constructor(props) {
    super(props);
  }
  serchSubmit(e) {
    e.preventDefault();
    const category = e.currentTarget.dataset.name;
    const query = { category };
    this.props.searchVacancy(query, PAGES.HOME_PAGE, true);
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

Categories.PropTypes = {
  searchVacancy: PropTypes.func.isRequired,

};

function mapStateToProps(state) {
  return { vacancy: state.vacancy };
}

export default connect(mapStateToProps, { searchVacancy })(Categories);
