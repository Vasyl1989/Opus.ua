import React from 'react';
import HeaderForEmployer from '../common/HeaderForEmployer';
import Footer from '../common/Footer';
import SearchResult from "./SearchResults";


class BrowseVacancy extends React.Component {
  render() {
    return (
      <div>
        <HeaderForEmployer />
        <div id="titlebar">
                    <div className="container">
                        <div className="ten columns">
                            <span>We found 1,412 jobs matching:</span>
                            
                        </div>

                        <div className="six columns">
                            <a href="add-job.html" className="button">Запропонувати роботу</a>
                        </div>

                    </div>
                </div>
        <SearchResult/>
        <Footer />
      </div>
    );
  }

};

export default BrowseVacancy;