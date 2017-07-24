import {
    REQUEST_LOADING_CONTACT,
    REQUEST_REJECTED_CONTACT,
    REQUEST_FULFILLED_CONTACT
} from '../actions/contact/action';

const INITIAL_STATE = {
    requesting: false,
    error: false,
    success: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_LOADING_CONTACT:
            return {
                ...state,
                requesting: true,
            };
        case REQUEST_REJECTED_CONTACT:
            return {
                ...state,
                success: INITIAL_STATE.success,
                requesting: INITIAL_STATE.requesting,
                error: true
            };
        case REQUEST_FULFILLED_CONTACT:
            return {
                ...state,
                success: true,
                requesting: INITIAL_STATE.requesting,
                error: INITIAL_STATE.error,
            };
        default:
            return state;
    }
}