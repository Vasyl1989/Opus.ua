import { combineReducers } from 'redux';
import vacancy from './jobReducer';

const rootReducer = combineReducers({
  vacancy,
});


export default rootReducer;
