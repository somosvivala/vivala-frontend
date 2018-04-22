import {
    FETCH_VOLUNTURISMO,
    FETCH_VOLUNTURISMOS,
    REQUEST_LOADING_VOLUNTURISMO,
    REQUEST_REJECTED_VOLUNTURISMO
} from '../actions/volunturismo/action';

const INITIAL_STATE = {
    items: [],
    one: null,
    fetching: false,
    fetched: false,
    error: null,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_LOADING_VOLUNTURISMO:
            return {
                ...state,
                fetching: true,
                fetched: INITIAL_STATE.fetched
            };
        case REQUEST_REJECTED_VOLUNTURISMO:
            return {
                ...state,
                fetching: INITIAL_STATE.fetching,
                fetched: INITIAL_STATE.fetched,
                error: action.payload
            };
        case FETCH_VOLUNTURISMO:
            return {
                ...state,
                one: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            };
        case FETCH_VOLUNTURISMOS:
            return {
                ...state,
                items: action.payload.items,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            };
        default:
            return state;
    }
}
