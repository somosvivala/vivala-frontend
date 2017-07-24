import { combineReducers } from 'redux';
import expeditions from './expeditions';
import subscribe from './subscribe';
import newsletter from './newsletter';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    form: formReducer,
    expeditions,
    subscribe,
    newsletter
});