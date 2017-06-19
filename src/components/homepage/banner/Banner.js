import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Banner extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      search: {
        title: "",
        city: "",
        company: "",
      },
    };
  }

  render() {
    return (
      <div>
        <div id="wrapper">
          <div id="banner" className="with-transparent-header parallax background " data-img-width="2000" data-img-height="1330" data-diff="300">
            <div className="container">
              <div className="sixteen columns">
                <div className="search-container">

                  <form onSubmit={this.searchSubmit}>
                    <h2>Пошук роботи</h2>
                    <div id="1">
                      <input
                        type="text"
                        className="ico-01"
                        placeholder="назва роботи чи ім'я компанії"
                        value="" />
                    </div>
                    <div id="2">
                      <input
                        type="text"
                        className="ico-02"
                        placeholder="місто, область"
                        value="" />
                    </div>
                    <button><i className="fa fa-search" /></button>

                    <div className="browse-jobs">
                      <h3>Сортувати вакансії за
                        <a href="browse-categories.html"> категорією</a> чи <a href="#">локацією</a></h3>
                    </div>
                  </form>
                  <div className="announce">
                    <p>Ми можемо знайти роботу для тебе!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Banner.PropTypes = {

};

function mapStateToProps(state) {
  return { vacancy: state.vacancy };
}

export default connect(mapStateToProps)(Banner);