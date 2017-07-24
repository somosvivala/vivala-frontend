import {
    REQUEST_LOADING_SUBSCRIBE,
    REQUEST_REJECTED_SUBSCRIBE,
    REQUEST_FULFILLED_SUBSCRIBE
} from '../actions/subscribe/action';

const INITIAL_STATE = {
    requesting: false,
    error: false,
    success: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_LOADING_SUBSCRIBE:
            return {
                ...state,
                requesting: true,
            };
        case REQUEST_REJECTED_SUBSCRIBE:
            return {
                ...state,
                success: INITIAL_STATE.success,
                requesting: INITIAL_STATE.requesting,
                error: true
            };
        case REQUEST_FULFILLED_SUBSCRIBE:
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