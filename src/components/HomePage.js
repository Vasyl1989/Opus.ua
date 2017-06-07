import React from 'react';
import Banner from '././homepage/banner/Banner';
import Categories from './homepage/Categories';
import ResentJob from './homepage/ResentJob';
import HeaderHomePage from './homepage/HeaderHomePage';
import Footer from './common/Footer';

const HomePage = () => {
  return (
    <div>
      <HeaderHomePage />
      <Banner />
      <Categories />
      <ResentJob />
      <Footer />
    </div>
  );
};

export default HomePage;
