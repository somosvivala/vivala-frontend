import {
    FETCH_EXPEDITION,
    FETCH_EXPEDITIONS,
    REQUEST_LOADING_EXPEDITION,
    REQUEST_REJECTED_EXPEDITION
} from './action';
import records from './_records';

export function requestExpedition(id) {
    requestLoading();
    const item = records.filter(record => record.id === parseInt(id, 10))[0];

    return function(dispatch) {
        if (!item) return dispatch(requestRejected('erro!'));

        return dispatch(fetchExpedition(item));
    };
}

export function requestExpeditions() {
    return function(dispatch) {
        dispatch(requestLoading());

        if (!records.length) return dispatch(requestRejected('erro!'));

        return dispatch(fetchExpeditions(records));
    };
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
