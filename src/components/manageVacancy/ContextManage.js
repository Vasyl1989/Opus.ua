import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getUser, getUserVacancies } from '../../actions/registrationActions';
import { getAllVacancy, deleteVacancy, getVacancyById } from '../../actions/vacancyActions';

class ContextManage extends React.Component {
  componentDidMount() {
    this.props.getUserVacancies();
    this.props.getUser();
  }

  onDelete(id) {
    this.props.deleteVacancy(id, this.props.vacancy.vacancies);
  }

  handleGoToEditVacancy(e, id) {
    e.preventDefault();
    this.props.getVacancyById(id, this.props.vacancy.vacancies, true);
  }

  renderUserVacancies() {
    const userVacancies = this.props.vacancy.vacancies;
    return userVacancies.map((item, index) => {
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
                <th />
              </tr>
            </thead>
            <tbody>
              {this.renderUserVacancies()}
            </tbody>
          </table>
          <div className="manage" />
          <Link to={"/add_vacancy"} className="button">Додати нову вакансію</Link>
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

export default connect(mapStateToProps, { getAllVacancy, deleteVacancy, getVacancyById, getUser, getUserVacancies })(ContextManage);