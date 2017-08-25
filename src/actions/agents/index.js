import {
    FETCH_AGENTS,
    REQUEST_LOADING_AGENT,
    REQUEST_REJECTED_AGENT
} from './action';
import axios from '../../utils/axios';

export function requestAgents() {
    return dispatch => {
        dispatch(requestLoading());

        return axios
            .get('conteudo/agentes/')
            .then(response => dispatch(fetchAgents(response.data.agentes)))
            .catch(error => dispatch(requestRejected(error.message)));
    }
}

export function requestLoading() {
    return {
        type: REQUEST_LOADING_AGENT
    };
}

export function requestRejected(response) {
    return {
        type: REQUEST_REJECTED_AGENT,
        payload: response
    };
}

function fetchAgents(response) {
    return {
        type: FETCH_AGENTS,
        payload: response
    };
}
