<<<<<<< HEAD
import React, { PropTypes } from 'react';
import { getAllVacancy, deleteVacancy } from '../../actions/vacancyActions';
=======
import React from 'react';
import { getAllVacancy,deleteVacancy } from '../../actions/vacancyActions';
>>>>>>> master
import { connect } from 'react-redux';



<<<<<<< HEAD
class ContextManage extends React.Component {
 componentDidMount() {
  this.props.getAllVacancy();

 }

 onDelete(id) {
  this.props.deleteVacancy(id, this.props.vacancy.vacancies);
 }


 renderVacancies() {
=======

class ContextManage extends React.Component {
constructor(props, context){
super(props, context);
 this.deletVacancy=this.deletVacancy.bind(this);
}
deletVacancy(event){
    this.props.deleteVacancy(this.props.vacancy)
  } 
 componentDidMount() {
  this.props.getAllVacancy();
 
 }

   

 renderVacancies() {
//  debugger;
   function deletVacancy(event){
    this.props.deleteVacancy(this.props.vacancy.vacancies)
   
  } 
>>>>>>> master
  const vacancies = this.props.vacancy.vacancies;

  return vacancies.map((item, index) => {
   return (
<<<<<<< HEAD
=======

>>>>>>> master
    <tr key={index}>
     <td className="title"><a href="#">{item.title}</a></td>
     <td className="centered">-</td>
     <td>{item.created_at}</td>
     <td>{item.active_to_date}</td>

<<<<<<< HEAD
     <td className="action">
      <a href="#"><i className="fa fa-pencil"></i> Edit</a>
      <a href="#"><i className="fa  fa-check "></i> Mark Filled</a>
      <a href="#" className="delete" onClick={() => this.onDelete(item.id)}><i className="fa fa-remove"></i> Delete</a>
=======

     <td className="action">
      <a href="#"><i className="fa fa-pencil"></i> Edit</a>
      <a href="#"><i className="fa  fa-check "></i> Mark Filled</a>
      <button className="delete" onClick={this.deletVacancy}><i className="fa fa-remove"></i> Delete</button>
>>>>>>> master
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
<<<<<<< HEAD
     <p className="margin-bottom-25">Ваші оголошення показуються в таблиці нижче. Застарілі оголошення будуть автоматично видалені через 30 днів.</p>

     <table className="manage-table responsive-table">
     <thead>
       <tr>
        <th><i className="fa fa-file-text"/>Назва вакансії</th>
        <th><i className="fa fa-check-square-o"></i>Виконано?</th>
        <th><i className="fa fa-calendar"></i>Дата створення оголошення</th>
        <th><i className="fa fa-calendar"></i>Оголошення активне до</th>
        <th></th>
       </tr>
      </thead>
      <tbody>
       {this.renderVacancies()}
      </tbody>
=======

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



>>>>>>> master
     </table>

     <div className="manage"></div>
     <a href="AddJob" className="button">Додати нову вакансію</a>

    </div>
<<<<<<< HEAD
   </div>
=======

   </div>



>>>>>>> master
  );
 }
}


function mapStateToProps(state) {
 return {
  vacancy: state.vacancy
 };
}
<<<<<<< HEAD
export default connect(mapStateToProps, { getAllVacancy, deleteVacancy })(ContextManage);
=======
export default connect(mapStateToProps, { getAllVacancy,deleteVacancy })(ContextManage);
>>>>>>> master
