import {
    FETCH_AGENTS,
    REQUEST_LOADING_AGENT,
    REQUEST_REJECTED_AGENT
} from '../actions/agents/action';

const INITIAL_STATE = {
    all: [],
    fetching: false,
    fetched: false,
    error: null,
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case REQUEST_LOADING_AGENT:
            return {
                ...state,
                fetching: true,
                fetched: INITIAL_STATE.fetched
            };
        case REQUEST_REJECTED_AGENT:
            return {
                ...state,
                fetching: INITIAL_STATE.fetching,
                fetched: INITIAL_STATE.fetched,
                error: action.payload
            };
        case FETCH_AGENTS:
            return {
                ...state,
                all: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            };
        default:
            return state;
    }
}