import {
    FETCH_EXPEDITION,
    FETCH_EXPEDITIONS,
    REQUEST_LOADING_EXPEDITION,
    REQUEST_REJECTED_EXPEDITION
} from '../actions/expeditions/action';

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
        case REQUEST_LOADING_EXPEDITION:
            return {
                ...state,
                fetching: true,
                fetched: INITIAL_STATE.fetched
            };
        case REQUEST_REJECTED_EXPEDITION:
            return {
                ...state,
                fetching: INITIAL_STATE.fetching,
                fetched: INITIAL_STATE.fetched,
                error: action.payload
            };
        case FETCH_EXPEDITION:
            return {
                ...state,
                one: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            };
        case FETCH_EXPEDITIONS:
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