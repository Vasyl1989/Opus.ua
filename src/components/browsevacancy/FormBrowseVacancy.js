import React from 'react';

class FormBrowseVacancy extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="eleven columns">
          <div className="padding-right">
            <form
              action="#"
              method="get"
              className="list-search">
              <button type="submit"><i className="fa fa-search" /></button>
              <input
                type="text"
                placeholder="Вакансія..."
                value={this.state} />
              <div className="clearfix" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default (FormBrowseVacancy);