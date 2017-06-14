import React from 'react';
import HeaderForEmployer from '../common/HeaderForEmployer';
import Footer from '../common/Footer';
import ContextManage from './ContextManage';
import TitleBarManagePage from './titleBarManagePage';


const ManageVacancy = () => {
 return (
  <div>
   <HeaderForEmployer />
   <TitleBarManagePage />
   <ContextManage/>
   <Footer />
  </div>
 );
};

export default ManageVacancy;