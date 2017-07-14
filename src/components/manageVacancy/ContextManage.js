import React from 'react';
import { deleteVacancy, getVacancyById, getAllUserVacancy } from '../../actions/vacancyActions';
import { connect } from 'react-redux';
import { getUser } from '../../actions/registrationActions';

class ContextManage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.getUser();
    this.props.getAllUserVacancy();
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
          <td>{item.created_at}</td>
          <td>{item.active_to_date}</td>
          <td className="action">
            <a href="" onClick={(e) => this.handleGoToEditVacancy(e, item.id)}><i className="fa fa-pencil" /> Edit</a>
            <a href="#" className="delete" onClick={() => this.onDelete(item.id)}><i className="fa fa-remove" /> Delete</a>
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
                <th><i className="fa fa-calendar" />Дата створення оголошення</th>
                <th><i className="fa fa-calendar" />Оголошення активне до</th>
              </tr>
            </thead>
            <tbody>
              {this.renderVacancies()}
            </tbody>
          </table>
          <div className="manage" />
          <a href="AddVacancy" className="button">Додати нову вакансію</a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    vacancy: state.vacancy,
    user: state.registration,
  };
}

export default connect(mapStateToProps, { deleteVacancy, getVacancyById, getUser, getAllUserVacancy })(ContextManage);