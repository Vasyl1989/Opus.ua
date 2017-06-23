import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import * as consts from '../../constants/const';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import { searchVacancy } from '../../actions/vacancyActions';

class Widgets extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      city: "",
      isChecked: false
    };
    this.inputChange = this.
      inputChange
      .bind(this);
    this.onSearchInput = this
      .onSearchInput
      .bind(this);
  }

  inputChange(e) {
    this.setState({ city: e.target.value });
  }

  onSearchInput(e, city) {
    e.preventDefault();
    const query = { city };
    this.props.searchVacancy(query, consts.PAGES.BROWSE_VACANCY);
  }

  render() {
    return (
      <div>
        <div className="widget">
          <h4>Сортувати за </h4>
          <SelectInput
            data-placeholder="Choose Category"
            className="chosen-select-no-single"
            options={consts.SORTING}
          />
        </div>

        <div className="widget">
          <TextInput
            type="text"
            placeholder="Місто"
            value={this.state.city}
            onChange={this.inputChange}
            autoComplete="on"
            onKeyPress={(e) => { if (e.key == 'Enter') { this.onSearchInput(e, this.state.city); } }}
          />
          <button className="button" onClick={(e) => { this.onSearchInput(e, this.state.city); }}>Пошук</button>
        </div>

        <div className="widget">
          <h4>Тип роботи</h4>
          <ul className="checkboxes">
            <li >
              <input
                id="check-1"
                type="checkbox"
                name="check"
                value="check-1" />
              <label htmlFor="check-1">
                будь-який
              </label>
            </li>
            <li>
              <input
                id="check-2"
                type="checkbox"
                name="check"
                value="check-2" />
              <label htmlFor="check-2">
                Повна занятість <span />
              </label>
            </li>
            <li>
              <input
                id="check-3"
                type="checkbox"
                name="check"
                value="check-3" />
              <label htmlFor="check-3">
                Часткова занятість <span />
              </label>
            </li>
            <li>
              <input
                id="check-4"
                type="checkbox"
                name="check"
                value="check-4" />
              <label htmlFor="check-4">Інтернатура <span /></label>
            </li>
            <li>
              <input
                id="check-5"
                type="checkbox"
                name="check"
                value="check-5" />
              <label htmlFor="check-5">Фріланс <span></span></label>
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
              />
              <label htmlFor="check-6">Будь-яка</label>
            </li>
            <li>
              <input
                id="check-7"
                type="checkbox"
                name="check"
                value="check-7" />
              <label htmlFor="check-7">0грн - 25грн <span></span></label>
            </li>
            <li>
              <input
                id="check-8"
                type="checkbox"
                name="check"
                value="check-8" />
              <label htmlFor="check-8">25грн - 50грн <span></span></label>
            </li>
            <li>
              <input
                id="check-9"
                type="checkbox"
                name="check"
                value="check-9" />
              <label htmlFor="check-9">50грн - 100грн <span /></label>
            </li>
            <li>
              <input
                id="check-10"
                type="checkbox"
                name="check"
                value="check-10" />
              <label htmlFor="check-10">100грн - 200грн <span /></label>
            </li>
          </ul>
        </div>
      </div >
    );
  }
}

Widgets.PropTypes = {
  searchVacancy: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
  onSearchInput: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    vacancy: state.vacancy,
    SearchResults: state.vacancy.SearchResults,
  };
}

export default connect(mapStateToProps, { searchVacancy })(Widgets);


// import React from 'react';
// import { connect } from 'react-redux';
// import _ from 'lodash';


// class Widgets extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isChecked: false };
//     this.onChange = this.onChange.bind(this);
//   }

//   componentDidMount() {

//     const vacancies = this.props.SearchResults;
//     console.log(vacancies);
//   }


//   onChange(e) {
//     // let check = this.state;
//     // console.log('Checkbox checked:', (e.target.checked), vacancies, check);
//     this.setState({ isChecked: !this.state.isChecked });
//   }

//   renderAAA() {
//     const vacancies = this.props.SearchResults;
//     console.log(vacancies);
//     const zzz = _.filter(vacancies, { job_type: "Повна зайнятість" });
//     console.log(zzz);
//     return (
//       <div>
//         {zzz.map((item) => {
//           return (<li className="highlighted" key={item.id} >
//             <p>{item.title}</p>
//           </li>
//           );
//         })}
//       </div>
//     );

//   }
//   render() {
//     return (
//       <div>
//         <div className="widget">
//           {this.props.SearchResults && this.renderAAA()}
//           <h4>Сортувати за </h4>
//           <select data-placeholder="Choose Category" className="chosen-select-no-single">
//             <option selected="selected" value="recent">Найновіша вакансія</option>
//             <option value="oldest">Найстаріша</option>
//             <option value="ratehigh">Максимальна погодинна оплата</option>
//             <option value="ratelow">Мінімальна погодинна оплата</option>
//           </select>
//         </div>

//         <div className="widget">
//           <form action="#" method="get">
//             <input
//               type="text"
//               placeholder="Місто"
//               value=""
//               autoComplete="on" />
//             <button className="button">Пошук</button>
//           </form>
//         </div>

//         <div className="widget">
//           <h4>Тип роботи</h4>
//           <form onSubmit={this.handleSubmit}>
//             <ul>
//               <li>
//                 <label>
//                   <input
//                     id="check-1"
//                     type="checkbox"
//                     name="check"
//                     onChange={this.onChange}

//                   />
//                   Будь-який<span />
//                 </label>
//               </li>
//               <li>
//                 <label>
//                   <input
//                     id="check-2"
//                     type="checkbox"
//                     name="check"
//                     onChange={this.onChange}
//                   />
//                   Повна занятість <span />
//                 </label>
//               </li>
//               <li>
//                 <label>
//                   <input
//                     id="check-3"
//                     type="checkbox"
//                     name="check"
//                     onChange={this.onChange}
//                   />
//                   Часткова занятість <span />
//                 </label>
//               </li>
//               <li>
//                 <label>
//                   <input
//                     id="check-4"
//                     type="checkbox"
//                     name="check"
//                     onChange={this.onChange}
//                   />
//                   Інтернатура<span />
//                 </label>
//               </li>
//               <li>
//                 <label>
//                   <input
//                     id="check-5"
//                     type="checkbox"
//                     name="check"
//                     onChange={this.onChange}
//                   />
//                   Фріланс <span />
//                 </label>
//               </li>
//             </ul>
//             <button className="button big margin-top-5" type="submit" id="vacancy">Пошук</button>
//           </form>
//         </div>

//         <div className="widget">
//           <h4>Погодинна оплата</h4>
//           <ul>
//             <li>
//               <label>
//                 <input
//                   id="check-6"
//                   type="checkbox"
//                   name="check"
//                 />Будь-яка  <span />
//               </label>
//             </li>
//             <li>
//               <label>
//                 <input
//                   id="check-7"
//                   type="checkbox"
//                   name="check"
//                 />0 - 25 грн/год<span />
//               </label>
//             </li>
//             <li>
//               <label>
//                 <input
//                   id="check-8"
//                   type="checkbox"
//                   name="check"
//                 />25 - 50 грн/год<span />
//               </label>
//             </li>
//             <li>
//               <label>
//                 <input
//                   id="check-9"
//                   type="checkbox"
//                   name="check"
//                 />50 - 100 грн/год<span />
//               </label>
//             </li>
//             <li>
//               <label>
//                 <input
//                   id="check-10"
//                   type="checkbox"
//                   name="check"
//                 />100 - 200 грн/год<span />
//               </label>
//             </li>
//           </ul>
//         </div>

//       </div>
//     );

//   }

// }

// function mapStateToProps(state) {
//   return {
//     vacancy: state.vacancy,
//     SearchResults: state.vacancy.SearchResults
//   };
// }

// export default connect(mapStateToProps)(Widgets);
