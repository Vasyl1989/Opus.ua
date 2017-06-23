import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';


class Widgets extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {

    const vacancies = this.props.SearchResults;
    console.log(vacancies);
  }


  onChange(e) {
    // let check = this.state;
    // console.log('Checkbox checked:', (e.target.checked), vacancies, check);
    this.setState({ isChecked: !this.state.isChecked });
  }

  renderAAA() {
    const vacancies = this.props.SearchResults;
    console.log(vacancies);
    const zzz = _.filter(vacancies, { job_type: "Повна зайнятість" });
    console.log(zzz);
    return (
      <div>
        {zzz.map((item) => {
          return (<li className="highlighted" key={item.id} >
            <p>{item.title}</p>
          </li>
          );
        })}
      </div>
    );

  }
  render() {
    return (
      <div>
        <div className="widget">
          {this.props.SearchResults && this.renderAAA()}
          <h4>Сортувати за </h4>
          <select data-placeholder="Choose Category" className="chosen-select-no-single">
            <option selected="selected" value="recent">Найновіша вакансія</option>
            <option value="oldest">Найстаріша</option>
            <option value="ratehigh">Максимальна погодинна оплата</option>
            <option value="ratelow">Мінімальна погодинна оплата</option>
          </select>
        </div>

        <div className="widget">
          <form action="#" method="get">
            <input
              type="text"
              placeholder="Місто"
              value=""
              autoComplete="on" />
            <button className="button">Пошук</button>
          </form>
        </div>

        <div className="widget">
          <h4>Тип роботи</h4>
          <form onSubmit={this.handleSubmit}>
            <ul>
              <li>
                <label>
                  <input
                    id="check-1"
                    type="checkbox"
                    name="check"
                    onChange={this.onChange}

                  />
                  Будь-який<span />
                </label>
              </li>
              <li>
                <label>
                  <input
                    id="check-2"
                    type="checkbox"
                    name="check"
                    onChange={this.onChange}
                  />
                  Повна занятість <span />
                </label>
              </li>
              <li>
                <label>
                  <input
                    id="check-3"
                    type="checkbox"
                    name="check"
                    onChange={this.onChange}
                  />
                  Часткова занятість <span />
                </label>
              </li>
              <li>
                <label>
                  <input
                    id="check-4"
                    type="checkbox"
                    name="check"
                    onChange={this.onChange}
                  />
                  Інтернатура<span />
                </label>
              </li>
              <li>
                <label>
                  <input
                    id="check-5"
                    type="checkbox"
                    name="check"
                    onChange={this.onChange}
                  />
                  Фріланс <span />
                </label>
              </li>
            </ul>
            <button className="button big margin-top-5" type="submit" id="vacancy">Пошук</button>
          </form>
        </div>

        <div className="widget">
          <h4>Погодинна оплата</h4>
          <ul>
            <li>
              <label>
                <input
                  id="check-6"
                  type="checkbox"
                  name="check"
                />Будь-яка  <span />
              </label>
            </li>
            <li>
              <label>
                <input
                  id="check-7"
                  type="checkbox"
                  name="check"
                />0 - 25 грн/год<span />
              </label>
            </li>
            <li>
              <label>
                <input
                  id="check-8"
                  type="checkbox"
                  name="check"
                />25 - 50 грн/год<span />
              </label>
            </li>
            <li>
              <label>
                <input
                  id="check-9"
                  type="checkbox"
                  name="check"
                />50 - 100 грн/год<span />
              </label>
            </li>
            <li>
              <label>
                <input
                  id="check-10"
                  type="checkbox"
                  name="check"
                />100 - 200 грн/год<span />
              </label>
            </li>
          </ul>
        </div>

      </div>
    );

  }

}

function mapStateToProps(state) {
  return {
    vacancy: state.vacancy,
    SearchResults: state.vacancy.SearchResults
  };
}

export default connect(mapStateToProps)(Widgets);
