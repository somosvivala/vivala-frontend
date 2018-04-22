import {
    FETCH_ECOTURISMO,
    FETCH_ECOTURISMOS,
    REQUEST_LOADING_ECOTURISMO,
    REQUEST_REJECTED_ECOTURISMO
} from './action';
import axios from '../../utils/axios';

export function requestEcoturismos() {
    return dispatch => {
        dispatch(requestLoading());

        return axios
            .get('conteudo/ecoturismo')
            .then(response => dispatch(fetchEcoturismos(response.data)))
            .catch(error => dispatch(requestRejected(error.message)));
    }
}

export function requestLoading() {
    return {
        type: REQUEST_LOADING_ECOTURISMO
    };
}

export function requestRejected(response) {
    return {
        type: REQUEST_REJECTED_ECOTURISMO,
        payload: response
    };
}

function fetchEcoturismo(response) {
    return {
        type: FETCH_ECOTURISMO,
        payload: response
    };
}

function fetchEcoturismos(response) {
    return {
        type: FETCH_ECOTURISMOS,
        payload: response
    };
}
