import {
    REQUEST_LOADING_CONTACT,
    REQUEST_REJECTED_CONTACT,
    REQUEST_FULFILLED_CONTACT
} from './action';
import axios from '../../utils/axios';

export function storeContact(data, type) {
    requestLoading();

    return function(dispatch) {
        return axios.post(`/contatos/${type}`, data)
            .then(function(response) {
                dispatch(requestFulfilled());
            })
            .catch(function(error){
                dispatch(requestRejected());
            })
    };
}

function requestLoading() {
    return {
        type: REQUEST_LOADING_CONTACT
    };
}

function requestRejected() {
    return {
        type: REQUEST_REJECTED_CONTACT
    };
}

function requestFulfilled() {
    return {
        type: REQUEST_FULFILLED_CONTACT
    }
}
