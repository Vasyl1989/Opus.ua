import React from 'react';
import Titlebar from './Titlebar';
import CompanyInfo from './CompanyInfo';
import Header from '../common/Header';
import Footer from '../common/Footer';

const VacancyDetail = () => {
    return (
        <div>
            <Header />
            <Titlebar />
            <CompanyInfo />
            <Footer />
        </div>
    )
}
export default VacancyDetail;