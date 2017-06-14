import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {getAllVacancy} from '../../actions/vacancyActions';
import {Link,browserHistory } from 'react-router';
// import Pagination from './../Pagination';

class ResentVacancy extends React.Component {
constructor(props, context){
super(props, context);
 this.state={
    currentPage: 1,
    vacancyPerPage: 10
 };
 this.handleClick = this.handleClick.bind(this);
}
handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  componentDidMount() {
    this.props.getAllVacancy();
  } 

 
  
   
  renderVacancies() {

    const vacancies = this.props.vacancy.vacancies;
    // for display curent vacancy on page
    const indexOfLastVacancy = this.state.currentPage * this.state.vacancyPerPage;
    const indexOfFirstVacancy = indexOfLastVacancy - this.state.vacancyPerPage;
    const currentVacancies = vacancies.slice(indexOfFirstVacancy, indexOfLastVacancy);
    // display page numberd
     const pageNumbers = [];
     for (let i = 1; i <= Math.ceil(vacancies.length / this.state.vacancyPerPage); i++) {
          pageNumbers.push(i);
        }

    return  (
      <div>
        <ul className="job-list">
           {
             currentVacancies.map((item,index)=>{
               return(<li className="highlighted" key={index} >
                 <Link to={"VacancyDetail/"+item.id}  onClick={()=>{browserHistory.push(item.id)}}>
               <img src="styles/images/job-list-logo-01.png" alt=""/>
            <div className="job-list-content">
              <h4>{item.title}
                <span className="full-time">{item.job_type}</span>
              </h4>
              <div className="job-icons">
                <span>
                  <i className="fa fa-briefcase"></i>
                  {item.company}</span>
                <span>
                  <i className="fa fa-map-marker"></i>
                  {item.city}</span>
                <span>
                  <i className="fa fa-money"></i>
                  {item.price_per_hour}
                  / hour</span>
              </div>
            </div>
               </Link>
                <div className="clearfix"></div>
               </li>)
               
             })
           }
        </ul>
        <ul>
          {pageNumbers.map(number=>{
            return(
              <li
              key={number}
              id={number}
              onClick={this.handleClick}
              >{number}</li>
            )
          })}
        </ul>
        </div>
          )
    
  }

  render() {
    // console.log('----------------------------', this.props.vacancy.vacancies.length);
    return (

      <div className="container">
      

        <div className="sixteen columns">
          <div className="padding-right">
            <h3 className="margin-bottom-25">Актуальні вакансії</h3>
            
              {this.props.vacancy.vacancies && this.renderVacancies()}
            
            <a href="browse-jobs.html" className="button centered">
              <i className="fa fa-plus-circle"></i>
              Показати більше вакансій</a>

            <div className="margin-bottom-55"></div>
          </div>

        </div>
      </div>

    );
  }

}
ResentVacancy.PropTypes = {
  handleOpenVacancy: PropTypes.func.isRequired,
  renderVacancies: PropTypes.func.isRequired,
  vacancies: PropTypes.array.isRequired
}
function mapStateToProps(state) {
  return {vacancy: state.vacancy};
}
// function mapDispatchToProps(dispatch) {  return {   createVacancy: vacancy =>
// dispatch(Actions.createVacancy(vacancy))  }; }
export default connect(mapStateToProps, {getAllVacancy})(ResentVacancy);