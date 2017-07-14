import * as types from '../actions/actionTypes';

const initialState = {
  isOpen: false,
  success: false,
  error: false,

};

export default function openReducer(state = initialState, action) {
  switch (action.type) {
    case types.SHOULD_OPEN_CLOSE.MAIN:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case types.SHOULD_OPEN_CLOSE.ERROR:
      return {
        ...state,
        error: !state.error,
      };
      
    case types.SHOULD_OPEN_CLOSE.SUCCESS:
      return {
        ...state,
        success: !state.success,
      };

    default: return state;
  }
}





      // return R.over(R.lensPath(["onResponse", "success"]), R.not, state);
      // return R.assocPath(["onResponse", "success"], !state.onResponse.success, state);