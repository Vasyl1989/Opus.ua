import React from 'react';
import { getAllVacancy,deleteVacancy } from '../../actions/vacancyActions';
import { connect } from 'react-redux';




class ContextManage extends React.Component {
 componentDidMount() {
  this.props.getAllVacancy();
 
 }
  //  deletVacancy(event){
  //   this.props.deleteVacancy(this.props.vacancy.vacancies)
  // } 

 renderVacancies() {
//  debugger;
   
  const vacancies = this.props.vacancy.vacancies;

  return vacancies.map((item, index) => {
   return (

    <tr key={index}>
     <td className="title"><a href="#">{item.title}</a></td>
     <td className="centered">-</td>
     <td>{item.created_at}</td>
     <td>{item.active_to_date}</td>


     <td className="action">
      <a href="#"><i className="fa fa-pencil"></i> Edit</a>
      <a href="#"><i className="fa  fa-check "></i> Mark Filled</a>
      <button className="delete" onClick={this.deletVacancy}><i className="fa fa-remove"></i> Delete</button>
     </td>
    </tr>
   );
  });
 }

 render() {
  return (
   <div className="container">

    {/*<!-- Table -->*/}
    <div className="sixteen columns">

     <p className="margin-bottom-25">Ваші оголошення показуються в таблиці нижче. Застарілі оголошення будуть автоматично видалені через 30 днів.</p>


     <table className="manage-table responsive-table">
      <thead>
      <tr>
       <th><i className="fa fa-file-text"></i>Назва вакансії</th>
       <th><i className="fa fa-check-square-o"></i>Виконано?</th>
       <th><i className="fa fa-calendar"></i>Дата створення оголошення</th>
       <th><i className="fa fa-calendar"></i>Оголошення активне до</th>
      </tr>
      </thead>
       <tbody>
         
      {this.props.vacancy.vacancies && this.renderVacancies()}
       </tbody>



     </table>

     <div className="manage"></div>
     <a href="AddJob" className="button">Додати нову вакансію</a>

    </div>

   </div>



  );
 }
}


function mapStateToProps(state) {
 return {
  vacancy: state.vacancy
 };
}
export default connect(mapStateToProps, { getAllVacancy,deleteVacancy })(ContextManage);