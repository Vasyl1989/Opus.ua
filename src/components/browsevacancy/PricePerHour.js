import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';


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
    this.setState({
      firstValue: this.state.minValue,
      secondValue: this.state.maxValue
    });
  }
  handleChange(name, event) {
    //We set the state value depending on input that is clicked
    if (name === "second") {
      let newValue = parseInt(this.state.firstValue) + parseInt(this.state.step);
      //The second value can't be lower than the first value
      if (parseInt(this.state.secondValue) > parseInt(newValue)) {
        this.setState({
          secondValue: event.target.value
        });
      }
    } else {
      //The first value can't be greater than the second value
      if (parseInt(this.state.firstValue) < parseInt(this.state.secondValue)) {
        this.setState({
          firstValue: event.target.value
        });
      }
    }
  }
  render() {
    return (
      <div className="widget">
        <h4>Погодинна оплата</h4>
        <div className="rangeValues">Погодинна оплата: {this.state.firstValue} - {this.state.secondValue} грн/год</div>
        <section className="range-slider">
          <input
           type="range" 
           value={this.state.firstValue} 
           min={this.state.minValue} 
           max={this.state.maxValue} 
           step={this.state.step} 
           onChange={this.handleChange.bind(this, "first")} />
        </section>
      </div>
    )
  }
}
export default PricePerHour;

