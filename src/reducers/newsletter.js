import {
    REQUEST_LOADING_NEWSLETTER,
    REQUEST_REJECTED_NEWSLETTER,
    REQUEST_FULFILLED_NEWSLETTER
} from '../actions/newsletter/action';

const INITIAL_STATE = {
    requesting: false,
    error: false,
    success: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_LOADING_NEWSLETTER:
            return {
                ...state,
                requesting: true,
            };
        case REQUEST_REJECTED_NEWSLETTER:
            return {
                ...state,
                success: INITIAL_STATE.success,
                requesting: INITIAL_STATE.requesting,
                error: true
            };
        case REQUEST_FULFILLED_NEWSLETTER:
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