import {
    FETCH_IMERSAO,
    FETCH_IMERSOES,
    REQUEST_LOADING_IMERSAO,
    REQUEST_REJECTED_IMERSAO
} from '../actions/imersao/action';

const INITIAL_STATE = {
    items: [],
    one: null,
    fetching: false,
    fetched: false,
    error: null,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_LOADING_IMERSAO:
            return {
                ...state,
                fetching: true,
                fetched: INITIAL_STATE.fetched
            };
        case REQUEST_REJECTED_IMERSAO:
            return {
                ...state,
                fetching: INITIAL_STATE.fetching,
                fetched: INITIAL_STATE.fetched,
                error: action.payload
            };
        case FETCH_IMERSAO:
            return {
                ...state,
                one: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            };
        case FETCH_IMERSOES:
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
