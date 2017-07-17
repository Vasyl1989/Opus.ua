import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as consts from '../../constants/constants';
import { searchVacancy } from '../../actions/vacancyActions';
import * as types from '../../actions/actionTypes';
import { serializeArrayToQueryString, addJobType } from './TypeWork';

class PricePerHour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: 0,
      maxValue: 200,
      step: 25,
      firstValue: this.props.filter.prMn,
      secondValue: this.props.filter.prMx,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    window.scrollTo(0, 0);
    this.setState({ firstValue: this.state.minValue, secondValue: this.state.maxValue });
  }

  handleChange(name, event) {
    let value = event.target.value;
    if (name === "second") {
      if (parseInt(this.state.firstValue) < parseInt(value)) {
        this.setState({ secondValue: value });
      }
    } else {
      if (parseInt(value) < parseInt(this.state.secondValue)) {
        this.setState({ firstValue: value });
      }
    }
  }

  filterSubmit(event, firstValue, secondValue) {
    event.preventDefault();
    const category=this.props.filter.category;
    const prMn = firstValue;
    const prMx = secondValue;
    const city=this.props.filter.city;
    const title=this.props.filter.title;
    const type = this.props.type_work;
    const checkedElement =this.props.filter.check;
    const job_type = serializeArrayToQueryString(addJobType(this.props.filter, type, checkedElement));
    const query = { prMn, prMx ,city,title,job_type,category};
    this.props.dispatch({type:types.ABOUT_SEARCH.SET_MN,payload:prMn});
    this.props.dispatch({type:types.ABOUT_SEARCH.SET_MX,payload:prMx});
    this.props.dispatch(searchVacancy(query, consts.PAGES.BROWSE_VACANCY));

  }
  render() {
    return (
      <div className="widget">
        <div className="rangeValues">Оплата: {this.state.firstValue} - {this.state.secondValue} грн.год</div>
        <section className="range-slider">
          <input type="range" value={this.state.firstValue} min={this.state.minValue} max={this.state.maxValue} step={this.state.step} onChange={this.handleChange.bind(this, "first")} />
          <input type="range" value={this.state.secondValue} min={this.state.minValue} max={this.state.maxValue} step={this.state.step} onChange={this.handleChange.bind(this, "second")} />
          <div className="minValue"><span>від: {this.state.minValue}</span><span className="arr" />до: {this.state.maxValue}</div>
        </section>
        <button type="submit" onClick={(event) => { this.filterSubmit(event, this.state.firstValue, this.state.secondValue); }}>Відфільтрувати</button>
      </div>
    );
  }
}

PricePerHour.PropTypes = {
  handleChange: PropTypes.func.isRequired,
  filterSubmit: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    filter: state.filter,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(PricePerHour);
