import axios from '../utils/axios'

export function getboughtList(params) {
    return axios.post('/bought/', params)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export function setrate(params) {
    return axios.post('/setrate/', params)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}