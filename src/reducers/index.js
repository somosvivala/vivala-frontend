import { combineReducers } from 'redux';
import expeditions from './expeditions';
import volunturismo from './volunturismo';
import subscribe from './subscribe';
import newsletter from './newsletter';
import contact from './contact';
import index from './index-page';
import agents from './agents';
import experiences from './experiences';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    form: formReducer,
    expeditions,
    volunturismo,
    subscribe,
    newsletter,
    contact,
    index,
    agents,
    experiences,
});
