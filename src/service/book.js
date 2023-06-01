import axios from '../utils/axios'

export function getMostRated(params) {
    return axios.get('/rated/', params);
}

export function getMostPopular(params) {
    return axios.get('/popular/', params);
}

export function getRecommended(params) {
    return axios.get('/recommended/', params);
}