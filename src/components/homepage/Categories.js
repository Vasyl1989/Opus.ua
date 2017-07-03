import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { searchVacancy } from '../../actions/vacancyActions';
import { PAGES } from '../../constants/const';
import { browserHistory } from 'react-router';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.serchSubmit = this
      .serchSubmit
      .bind(this);
    this.transition = this
      .transition
      .bind(this);
  }

  serchSubmit(e) {
    e.preventDefault();
    const category = e.currentTarget.dataset.name;
    const query = { category };
    this.props.searchVacancy(query, PAGES.HOME_PAGE, true);
  }

  transition(e) {
    e.preventDefault();
    browserHistory.push('/browse_categories');
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="sixteen columns">
            <h3 className="margin-bottom-25">Актуальні категорії</h3>
            <ul id="popular-categories">
              <li><a href="" data-name="Управління персоналом" onClick={(e) => { this.serchSubmit(e); }}>
                <i className="ln ln-icon-People-onCloud" />Управління персоналом
</a></li>
              <li><a href="" data-name="ІТ" onClick={(e) => { this.serchSubmit(e); }}>
                <i className="ln ln-icon-Computer-2" /> ІТ
</a></li>
              <li><a href="" data-name="Будівництво" onClick={(e) => { this.serchSubmit(e); }}>
                <i className="ln ln-icon-Worker" />Будівництво
</a></li>
              <li><a href="" data-name="Навчання та репетиторство" onClick={(e) => { this.serchSubmit(e); }}>
                <i className="ln ln-icon-Student-Female" />Навчання та репетиторство
</a></li>
              <li><a href="" data-name="Медицина" onClick={(e) => { this.serchSubmit(e); }}>
                <i className="ln  ln-icon-Medical-Sign" />Медицина
</a></li>
              <li><a href="" data-name="Сфера обслуговування" onClick={(e) => { this.serchSubmit(e); }}>
                <i className="ln  ln-icon-Plates" /> Сфера обслуговування
</a></li>
              <li><a href="" data-name="Автоперевезення / Логістика" onClick={(e) => { this.serchSubmit(e); }}>
                <i className="ln  ln-icon-Globe" />Автоперевезення / Логістика
</a></li>
              <li><a href="" data-name="Телекомунікація" onClick={(e) => { this.serchSubmit(e); }}>
                <i className="ln  ln-icon-Laptop-3" />Телекомунікація
</a></li>
            </ul>

            <div className="clearfix" />
            <div className="margin-top-30" />

            <a href="" className="button centered" onClick={(e) => { this.transition(e); }}>Показати усі категорії</a>
            <div className="margin-bottom-50" />
          </div>
        </div >
      </div >
    );
  }
}

Categories.PropTypes = {
  searchVacancy: PropTypes.func.isRequired,
  transition: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { vacancy: state.vacancy };
}

export default connect(mapStateToProps, { searchVacancy })(Categories);
