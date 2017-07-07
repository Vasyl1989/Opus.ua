import React from 'react';
import { Link } from 'react-router';

class TitlebarBrowseJob extends React.Component {

  render() {
    window.scrollTo(0, 0);
    return (
      <div
        id="titlebar"
        className="photo-bg"
      >
        <div className="container">
          <div className="ten columns">
            <h2>Усі категорії</h2>
          </div>

          <div className="six columns">
            <Link to="/add_vacancy" className="button" >Розмістити вакансію</Link>
          </div>

        </div>
      </div>
    );
  }

}

export default TitlebarBrowseJob;