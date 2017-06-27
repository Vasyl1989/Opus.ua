import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { searchVacancy } from '../../../actions/vacancyActions';

class Banner extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      search: {
        title: "",
        city: "",
      },
    };
    this.inputChange = this.inputChange.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
  }

  inputChange(e) {
    const search = Object.assign({}, this.state.search);
    search[e.target.name] = e.target.value;
    this.setState({ search });
  }
  searchSubmit(e, city, title) {
    e.preventDefault();
    const query = { city, title };
    this.props.searchVacancy(query);
  }

  // handleKeyPress(event) {
  //   if (event.key == 'Enter') {
  //     console.log('enter press here! ');
  //     this.searchSubmit(event, this.state.search.city, this.state.search.title);
  //   }
  // }

  render() {
    return (
      <div>
        <div id="wrapper">
          <div id="banner" className="with-transparent-header parallax background " data-img-width="2000" data-img-height="1330" data-diff="300">
            <div className="container">
              <div className="sixteen columns">
                <div className="search-container">

                  <h2>Пошук роботи</h2>
                  <div id="1">
                    <input
                      name="title"
                      type="text"
                      className="ico-01"
                      placeholder="назва роботи"
                      value={this.state.title}
                      onChange={this.inputChange}
                      autoComplete="on"
                      onKeyPress={(e) => { if (e.key == 'Enter') { this.searchSubmit(e, this.state.search.city, this.state.search.title); } }}
                    />
                  </div>
                  <div id="2">
                    <input
                      name="city"
                      type="text"
                      className="ico-02"
                      placeholder="місто"
                      value={this.state.city}
                      onChange={this.inputChange}
                      autoComplete="on"
                      onKeyPress={(e) => { if (e.key == 'Enter') { this.searchSubmit(e, this.state.search.city, this.state.search.title); } }}
                    />
                  </div>
                  <a href="" onClick={(e) => { this.searchSubmit(e, this.state.search.city, this.state.search.title); }}><button><i className="fa fa-search" /></button></a>

                  <div className="browse-jobs">
                    <h3>Сортувати вакансії за
                      <Link to={"/browse_categories"}>категорією</Link>
                    </h3>
                  </div>

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
  searchVacancy: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    vacancy: state.vacancy,
  };
}

export default connect(mapStateToProps, { searchVacancy })(Banner);