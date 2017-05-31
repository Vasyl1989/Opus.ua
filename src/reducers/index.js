import { combineReducers } from 'redux';
import jobs from './jobReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  jobs,
  form: formReducer   
});

export default rootReducer;
