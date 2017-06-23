import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { searchVacancy } from '../../actions/vacancyActions';
import _ from 'lodash';

class FormBrowseVacancy extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      title: "",
    };
    this.inputChange = this.inputChange.bind(this);
    this.onSearchInput = this.onSearchInput.bind(this);
  }
  inputChange(e) {
    this.setState({ title: e.target.value })
  }
  onSearchInput(e) {
    e.preventDefault();
    const vacancies = this.props.vacancy.vacancies;
    let b = _.filter(vacancies, vac => vac.title === this.state.title);
    Object.assign({}, this.props.vacancy.searchVacancy, b);
    // let a=b.map(val=>val.title);
    // console.log('b',b,'aa',a)
  }
  render() {
    return (
      <div className="container">
        <div className="eleven columns">
          <div className="padding-right">
            <form action="#" method="get" className="list-search">
              <button><i className="fa fa-search" /></button>
              <input
                type="text"
                placeholder="Вакансія..."
                value=""
                autoComplete="on" />
              <div className="clearfix" />
            </form>
            <div className="clearfix" />

          </div>
        </div>
      </div>
    );
  }
}

FormBrowseVacancy.PropTypes = {
  searchVacancy: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { vacancy: state.vacancy };
}

export default connect(mapStateToProps, { searchVacancy })(FormBrowseVacancy);
