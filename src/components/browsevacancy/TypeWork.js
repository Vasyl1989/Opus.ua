import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { searchVacancy } from '../../actions/vacancyActions';
import { filtration } from '../../actions/filterAction';
import * as consts from '../../constants/const';
import { bindActionCreators } from 'redux';
import * as types from '../../actions/actionTypes';

class TypeWork extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onCheck = this.onCheck.bind(this);
  }

  onCheck(e) {

    const job_type = e.target.value;
    const query =  job_type;
    // this.props.filtration(query);
    if(query==='Повна'){
      this.props.dispatch({ type: types.JOB_TYPE.SET_FULL_TIME, payload: query });
    }else if(query==='Фріланс'){
      this.props.dispatch({ type: types.JOB_TYPE.SET_FREELANCE, payload: query });
    }else if(query==='Часткова'){
      this.props.dispatch({ type: types.JOB_TYPE.SET_PART_TIME, payload: query });
    }else if(query==='Інтернатура'){
      this.props.dispatch({ type: types.JOB_TYPE.SET_INTERNSHIP, payload: query });
    }
    
    // this.props.dispatch(filtration(query));
    console.log('--=--------',this.props.filter);
    // TODO select and make query
   //передається пустим
    this.props.dispatch(searchVacancy(this.props.filter, consts.PAGES.BROWSE_VACANCY));



  }
  render() {
    return (
      <div className="widget">
        <h4>Тип роботи</h4>
        <ul className="checkboxes">
          <li>
            <input
              id="check-1"
              type="checkbox"
              name="check"
              onClick={this.onCheck}
              value="Повна" />
            <label htmlFor="check-1">Повна занятість <span></span></label>
          </li>
          <li>
            <input
              id="check-2"
              type="checkbox"
              name="check"
              onClick={this.onCheck}
              value="Часткова" />
            <label htmlFor="check-2">Часткова занятість <span></span></label>
          </li>
          <li>
            <input
              id="check-3"
              type="checkbox"
              name="check"
              onClick={this.onCheck}

              value="Інтернатура" />
            <label htmlFor="check-3">Інтернатура <span></span></label>
          </li>
          <li>
            <input
              id="check-4"
              type="checkbox"
              onClick={this.onCheck}

              name="check"
              value="Фріланс" />
            <label htmlFor="check-4">Фріланс <span></span></label>
          </li>

        </ul>
      </div>
    )
  }
}

TypeWork.PropTypes = {
  onCheck: PropTypes.func.isRequired,

}

function mapStateToProps(state) {
  return {
    vacancy: state.vacancy,
    SearchResults: state.vacancy.SearchResults,
    filter: state.filter,
  };
}

function mapDispatchToProps(dispatch){
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypeWork);
