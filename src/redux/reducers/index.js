import { counterValue } from './counterValue.reducer';
import { combineReducers } from 'redux';

export const counterApp = combineReducers({
    counterValue
});