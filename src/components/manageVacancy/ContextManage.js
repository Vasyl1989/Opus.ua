import React, { PropTypes } from 'react';
import { getAllVacancy, deleteVacancy, getVacancyById } from '../../actions/vacancyActions';
import { connect } from 'react-redux';



class ContextManage extends React.Component {

  componentDidMount() {
    this.props.getAllVacancy();

  }


  onDelete(id) {
    this.props.deleteVacancy(id, this.props.vacancy.vacancies);
  }

  handleGoToEditVacancy(e, id) {
    e.preventDefault();
    this.props.getVacancyById(id, this.props.vacancy.vacancies, true);
  }


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
            
            <a href='' onClick={(e) => this.handleGoToEditVacancy(e, item.id)}><i className="fa fa-pencil"></i> Edit</a>
            <a href="#"><i className="fa  fa-check "></i> Mark Filled</a>
            <a href="#" className="delete" onClick={() => this.onDelete(item.id)}><i className="fa fa-remove"></i> Delete</a>
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
                <th><i className="fa fa-file-text" />Назва вакансії</th>
                <th><i className="fa fa-check-square-o"></i>Виконано?</th>
                <th><i className="fa fa-calendar"></i>Дата створення оголошення</th>
                <th><i className="fa fa-calendar"></i>Оголошення активне до</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.renderVacancies()}
            </tbody>
          </table>

          <div className="manage"></div>
          <a href="AddVacancy" className="button">Додати нову вакансію</a>

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
export default connect(mapStateToProps, { getAllVacancy, deleteVacancy, getVacancyById })(ContextManage);