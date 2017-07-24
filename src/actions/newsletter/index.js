import {
    REQUEST_LOADING_NEWSLETTER,
    REQUEST_REJECTED_NEWSLETTER,
    REQUEST_FULFILLED_NEWSLETTER
} from './action';
import axios from '../../utils/axios';

export function storeNewsletter(data) {
    requestLoading();

    return function(dispatch) {
        return axios.post(`/newsletter`, { data })
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
        type: REQUEST_LOADING_NEWSLETTER
    };
}

function requestRejected() {
    return {
        type: REQUEST_REJECTED_NEWSLETTER
    };
}

function requestFulfilled() {
    return {
        type: REQUEST_FULFILLED_NEWSLETTER
    }
}
