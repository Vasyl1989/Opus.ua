import React from 'react';
import TextInput from '../../common/TextInput';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';


class Banner extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      searchWord: "",
      searchCity: ""
    }
    this.inputChange = this.inputChange.bind(this);
  }
  inputChange(event) {
    console.log(this.props.vacancy)
    const vacancy = Object.assign({}, this.state.vacancy);
    
    this.setState({ 
      [event.target.name] : event.target.value
     
     });
  }
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
                    <TextInput
                      type="text"
                      name='searchWord'
                      placeholder="назва роботи, ключові слова чи ім'я компанії"
                      className='ico-01'
                      value={this.state.searchWord}
                      onChange={this.inputChange}
                    />
                  </div>
                  <div id="2">
                    <TextInput
                      type="text"
                      name="searchCity"
                      placeholder="місто, область"
                      className='ico-02'
                      value={this.state.searchCity}
                      onChange={this.inputChange}
                    />
                  </div>
                  <button><i className="fa fa-search"></i></button>

                  <div className="browse-jobs">
                    Сортувати вакансії за<a href="BrowseCategories"> категорією</a> чи <a href="#">локацією</a>
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

};
function mapStateToProps(state) {
  return {
    vacancy: state.vacancy,

  };
}
export default connect(mapStateToProps)(Banner);