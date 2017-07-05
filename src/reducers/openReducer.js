import * as types from '../actions/actionTypes';

const initialState = {
  isOpen: false,
  onResponse: {
    success: false,
    error: false,
  },

};

export default function openReducer(state = initialState, action) {
  switch (action.type) {
    case types.SHOULD_OPEN_CLOSE_MAIN:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case types.SHOULD_OPEN_CLOSE.ERROR:
      return {
        ...state,
        error: !state.onResponse.error,
      };
    case types.SHOULD_OPEN_CLOSE.SUCCESS:
      // return R.over(R.lensPath(["onResponse", "success"]), R.not, state);
      // return R.assocPath(["onResponse", "success"], !state.onResponse.success, state);
      return {
        ...state,
        // success: !state.onResponse.success,
        onResponse: {
          ...state.onResponse,
          success: !state.onResponse.success
        }
      };
    default: return state;
  }
}
