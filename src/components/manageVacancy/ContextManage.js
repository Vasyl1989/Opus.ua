import React, { PropTypes } from 'react';
import { getAllVacancies } from '../../actions/jobActions';
import { connect } from 'react-redux';
import { getVacancyById } from '../../reducers';



class ContextManage extends React.Component {
//  componentDidMount() {
//   this.props.getAllVacancies();

//  }


 renderVacancies() {
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
      <a href="#" className="delete"><i className="fa fa-remove"></i> Delete</a>
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

      <tr>
       <th><i className="fa fa-file-text"></i>Назва вакансії</th>
       <th><i className="fa fa-check-square-o"></i>Виконано?</th>
       <th><i className="fa fa-calendar"></i>Дата створення оголошення</th>
       <th><i className="fa fa-calendar"></i>Оголошення активне до</th>

       <th></th>
      </tr>

      {this.renderVacancies()}




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
export default connect(mapStateToProps)(ContextManage);