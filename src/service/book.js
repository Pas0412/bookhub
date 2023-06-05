import axios from '../utils/axios'

export function getAllBooks(params) {
    return axios.post('/all/', params)
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
  return axios.post('/rated/', params)
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.error(error);
    return [];
  });
}

export function getMostPopular(params) {
    return axios.get('/popular/', params);
}

export function getRecommended(params) {
    return axios.get('/recommended/', params);
}