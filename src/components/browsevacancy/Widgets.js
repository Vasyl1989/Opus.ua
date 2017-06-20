import React from 'react';

class Widgets extends React.Component {
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
            <button class="button">Пошук</button>
          </form>
        </div>

        <div className="widget">
          <h4>Тип роботи</h4>
          <ul className="checkboxes">
            <li>
              <input
                id="check-1"
                type="checkbox"
                name="check"
                value="check-1" checked />
              <label for="check-1">будь-який</label>
            </li>
            <li>
              <input
                id="check-2"
                type="checkbox"
                name="check"
                value="check-2" />
              <label for="check-2">Повна занятість <span></span></label>
            </li>
            <li>
              <input
                id="check-3"
                type="checkbox"
                name="check"
                value="check-3" />
              <label for="check-3">Часткова занятість <span></span></label>
            </li>
            <li>
              <input
                id="check-4"
                type="checkbox"
                name="check"
                value="check-4" />
              <label for="check-4">Інтернатура <span></span></label>
            </li>
            <li>
              <input
                id="check-5"
                type="checkbox"
                name="check"
                value="check-5" />
              <label for="check-5">Фріланс <span></span></label>
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