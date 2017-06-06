import * as  types from '../actions/actionTypes';


// export default function vacancyReducer(state = [], action) {
//   switch (action.type) {
//     case "CREATE_VACANCY":
//       return [...state, Object.assign({}, action.vacancy)];
//   }
//   return state;
// }

const initialState = {
  fething: false,
  vacancies: null,
};

export default function vacancyReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_VACANCIES:
      // debugger
      return {
        ...state,
        fething: false,
        vacancies: action.payload,
      };

  }
  console.log(state);
  return state;
}