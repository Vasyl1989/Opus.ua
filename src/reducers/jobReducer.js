import * as  types from '../actions/actionTypes'; 

// export default function vacancyReducer(state = [], action) {
//   switch (action.type) {
//     case "CREATE_VACANCY":
//       return [...state, Object.assign({}, action.vacancy)];
//   }
//   return state;
// }
 export default function vacancyReducer(state = [], action) {
  switch (action.type) {
    case types.GET_ALL_VACANCIES:
      return [...state, Object.assign({},action.payload.vacancy)];
  }
  return state;
}