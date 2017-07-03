import React from 'react';
import { PropTypes } from 'prop-types';
import { browserHistory } from 'react-router';

class TitlebarBrowseJob extends React.Component {
  constructor(props) {
    super(props);
    this.transition = this
      .transition
      .bind(this);
  }

  transition(e) {
    e.preventDefault();
    browserHistory.push('/add_vacancy');
  }

  render() {
    return (
      <div id="titlebar"
        className="photo-bg"
      >
        <div className="container">
          <div className="ten columns">
            <h2>Усі категорії</h2>
          </div>
          <div className="six columns">
            <a href=" " className="button" onClick={(e) => { this.transition(e) }}>Розмістити вакансію</a>
          </div>
        </div>
      </div>
    );
  }
}

TitlebarBrowseJob.PropTypes = {
  transition: PropTypes.func.isRequired,
};

export default TitlebarBrowseJob;