import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { searchVacancy } from '../../actions/vacancyActions';
import { PAGES } from '../../constants/const';

class Categories extends React.Component{
  constructor(props) {
    super(props);
    this.serchSubmit = this.serchSubmit.bind(this);
  }
  serchSubmit(e) {
    e.preventDefault();
    const category=e.currentTarget.dataset.name;
    const query = {category};
    this.props.searchVacancy(query,PAGES.HOME_PAGE);
  }
  render(){
   return (
    <div>
      <div className="container">
        <div className="sixteen columns">
          <h3 className="margin-bottom-25">Актуальні категорії</h3>
          <ul id="popular-categories">
            <li><a href="" data-name='Управління персоналом' onClick={(e)=>{this.serchSubmit(e)}}>
              <i className="ln ln-icon-People-onCloud"></i> Управління персоналом
         </a></li>
            <li><a href="" data-name='ІТ' onClick={(e)=>{this.serchSubmit(e)}}>
              <i className="ln ln-icon-Computer-2"></i> ІТ
         </a></li>
            <li><a href="" data-name='Будівництво' onClick={(e)=>{this.serchSubmit(e)}}>
              <i className="ln ln-icon-Worker"></i> Будівництво
         </a></li>
            <li><a href="" data-name='Навчання та репетиторство' onClick={(e)=>{this.serchSubmit(e)}}>
              <i className="ln ln-icon-Student-Female"></i> Навчання та репетиторство
         </a></li>
            <li><a href="" data-name='Медицина' onClick={(e)=>{this.serchSubmit(e)}}>
              <i className="ln  ln-icon-Medical-Sign"></i> Медицина
         </a></li>
            <li><a href="" data-name='Сфера обслуговування' onClick={(e)=>{this.serchSubmit(e)}}>
              <i className="ln  ln-icon-Plates"></i> Сфера обслуговування
         </a></li>
            <li><a href="" data-name='Автоперевезення / Логістика' onClick={(e)=>{this.serchSubmit(e)}}>
              <i className="ln  ln-icon-Globe"></i> Автоперевезення / Логістика
         </a></li>
            <li><a href="" data-name='Телекомунікація' onClick={(e)=>{this.serchSubmit(e)}}>
              <i className="ln  ln-icon-Laptop-3"></i> Телекомунікація
         </a></li>
          </ul>

          <div className="clearfix"></div>
          <div className="margin-top-30"></div>

          <a href="BrowseCategories" className="button centered">Показати усі категорії</a>
          <div className="margin-bottom-50"></div>
        </div>
      </div>
    </div>
  );
  }
  
};
Categories.PropTypes = {
  searchVacancy: PropTypes.func.isRequired
};
function mapStateToProps(state) {
  return { vacancy: state.vacancy };
}
export default connect(mapStateToProps, { searchVacancy })(Categories);
