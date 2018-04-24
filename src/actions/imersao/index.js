import {
    FETCH_IMERSAO,
    FETCH_IMERSOES,
    REQUEST_LOADING_IMERSAO,
    REQUEST_REJECTED_IMERSAO
} from './action';
import axios from '../../utils/axios';

export function requestImersoes() {
    return dispatch => {
        dispatch(requestLoading());

        return axios
            .get('conteudo/imersoes')
            .then(response => dispatch(fetchImersoes(response.data)))
            .catch(error => dispatch(requestRejected(error.message)));
    }
}

export function requestLoading() {
    return {
        type: REQUEST_LOADING_IMERSAO
    };
}

export function requestRejected(response) {
    return {
        type: REQUEST_REJECTED_IMERSAO,
        payload: response
    };
}

function fetchImersao(response) {
    return {
        type: FETCH_IMERSAO,
        payload: response
    };
}

function fetchImersoes(response) {
    return {
        type: FETCH_IMERSOES,
        payload: response
    };
}
