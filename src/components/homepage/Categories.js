import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { searchVacancy } from '../../actions/vacancyActions';
import { PAGES, configCategory } from '../../constants/constants';
import { Link } from 'react-router';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.serchSubmit=this.serchSubmit.bind(this);
  }

  serchSubmit(e) {
    e.preventDefault();
    const category = e.currentTarget.dataset.name;
    const query = { category };
    this.props.searchVacancy(query, PAGES.HOME_PAGE, true);
  }
  
  renderCategory() {
    const categories = configCategory;
    const ourCategory = categories.filter((item) => {
      return item.id <= 8;
    });
    return (
      <div>
        <ul id="popular-categories">
          {
            ourCategory.map((item,index) => {
              return (<li key={index}><a href="" data-name={item.category} onClick={(e) => { this.serchSubmit(e); }}>
                <i className={item.iClass} /> Управління персоналом
         </a></li>
              );
            })
          }
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="sixteen columns">
            <h3 className="margin-bottom-25">Актуальні категорії</h3>
            {this.renderCategory()}
            <div className="clearfix" />
            <div className="margin-top-30" />
            <Link to="/browse_categories" className="button centered" >Показати усі категорії</Link>
            <div className="margin-bottom-50" />
          </div>
        </div>
      </div>
    );
  }

}

Categories.PropTypes = {
  searchVacancy: PropTypes.func.isRequired,
  renderCategory:PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { vacancy: state.vacancy };
}
export default connect(mapStateToProps, { searchVacancy })(Categories);
