import { combineReducers } from 'redux';
import jobs from './jobReducer';
// import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  jobs
});

export default rootReducer;
