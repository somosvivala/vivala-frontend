import {
    FETCH_EXPEDITION,
    FETCH_EXPEDITIONS,
    REQUEST_LOADING_EXPEDITION,
    REQUEST_REJECTED_EXPEDITION
} from './action';
import records from './_records';
import axios from '../../utils/axios';

export function requestExpedition(id) {
    return dispatch => {
        dispatch(requestLoading());

        return axios
            .get('conteudo/expedicoes/' + id)
            .then(response => dispatch(fetchExpedition(response.data)))
            .catch(error => dispatch(requestRejected(error.message)));
    }
}

export function requestExpeditions() {
    return dispatch => {
        dispatch(requestLoading());

        return axios
            .get('conteudo/expedicoes')
            .then(response => dispatch(fetchExpeditions(response.data)))
            .catch(error => dispatch(requestRejected(error.message)));
    }
}

export function requestLoading() {
    return {
        type: REQUEST_LOADING_EXPEDITION
    };
}

export function requestRejected(response) {
    return {
        type: REQUEST_REJECTED_EXPEDITION,
        payload: response
    };
}

function fetchExpedition(response) {
    return {
        type: FETCH_EXPEDITION,
        payload: response
    };
}

function fetchExpeditions(response) {
    return {
        type: FETCH_EXPEDITIONS,
        payload: response
    };
}
