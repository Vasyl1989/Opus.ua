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
  console.log('serializeArrayToQueryString', source);
  return source;
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

class TypeWorkFilter extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onCheck = this.onCheck.bind(this);
  }

  onCheck(e) {
    const job_type = e.target.value;
    const checkedElement = e.target.checked;
    const query = {
      job_type,
      checkedElement,
    };
    this.props.dispatch(searchVacancy(serializeArrayToQueryString(addJobType(this.props.filter, job_type, checkedElement)), consts.PAGES.BROWSE_VACANCY, query));
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

TypeWorkFilter.PropTypes = {
  onCheck: PropTypes.func.isRequired,
  searchVacancy: PropTypes.func.isRequired,
  serializeArrayToQueryString: PropTypes.func.isRequired,
  addJobType: PropTypes.func.isRequired,
};

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

export default connect(mapStateToProps, mapDispatchToProps)(TypeWorkFilter);
