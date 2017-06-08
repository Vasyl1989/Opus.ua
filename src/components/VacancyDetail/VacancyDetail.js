import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import Header from '../common/Header';
import Footer from '../common/Footer';

class VacancyDetail extends React.Component {
		constructor(props, context) {
				super(props, context);
						}

		render() {
				
				const vacancies = this.props.vacancy;
				return (
						<div>
								<Header/>
								
								<Footer/>
						</div>
				)
		}
}
VacancyDetail.PropTypes = {
		vacancies: PropTypes.array.isRequired
};
function mapStateToProps(state) {
		return {vacancy: state.vacancy};
}


export default connect(mapStateToProps)(VacancyDetail);
