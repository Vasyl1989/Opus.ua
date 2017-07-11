import React from 'react';
import Banner from '././homepage/banner/Banner';
import Categories from './homepage/Categories';
import ResentVacancy from './homepage/ResentVacancy';
import Header from './homepage/HeaderHomePage';
import Footer from './common/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <ResentVacancy />
      <Footer />
    </div>
  );
};

export default HomePage;
