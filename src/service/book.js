import axios from '../utils/axios'

export function getAllBooks() {
    return axios.post('/all/')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getBookDetail(params) {
    return axios.post('/detail/', params)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function getMostRated(params) {
    return axios.get('/rated/', params);
}

export function getMostPopular(params) {
    return axios.get('/popular/', params);
}

export function getRecommended(params) {
    return axios.get('/recommended/', params);
}