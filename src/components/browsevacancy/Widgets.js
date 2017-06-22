import React from 'react';

class Widgets extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    return (
      <div>
        <div className="widget">
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
              value="" />
            <button className="button">Пошук</button>
          </form>
        </div>

        <div className="widget">
          <h4>Тип роботи</h4>
          <ul className="checkboxes">
            <li>
              <label>
                <input
                  id="check-1"
                  type="checkbox"
                  name="check"
                  checked={this.state.isChecked}
                  onChange={this.onChange} />
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
                будь-який</label>
            </li>
            <li>
              <label>
                <input
                  id="check-2"
                  type="checkbox"
                  name="check"
                  checked={this.state.isChecked}
                  onChange={this.onChange}
                />
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
                Повна занятість <span /></label>
            </li>
            <li>
              <label htlmFor="check-3">
                <input
                  id="check-3"
                  type="checkbox"
                  name="check"
                  checked={this.state.isChecked}
                  onChange={this.onChange} />
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
                Часткова занятість <span /></label>
            </li>
            <li>
              <label htlmFor="check-4">
                <input
                  id="check-4"
                  type="checkbox"
                  name="check"
                  checked={this.state.isChecked}
                  onChange={this.onChange} />
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
                Інтернатура <span /></label>
            </li>
            <li>
              <label htlmFor="check-5">
                <input
                  id="check-5"
                  type="checkbox"
                  name="check"
                  checked={this.state.isChecked}
                  onChange={this.onChange} />
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
                Фріланс <span /></label>
            </li>
          </ul>
        </div>

        <div className="widget">
          <h4>Погодинна оплата</h4>
          <ul className="checkboxes">
            <li>
              <input
                id="check-6"
                type="checkbox"
                name="check"
                value="check-6"
                checked />
              <label for="check-6">Будь-яка</label>
            </li>
            <li>
              <input
                id="check-7"
                type="checkbox"
                name="check"
                value="check-7" />
              <label for="check-7">0грн - 25грн <span></span></label>
            </li>
            <li>
              <input
                id="check-8"
                type="checkbox"
                name="check"
                value="check-8" />
              <label for="check-8">25грн - 50грн <span></span></label>
            </li>
            <li>
              <input
                id="check-9"
                type="checkbox"
                name="check"
                value="check-9" />
              <label for="check-9">50грн - 100грн <span /></label>
            </li>
            <li>
              <input
                id="check-10"
                type="checkbox"
                name="check"
                value="check-10" />
              <label for="check-10">100грн - 200грн <span /></label>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default (Widgets)