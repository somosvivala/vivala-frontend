import {
    FETCH_VOLUNTURISMO,
    FETCH_VOLUNTURISMOS,
    REQUEST_LOADING_VOLUNTURISMO,
    REQUEST_REJECTED_VOLUNTURISMO
} from './action';
import axios from '../../utils/axios';

export function requestVolunturismos() {
    return dispatch => {
        dispatch(requestLoading());

        return axios
            .get('conteudo/volunturismo')
            .then(response => dispatch(fetchVolunturismos(response.data)))
            .catch(error => dispatch(requestRejected(error.message)));
    }
}

export function requestLoading() {
    return {
        type: REQUEST_LOADING_VOLUNTURISMO
    };
}

export function requestRejected(response) {
    return {
        type: REQUEST_REJECTED_VOLUNTURISMO,
        payload: response
    };
}

function fetchVolunturismo(response) {
    return {
        type: FETCH_VOLUNTURISMO,
        payload: response
    };
}

function fetchVolunturismos(response) {
    return {
        type: FETCH_VOLUNTURISMOS,
        payload: response
    };
}
