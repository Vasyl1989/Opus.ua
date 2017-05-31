export default function vacancyReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_VACANCY":
      return [...state, Object.assign({}, action.vacancy)];
  }
  return state;
}