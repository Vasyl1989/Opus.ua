import React from 'react';
import TypeWork from './TypeWork';
import PricePerHour from './PricePerHour';
import BrowseByCity from './BrowseByCity';

class Widgets extends React.Component {
  render() {
    return (
      <div>
        <BrowseByCity />
        <TypeWork />
        <PricePerHour />
      </div>
    );
  }
}

export default Widgets;
