import * as types from '../actions/actionTypes';

const initialState = {
<<<<<<< HEAD
  singleVacancy: {},
  fething: false,
  vacancies: [],
  active: 0
};

export default function vacancyReduce(state = initialState, action) {
  switch (action.type) {
  case types.GET_ALL_VACANCIES:
    return {
      ...state,
      fething: false,
      vacancies: action.payload
    };

  case types.GET_VACANCY_BY_ID:
    return{
      ...state,
      fething: false,
      singleVacancy: action.payload
    };
  case types.DELETE_VACANCY:
    return {
      ...state,
      fething: false,
      vacancies: action.payload
    };
  default:
    return state;
  }
}
=======
  fething: false,
  vacancies: null,

}

export default function vacancyReduce(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_VACANCIES:
      return {
        ...state,
        fething: false,
        vacancies: action.payload
      };
      case types.DELETE_VACANCY:
       const newState = Object.assign([], state);
       const indexOfVacancyDelete=state.findIndex(vacancy=>{
          return vacancy.id==action.vacancy.id
        });
        newState.splice(indexOfVacancyDelete,1);
      return{
         newState
      }
  }
  
  return state
}

export const getVacancyById = (state, id) => {
//  console.log('getVacancyById:', state, id);
  let vacancy = null;
  state.vacancies.forEach((item) => {
    if (item.id == id) {
      vacancy = item;
    }
  })
//  console.log(vacancy);
  return vacancy;
}
>>>>>>> master
