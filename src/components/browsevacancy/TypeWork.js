import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { searchVacancy } from '../../actions/vacancyActions';
import * as consts from '../../constants/constants';


function serializeArrayToQueryString(objectOfQueries) {
  const source = { ...objectOfQueries };
  for (let value in source) {
    if (Array.isArray(source[value])) {
      const target = source[value].join('|');
      source[value] = target;
    }
  }
  console.log('serializeArrayToQueryString', source.job_type);
  return source.job_type;
}

function addJobType(filter, type, isChecked) {
  const myFilter = { ...filter, job_type: [...filter.job_type] };
  if (isChecked === true) {
    myFilter.job_type.push(type);
  } else if (isChecked === false) {
    for (let value in myFilter) {
      if (Array.isArray(myFilter[value])) {
        const target = myFilter[value].filter(jobtype => jobtype !== type);
        myFilter[value] = target;
      }
    }
  }
  console.log('myFilter', myFilter);
  return myFilter;
}

class TypeWork extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onCheck = this.onCheck.bind(this);
  }

  onCheck(e) {
    const job_type_target = e.target.value;
    const checkedElement = e.target.checked;
    const job_type=serializeArrayToQueryString(addJobType(this.props.filter, job_type_target, checkedElement));
    const city=this.props.filter.city;
    const prMx=this.props.filter.prMx;
    const prMn=this.props.filter.Mn;
     const query = {job_type,city,prMn,prMx,};
    const parametr={job_type_target,checkedElement};
    console.log('jobType',job_type);
    this.props.dispatch(searchVacancy(query, consts.PAGES.BROWSE_VACANCY, parametr));
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
              onChange={this.onCheck}
              value="Повна"
            />
            <label htmlFor="check-1">Повна занятість </label>
          </li>
          <li>
            <input
              id="check-2"
              type="checkbox"
              name="check"
              onChange={this.onCheck}
              value="Часткова" />
            <label htmlFor="check-2">Часткова занятість </label>
          </li>
          <li>
            <input
              id="check-3"
              type="checkbox"
              name="check"
              onChange={this.onCheck}
              value="Інтернатура" />
            <label htmlFor="check-3">Інтернатура </label>
          </li>
          <li>
            <input
              id="check-4"
              type="checkbox"
              onClick={this.onCheck}
              name="check"
              value="Фріланс" />
            <label htmlFor="check-4">Фріланс </label>
          </li>
        
        </ul>
      </div>
    );
  }
}

TypeWork.PropTypes = {
  onCheck: PropTypes.func.isRequired,
  searchVacancy: PropTypes.func.isRequired,
  serializeArrayToQueryString: PropTypes.func.isRequired,
  addJobType: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    vacancy: state.vacancy,
    SearchResults: state.vacancy.SearchResults,
    filter: state.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(TypeWork);

