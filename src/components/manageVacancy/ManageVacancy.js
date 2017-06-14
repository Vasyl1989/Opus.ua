import React from 'react';
import HeaderForEmployer from '../common/HeaderForEmployer';
import Footer from '../common/Footer';
import TitleBarManagePage from './titleBarManagePage';
import ContextManage from './ContextManage';

const ManageVacancy = () => {
 return (
  <div>
   <HeaderForEmployer />
   <TitleBarManagePage/>
   <ContextManage/>
   <Footer />
  </div>
 );
};

export default ManageVacancy;