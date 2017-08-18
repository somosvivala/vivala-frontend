import {
    REQUEST_LOADING_SUBSCRIBE,
    REQUEST_REJECTED_SUBSCRIBE,
    REQUEST_FULFILLED_SUBSCRIBE
} from './action';
import axios from '../../utils/axios';

export function storeSubscription(data) {
    requestLoading();

    return function(dispatch) {
        return axios.post(`/${data.record.type}/${data.record.id}/inscricoes`, data.values)
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
        type: REQUEST_LOADING_SUBSCRIBE
    };
}

function requestRejected() {
    return {
        type: REQUEST_REJECTED_SUBSCRIBE
    };
}

function requestFulfilled() {
    return {
        type: REQUEST_FULFILLED_SUBSCRIBE
    }
}
