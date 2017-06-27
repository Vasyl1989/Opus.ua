import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as consts from '../../constants/const';
import { searchVacancy } from '../../actions/vacancyActions';

class Slider extends React.Component {

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

  handleChange(name, event, e) {
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
    this.setState({
      firstValue: e.target.value,
      secondValue: e.target.value
    });
  }

  filterSubmit(e, firstValue, secondValue) {
    e.preventDefault();
    const prMn = firstValue;
    const prMx = secondValue;
    const query = { prMn, prMx };
    this.props.searchVacancy(query, consts.PAGES.BROWSE_VACANCY);
  }

  render() {
    return (
      <div className="widgetSlider">
        <div className="rangeValues"><h4>Оплата: {this.state.firstValue} - {this.state.secondValue} грн.год</h4></div>
        <section className="range-slider">
          <input type="range" value={this.state.firstValue} min={this.state.minValue} max={this.state.maxValue} step={this.state.step} onChange={this.handleChange.bind(this, "first")} />
          <input type="range" value={this.state.secondValue} min={this.state.minValue} max={this.state.maxValue} step={this.state.step} onChange={this.handleChange.bind(this, "second")} />
          <div className="minValue"><span>від: {this.state.minValue}</span><span className="arr" />до: {this.state.maxValue}</div>
        </section>
        <button className="button" onClick={(e) => { this.filterSubmit(e, this.state.firstValue, this.state.secondValue); }}>фільтрувати</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    vacancy: state.vacancy,
    SearchResults: state.vacancy.SearchResults
  };
}

export default connect(mapStateToProps, { searchVacancy })(Slider);