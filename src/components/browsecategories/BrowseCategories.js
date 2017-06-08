import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import AllCategory from "./AllCategory";
import TitlebarBrowseJob from './TitlebarBrowseJob';

const BrowseCategories = () => {
  return (
    <div>
      <Header />
      <TitlebarBrowseJob />
      <AllCategory/>
      <Footer />
    </div>
  );
};

export default BrowseCategories;