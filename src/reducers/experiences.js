import {
    FETCH_EXPERIENCE,
    FETCH_EXPERIENCES,
    REQUEST_LOADING_EXPERIENCE,
    REQUEST_REJECTED_EXPERIENCE
} from '../actions/experiences/action';

const INITIAL_STATE = {
    edicoes_passadas: [],
    edicoes_futuras: [],
    one: null,
    fetching: false,
    fetched: false,
    error: null,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_LOADING_EXPERIENCE:
            return {
                ...state,
                fetching: true,
                fetched: INITIAL_STATE.fetched
            };
        case REQUEST_REJECTED_EXPERIENCE:
            return {
                ...state,
                fetching: INITIAL_STATE.fetching,
                fetched: INITIAL_STATE.fetched,
                error: action.payload
            };
        case FETCH_EXPERIENCE:
            return {
                ...state,
                one: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            };
        case FETCH_EXPERIENCES:
            return {
                ...state,
                edicoes_passadas: action.payload.edicoes_passadas,
                edicoes_futuras: action.payload.edicoes_futuras,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            };
        default:
            return state;
    }
}