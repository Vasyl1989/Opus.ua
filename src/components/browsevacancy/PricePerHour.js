import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { searchVacancy } from '../../actions/vacancyActions';
import * as consts from '../../constants/constants';
import * as types from '../../actions/actionTypes';


class PricePerHour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minValue: 0,
      maxValue: 200,
      step: 25,
      firstValue: null,
      secondValue: null
    };
    this.handleChange = this
      .handleChange
      .bind(this);
  }
  componentWillMount() {
    this.setState({ firstValue: this.state.minValue, secondValue: this.state.maxValue });
  }

  handleChange(name, event) {
    let value = event.target.value;
    if (name === "second") {
      if (parseInt(this.state.firstValue) < parseInt(value)) {
        this.setState({ secondValue: value });
      }
    }
    else {
      if (parseInt(value) < parseInt(this.state.secondValue)) {
        this.setState({ firstValue: value });
      }
    }
  }
  filterSubmit(event, firstValue, secondValue) {
    event.preventDefault();
    const prMn = firstValue;
    const prMx = secondValue;
    const query = { prMn, prMx };
    this.props.dispatch({ type: types.ABOUT_SEARCH.SET_PRICE_MN, payload: prMn });
    this.props.dispatch({ type: types.ABOUT_SEARCH.SET_PRICE_MX, payload: prMx });
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
    )
  }
}
PricePerHour.PropTypes = {
  handleChange: PropTypes.func.isRequired,
  filterSubmit: PropTypes.func.isRequired,
}
function mapStateToProps(state) {
  return {
    vacancy: state.vacancy,
    SearchResults: state.vacancy.SearchResults,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(PricePerHour);
