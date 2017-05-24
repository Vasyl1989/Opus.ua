import React from 'react';
import Banner from '././homepage/banner/Banner';
import Categories from './homepage/Categories';
import ResentJob from './homepage/ResentJob';
import Header from './common/Header';
import Footer from './common/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div id="wrapper">
        <Banner />
        <Categories />
        <ResentJob />
      </div>
      <Footer />
    </div >
  );
};

export default HomePage;
