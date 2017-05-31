export default function jobReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_VACANCY":
      return [...state, Object.assign({}, action.job)];
  }
  return state;
}