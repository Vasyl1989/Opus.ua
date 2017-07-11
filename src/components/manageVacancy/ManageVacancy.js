import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import ContextManage from './ContextManage';
import TitleBarManagePage from './titleBarManagePage';


const ManageVacancy = () => {
 return (
  <div>
   <Header />
   <TitleBarManagePage />
   <ContextManage/>
   <Footer />
  </div>
 );
};

export default ManageVacancy;