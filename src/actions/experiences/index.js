import {
    FETCH_EXPERIENCE,
    FETCH_EXPERIENCES,
    REQUEST_LOADING_EXPERIENCE,
    REQUEST_REJECTED_EXPERIENCE
} from './action';
import axios from '../../utils/axios';

export function requestExperience(id) {
    return dispatch => {
        dispatch(requestLoading());

        return axios
            .get('conteudo/experiencias/' + id)
            .then(response => dispatch(fetchExperience(response.data)))
            .catch(error => dispatch(requestRejected(error.message)));
    }
}

export function requestExperiences() {
    return dispatch => {
        dispatch(requestLoading());

        return axios
            .get('conteudo/experiencias')
            .then(response => dispatch(fetchExperiences(response.data)))
            .catch(error => dispatch(requestRejected(error.message)));
    }
}

export function requestLoading() {
    return {
        type: REQUEST_LOADING_EXPERIENCE
    };
}

export function requestRejected(response) {
    return {
        type: REQUEST_REJECTED_EXPERIENCE,
        payload: response
    };
}

function fetchExperience(response) {
    return {
        type: FETCH_EXPERIENCE,
        payload: response
    };
}

function fetchExperiences(response) {
    return {
        type: FETCH_EXPERIENCES,
        payload: response
    };
}
