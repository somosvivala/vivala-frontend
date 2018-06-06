import {
    FETCH_ECOTURISMO,
    FETCH_ECOTURISMOS,
    REQUEST_LOADING_ECOTURISMO,
    REQUEST_REJECTED_ECOTURISMO
} from '../actions/ecoturismo/action';

const INITIAL_STATE = {
    video: null,
    items: [],
    one: null,
    fetching: false,
    fetched: false,
    error: null,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_LOADING_ECOTURISMO:
            return {
                ...state,
                fetching: true,
                fetched: INITIAL_STATE.fetched
            };
        case REQUEST_REJECTED_ECOTURISMO:
            return {
                ...state,
                fetching: INITIAL_STATE.fetching,
                fetched: INITIAL_STATE.fetched,
                error: action.payload
            };
        case FETCH_ECOTURISMO:
            return {
                ...state,
                one: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            };
        case FETCH_ECOTURISMOS:
            return {
                ...state,
                video: action.payload.video,
                items: action.payload.items,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            };
        default:
            return state;
    }
}
