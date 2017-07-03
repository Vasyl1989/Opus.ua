import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { searchVacancy } from '../../actions/vacancyActions';
import { PAGES } from '../../constants/const';


class AllCategory extends React.Component {
  constructor(props) {
    super(props);
    this.serchSubmit = this.serchSubmit.bind(this);
  }
  serchSubmit(e) {
    e.preventDefault();
    const category=e.currentTarget.dataset.name;
    const query = {category};
    this.props.searchVacancy(query,PAGES.BROWSE_CATEGORIES,true);
  }
  render() {
    return (
      <div id="categories">
        <div className="container">
          <div className="sixteen columns">
            <ul id="popular-categories">
              <li><a href="" data-name='Автоперевезення / Логістика'onClick={(e)=>{this.serchSubmit(e)}}><i className="ln  ln-icon-Globe"/> Автоперевезення / Логістика</a></li>
              <li><a href="" data-name='Будівництво' onClick={(e)=>{this.serchSubmit(e)}}><i className="ln ln-icon-Worker"/> Будівництво</a></li>
              <li><a href="" data-name='Виробництво' onClick={(e)=>{this.serchSubmit(e)}}><i className="ln  ln-icon-Factory"/> Виробництво</a></li>
              <li><a href="" data-name='ІТ' onClick={(e)=>{this.serchSubmit(e)}}><i className="ln ln-icon-Computer-2"/> ІТ</a></li>
              <li><a href="" data-name='Краса та здоров/я' onClick={(e)=>{this.serchSubmit(e)}}><i className="ln ln-icon-Gemini-2"/> Краса та здоров'я</a></li>
              <li><a href="" data-name='Медицина' onClick={(e)=>{this.serchSubmit(e)}}><i className="ln  ln-icon-Medical-Sign"/> Медицина</a></li>
              <li><a href="" data-name='Навчання та репетиторство' onClick={(e)=>{this.serchSubmit(e)}}><i className="ln ln-icon-Student-Female"/> Навчання та репетиторство</a></li>
              <li><a href="" data-name='Робочі спеціальності' onClick={(e)=>{this.serchSubmit(e)}}><i className="ln ln-icon-Gear-2"/>Робочі спеціальності</a></li>
              <li><a href="" data-name='Сільськогосподарські роботи' onClick={(e)=>{this.serchSubmit(e)}}><i className="ln  ln-icon-Farmer"/>Сільськогосподарські роботи</a></li>
              <li><a href="" data-name='Сфера обслуговування' onClick={(e)=>{this.serchSubmit(e)}}><i className="ln  ln-icon-Plates"/> Сфера обслуговування</a></li>
              <li><a href="" data-name='Телекомунікація' onClick={(e)=>{this.serchSubmit(e)}}><i className="ln  ln-icon-Laptop-3"/> Телекомунікація</a></li>
              <li><a href="" data-name='Управління персоналом' onClick={(e)=>{this.serchSubmit(e)}}><i className="ln  ln-icon-People-onCloud" /> Управління персоналом</a></li>
            </ul>
            <div className="clearfix"/>
            <div className="margin-top-30"/>
            <div className="margin-top-30"/>
          </div>
        </div>
      </div>
    )
  }

}
AllCategory.PropTypes = {
  searchVacancy: PropTypes.func.isRequired,
};
function mapStateToProps(state) {
  return { vacancy: state.vacancy };
}
export default connect(mapStateToProps, { searchVacancy })(AllCategory);