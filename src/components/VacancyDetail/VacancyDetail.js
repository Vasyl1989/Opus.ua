import React from 'react';
import { connect } from 'react-redux';
import Header from '../common/Header';
import Footer from '../common/Footer';
import filter from 'lodash';
import { Route, IndexRoute } from 'react-router';
import { getVacancyById } from '../../reducers';

class VacancyDetail extends React.Component {
		  
        

		render() {
				
		// const vacancies = this.props.vacancy.vacancies;
		const vacancyId = this.props.params.id;
		const vacancy = this.props.vacancy;
console.log('VacancyDetail:', this.props);
        // const myId=this.props;
		// var a=this.props.vacancy;
		// шукаєм індекс люе число підходить крім айді
		//  var j =vacancies.findIndex(x=>x.id===myId);
        // var a =_.filter(vacancies,{id:myId})
		// var as=a.map(function(item){
		// 	return item.title;
		// })
		//     console.log('lodash index того файлу що потрібно'+ a);
		//      console.log('lodash index with data in obj! '+ as);
		// console.log(vacancies[id])
		//  console.log('index obj ! '+this.props.params.id)
		// console.log('id= '+this.props.id)
		//  console.log('acancies, '+vacancies)
				return (
						<div>
								<Header/>
								{/*Titlebar*/}
							
				<Footer/>
			</div>
				)
		}
}

function mapStateToProps(state, ownProps) {
        
		return {
			vacancy: getVacancyById(state, ownProps.params.id),
        //   vacancy: state.vacancy,
		//  id:ownProps.params.id,
		//  vacancy:Object.assign({},state.vacancies.find(vacancy=>{vacancy.id===ownProps.params.id})) 
	};
}


export default connect(mapStateToProps)(VacancyDetail);


// 
// 			id:ownProps.params.id,
// 			filter: ownProps.location.query.filter