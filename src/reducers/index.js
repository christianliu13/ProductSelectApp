import { combineReducers } from 'redux';
import ColorReducer from './reducer_color';

const rootReducer = combineReducers({color: ColorReducer})

export default rootReducer;
